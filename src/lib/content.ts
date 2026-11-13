/** Copy and links shared by the home page and the village map. */

export const links = {
	// TODO: confirm. The design left the general GitHub link blank; this is the org that owns this repo.
	github: 'https://github.com/Hamlet-apps',
	// TODO: the install guide is still being written, so the design has no target for it yet.
	installGuide: '#'
};

export interface UpcomingBuilding {
	id: 'bt' | 'bk' | 'gt';
	name: string;
	status: 'In progress' | 'Planned';
	blurb: string;
}

export const upcomingBuildings: UpcomingBuilding[] = [
	{
		id: 'bt',
		name: 'Bell Tower',
		status: 'In progress',
		blurb:
			'Task lists that plug into every building, from planning a big event to day-of checklists for each role.'
	},
	{
		id: 'bk',
		name: 'Bank',
		status: 'Planned',
		blurb:
			'A small service that keeps loyalty point balances, so the other buildings can reward the same people.'
	},
	{
		id: 'gt',
		name: 'Gatehouse',
		status: 'Planned',
		blurb: 'One sign-in for the whole village. Log in once at the gate and walk into any building.'
	}
];

export interface Question {
	q: string;
	a: string;
}

export const faq: Question[] = [
	{
		q: 'Is it really free?',
		a: 'Yes. Every building is open source and free to run on your own hardware. Paid managed hosting will be an option later, never a requirement.'
	},
	{
		q: 'Do I have to use every app?',
		a: "No. Each building works on its own. Add more when you need them and they'll connect to what's already there."
	},
	{
		q: 'What do I need to host it?',
		a: "Anything that runs Docker: a home server, a mini PC, or a small cloud machine. Each building's guide lists what it needs."
	},
	{
		q: 'Who is it for?',
		a: 'Small organizations: churches, community groups, non-profits and independent restaurants that want good tools without monthly per-seat bills.'
	}
];

/** Extra questions that only appear in the village guidebook. */
export const guidebookFaq: Question[] = [
	{
		q: "What's coming next?",
		a: 'Bell Tower, for task lists, is in progress. Bank, for loyalty points, and Gatehouse, for one sign-in across the village, are planned.'
	},
	{
		q: 'Can someone host it for me?',
		a: 'Not yet. Managed hosting is planned for organizations that would rather not run a server.'
	}
];
