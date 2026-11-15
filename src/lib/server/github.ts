import { apps, type AppId, type BugReport } from '#lib/feedback.ts';

/**
 * Where bug reports are filed. Each can be overridden with an environment
 * variable, as `owner/name`.
 */
const defaultRepos: Record<AppId, string> = {
	th: 'Collert/town_hall',
	pv: 'Collert/Pavilion',
	web: 'Hamlet-apps/website'
};

const repoEnv: Record<AppId, string> = {
	th: 'GITHUB_REPO_TOWN_HALL',
	pv: 'GITHUB_REPO_PAVILION',
	web: 'GITHUB_REPO_WEBSITE'
};

export function repoFor(app: AppId) {
	const configured = process.env[repoEnv[app]]?.trim();
	return configured && /^[\w.-]+\/[\w.-]+$/.test(configured) ? configured : defaultRepos[app];
}

export const newIssueUrl = (app: AppId) => `https://github.com/${repoFor(app)}/issues/new`;

export class GitHubNotConfigured extends Error {}

// Reports come from strangers. Break "@name" so a report can't notify people,
// and keep text from starting its own heading or closing our formatting.
const ZERO_WIDTH_SPACE = String.fromCharCode(0x200b);
const plain = (text: string) => text.trim().replace(/@(?=\w)/g, `@${ZERO_WIDTH_SPACE}`);
const quote = (text: string) =>
	plain(text)
		.split('\n')
		.map((line) => `> ${line}`)
		.join('\n');

function issueBody(app: AppId, report: BugReport) {
	const sections = [
		`**Where:** ${plain(report.area)}`,
		`### What happened\n\n${quote(report.happened)}`
	];

	if (report.doing.trim()) {
		sections.push(`### What they were trying to do\n\n${quote(report.doing)}`);
	}
	if (report.expected.trim()) {
		sections.push(`### What they expected\n\n${quote(report.expected)}`);
	}

	const steps = report.steps.map(plain).filter(Boolean);
	sections.push(
		`### Steps to make it happen again\n\n${steps.map((step, i) => `${i + 1}. ${step.replace(/\n/g, ' ')}`).join('\n')}`
	);

	const details = [
		['How often', report.often],
		['How much it gets in the way', report.impact],
		['Using', [report.device, report.browser].map(plain).filter(Boolean).join(', ')]
	].filter(([, value]) => value);
	if (details.length) {
		sections.push(
			`### Details\n\n${details.map(([label, value]) => `- **${label}:** ${plain(value)}`).join('\n')}`
		);
	}

	sections.push(
		`---\n_Sent through the feedback form on the Hamlet website, about ${apps[app].name}._`
	);
	return sections.join('\n\n');
}

/** Files the report as an issue and returns the issue's web address. */
export async function createIssue(app: AppId, report: BugReport): Promise<string | null> {
	const token = process.env.GITHUB_TOKEN;
	if (!token) throw new GitHubNotConfigured('GITHUB_TOKEN is not set');

	const api = process.env.GITHUB_API_URL || 'https://api.github.com';
	const response = await fetch(`${api}/repos/${repoFor(app)}/issues`, {
		method: 'POST',
		headers: {
			accept: 'application/vnd.github+json',
			authorization: `Bearer ${token}`,
			'content-type': 'application/json',
			'user-agent': 'hamlet-website',
			'x-github-api-version': '2022-11-28'
		},
		body: JSON.stringify({
			title: plain(report.title),
			body: issueBody(app, report),
			labels: ['bug']
		}),
		signal: AbortSignal.timeout(15_000)
	});

	if (!response.ok) {
		throw new Error(`GitHub answered ${response.status}: ${(await response.text()).slice(0, 300)}`);
	}
	const issue: { html_url?: unknown } = await response.json();
	return typeof issue.html_url === 'string' ? issue.html_url : null;
}
