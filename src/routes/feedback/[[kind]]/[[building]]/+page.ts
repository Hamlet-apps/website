import { error, redirect } from '@sveltejs/kit';
import { readFeedbackPath } from '#lib/feedback.ts';
import type { PageLoad } from './$types';

// Some of these addresses redirect to the feature boards, so they are answered live.
export const prerender = false;

export const load: PageLoad = ({ params }) => {
	const result = readFeedbackPath(params.kind, params.building);
	if (!result) error(404, 'Not found');
	if ('redirect' in result) redirect(307, result.redirect, { external: result.external });
	return { view: result.view };
};
