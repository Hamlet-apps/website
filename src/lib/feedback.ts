/**
 * What the feedback form asks and how a bug report is judged complete.
 * Shared by the form and the server endpoint, so both apply the same rules.
 */

export type AppId = 'th' | 'pv' | 'web';

export interface FeedbackApp {
	name: string;
	/** Where feature ideas for this building are collected. The website has no board. */
	featureBoard?: string;
	areas: string[];
	/** Example answers, shown as placeholders so people can see what a useful report looks like. */
	example: {
		title: string;
		doing: string;
		happened: string;
		expected: string;
		steps: string[];
	};
}

export const apps: Record<AppId, FeedbackApp> = {
	th: {
		name: 'Town Hall',
		featureBoard: 'https://townhall.features.hamlet.software/',
		areas: [
			'Signing up for an event',
			'My events and shifts',
			'Checking in at the kiosk',
			'Training',
			'Profile and resume',
			'Staff console',
			'Somewhere else'
		],
		example: {
			title: 'Kiosk shows a blank page after I check in a volunteer',
			doing:
				'I was checking in volunteers for the food drive on the hall tablet. I tapped a name, then tapped Check in.',
			happened:
				'The screen went white and stayed that way. After I reloaded, the volunteer was not checked in.',
			expected: 'The volunteer shows as checked in',
			steps: [
				'Open the kiosk for an event',
				'Tap a volunteer who has a shift today',
				'Tap Check in'
			]
		}
	},
	pv: {
		name: 'Pavilion',
		featureBoard: 'https://pavilion.features.hamlet.software/',
		areas: [
			'Register',
			'Kitchen display',
			'Online store',
			'Courier app',
			'Screens and menu boards',
			'Inventory and Cookery',
			'Admin',
			'Somewhere else'
		],
		example: {
			title: 'Register freezes when I add a combo to an order',
			doing:
				'I was ringing up a lunch order on Register 1. I tapped Lunch combo and picked the smash burger.',
			happened:
				'The combo window stopped responding. I could not pick a side or close it, and had to reload the register.',
			expected: 'The combo is added to the order',
			steps: ['Open the register and sign in', 'Tap Lunch combo', 'Pick any main']
		}
	},
	web: {
		name: 'this website',
		areas: [
			'The village map',
			'The guidebook',
			'A building page',
			'The phone version',
			'Somewhere else'
		],
		example: {
			title: 'Town Hall window will not close on my tablet',
			doing:
				'I opened the village on my tablet and tapped the Town Hall building to read about it.',
			happened:
				'The X in the corner did nothing when I tapped it. I had to reload the page to get back to the map.',
			expected: 'The window closes and the map comes back',
			steps: [
				'Open the village on a tablet',
				'Tap the Town Hall building',
				'Tap the X in the corner'
			]
		}
	}
};

export const oftenOptions = ['Every time', 'Sometimes', 'It happened once'];
export const impactOptions = ['I cannot do my job', 'It slows me down', 'It is a small annoyance'];
export const deviceOptions = ['Computer', 'Phone', 'Tablet', 'Kiosk or TV'];

export const MAX_STEPS = 8;

export interface BugReport {
	title: string;
	area: string;
	doing: string;
	happened: string;
	expected: string;
	steps: string[];
	often: string;
	impact: string;
	device: string;
	browser: string;
}

export function emptyReport(): BugReport {
	return {
		title: '',
		area: '',
		doing: '',
		happened: '',
		expected: '',
		steps: ['', '', ''],
		often: '',
		impact: '',
		device: '',
		browser: ''
	};
}

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

/** Titles like "it's broken" or "website doesn't work" that say nothing we can act on. */
export function isVague(text: string) {
	return /^(the |my |this )?(it|site|website|app|page|thing|everything|register|kiosk|store)?\s*(is |just |keeps )?(broke|broken|doesn'?t work|does not work|not working|won'?t work|bug|bugged|error|crash(ed|es)?|help|problem|issue)[.!\s]*$/i.test(
		text.trim()
	);
}

export const filledSteps = (report: BugReport) =>
	report.steps.filter((step) => step.trim().length >= 3).length;

/** The four things a report needs before it can be sent. */
export function checkReport(report: BugReport) {
	return {
		title: countWords(report.title) >= 5 && !isVague(report.title),
		area: report.area !== '',
		happened: countWords(report.happened) >= 8,
		steps: filledSteps(report) >= 2
	};
}

/** Which screen of the feedback flow is showing. Each one has its own address. */
export interface FeedbackView {
	/** `report` is a bug report, `request` is a feature request. */
	kind?: 'report' | 'request';
	/** The building a bug report is about. */
	app?: AppId;
}

export const appSlugs: Record<AppId, string> = {
	th: 'town-hall',
	pv: 'pavilion',
	web: 'website'
};

export function feedbackPath({ kind, app }: FeedbackView = {}) {
	if (!kind) return '/feedback';
	return kind === 'report' && app ? `/feedback/report/${appSlugs[app]}` : `/feedback/${kind}`;
}

/**
 * Reads the part of the address after `/feedback`. Answers with the screen to
 * show, somewhere else to send the visitor, or nothing if the address is unknown.
 */
export function readFeedbackPath(
	kind?: string,
	building?: string
): { view: FeedbackView } | { redirect: string; external: boolean } | null {
	if (!kind) return building ? null : { view: {} };

	const app = (Object.keys(appSlugs) as AppId[]).find(
		(id) =>
			appSlugs[id] ===
			building
				?.toLowerCase()
				.replace(/[\s_]+/g, '-')
				.replace('townhall', 'town-hall')
	);
	if (building && !app) return null;

	switch (kind.toLowerCase()) {
		case 'report':
			return { view: { kind: 'report', app } };
		// An easy guess for the same thing.
		case 'bug':
			return { redirect: feedbackPath({ kind: 'report', app }), external: false };
		case 'request': {
			if (!app) return { view: { kind: 'request' } };
			// A building's feature requests live on its own board.
			const board = apps[app].featureBoard;
			return board ? { redirect: board, external: true } : null;
		}
		default:
			return null;
	}
}

/** What the bug report endpoint answers with. */
export type BugReportResult =
	{ ok: true; issueUrl: string | null } | { ok: false; message: string; fallbackUrl?: string };
