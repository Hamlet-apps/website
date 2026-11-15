import { json } from '@sveltejs/kit';
import {
	apps,
	checkReport,
	deviceOptions,
	impactOptions,
	MAX_STEPS,
	oftenOptions,
	type AppId,
	type BugReport,
	type BugReportResult
} from '#lib/feedback.ts';
import { createIssue, GitHubNotConfigured, newIssueUrl } from '#lib/server/github.ts';
import type { RequestHandler } from './$types';

export const prerender = false;

// This endpoint is open to anyone and writes to GitHub, so it is throttled.
// The counts live in memory, which is enough for one small server.
const PER_VISITOR = { max: 5, windowMs: 10 * 60_000 };
const EVERYONE = { max: 40, windowMs: 60 * 60_000 };
const MAX_BODY_BYTES = 20_000;

const recent = new Map<string, number[]>();

function allowed(key: string, limit: { max: number; windowMs: number }) {
	const now = Date.now();
	const times = (recent.get(key) ?? []).filter((t) => now - t < limit.windowMs);
	const ok = times.length < limit.max;
	if (ok) times.push(now);
	recent.set(key, times);
	if (recent.size > 5000) {
		for (const [k, ts] of recent)
			if (ts.every((t) => now - t >= EVERYONE.windowMs)) recent.delete(k);
	}
	return ok;
}

const fail = (status: number, message: string, fallbackUrl?: string) =>
	json({ ok: false, message, fallbackUrl } satisfies BugReportResult, { status });

const text = (value: unknown, max: number) =>
	typeof value === 'string' ? value.trim().slice(0, max) : '';

/** Accepts only one of the offered choices; anything else counts as unanswered. */
const choice = (value: unknown, options: string[]) =>
	typeof value === 'string' && options.includes(value) ? value : '';

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	const raw = await request.text();
	if (raw.length > MAX_BODY_BYTES) return fail(413, 'That report is too long to send.');

	let input: Record<string, unknown>;
	try {
		input = JSON.parse(raw);
		if (typeof input !== 'object' || input === null) throw new Error('not an object');
	} catch {
		return fail(400, 'That report could not be read.');
	}

	const app = input.app as AppId;
	if (!Object.hasOwn(apps, app)) return fail(400, 'Pick the building the bug is in.');
	const fallbackUrl = newIssueUrl(app);

	// A field people never see. Only scripts fill it in, so say thanks and file nothing.
	if (input.website) return json({ ok: true, issueUrl: null } satisfies BugReportResult);

	const report: BugReport = {
		title: text(input.title, 200),
		area: choice(input.area, apps[app].areas),
		doing: text(input.doing, 3000),
		happened: text(input.happened, 3000),
		expected: text(input.expected, 500),
		steps: (Array.isArray(input.steps) ? input.steps : [])
			.slice(0, MAX_STEPS)
			.map((step) => text(step, 300)),
		often: choice(input.often, oftenOptions),
		impact: choice(input.impact, impactOptions),
		device: choice(input.device, deviceOptions),
		browser: text(input.browser, 100)
	};

	if (!Object.values(checkReport(report)).every(Boolean)) {
		return fail(400, 'The report is missing something we need. Check the list and try again.');
	}

	let visitor = 'unknown';
	try {
		visitor = getClientAddress();
	} catch {
		// No address available; everyone shares one allowance.
	}
	if (!allowed(`visitor:${visitor}`, PER_VISITOR) || !allowed('everyone', EVERYONE)) {
		return fail(
			429,
			'We are getting a lot of reports right now. Please wait a few minutes and try again.',
			fallbackUrl
		);
	}

	try {
		const issueUrl = await createIssue(app, report);
		return json({ ok: true, issueUrl } satisfies BugReportResult);
	} catch (error) {
		if (error instanceof GitHubNotConfigured) {
			console.error('Bug report not filed: set GITHUB_TOKEN to let the website create issues.');
		} else {
			console.error('Bug report not filed:', error);
		}
		return fail(502, 'We could not file your report just now.', fallbackUrl);
	}
};
