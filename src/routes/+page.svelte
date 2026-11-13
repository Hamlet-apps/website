<script lang="ts">
	import { onMount } from 'svelte';
	import ScrollingHome from '#lib/components/ScrollingHome.svelte';
	import VillageMap from '#lib/components/VillageMap.svelte';

	// Desktop-sized windows open on the village map; anything smaller gets the
	// scrolling page. Keep this query in sync with the script in app.html.
	const DESKTOP = '(min-width: 820px) and (min-height: 480px)';

	// The prerendered HTML is always the scrolling page, which also serves
	// search engines and browsers without JavaScript.
	let desktop = $state(false);

	onMount(() => {
		const query = matchMedia(DESKTOP);
		const update = () => {
			desktop = query.matches;
			document.documentElement.dataset.home = desktop ? 'map' : 'page';
		};
		update();
		query.addEventListener('change', update);
		return () => query.removeEventListener('change', update);
	});
</script>

<svelte:head>
	<title>Hamlet — a village of tools for small organizations</title>
	<meta
		name="description"
		content="Hamlet is a village of free, open-source, self-hosted tools for small organizations. Every app is a building."
	/>
</svelte:head>

{#if desktop}
	<VillageMap />
{:else}
	<div class="scrolling-home">
		<ScrollingHome />
	</div>
{/if}

<style>
	/* app.html marks desktop windows before first paint, so the scrolling page
	   doesn't flash while the map is on its way. */
	:global(html[data-home='map']) .scrolling-home {
		display: none;
	}
</style>
