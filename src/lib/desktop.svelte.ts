import { onMount } from 'svelte';

// Keep this query in sync with the script in app.html.
const DESKTOP = '(min-width: 820px) and (min-height: 480px)';

/**
 * Tells a page whether the window is desktop-sized, which decides between the
 * village map and the small-screen pages. It starts out false, so the server
 * always renders the small-screen page; app.html hides that page on desktop
 * (see `.small-screens` in app.css) until the map takes over.
 */
export function watchDesktop() {
	let current = $state(false);

	onMount(() => {
		const query = matchMedia(DESKTOP);
		const update = () => {
			current = query.matches;
			document.documentElement.dataset.home = current ? 'map' : 'page';
		};
		update();
		query.addEventListener('change', update);
		return () => query.removeEventListener('change', update);
	});

	return {
		get current() {
			return current;
		}
	};
}
