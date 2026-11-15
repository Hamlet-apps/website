<script lang="ts">
	import ScrollingHome from '#lib/components/ScrollingHome.svelte';
	import VillageMap from '#lib/components/VillageMap.svelte';
	import { watchDesktop } from '#lib/desktop.svelte.ts';

	// Desktop-sized windows open on the village map; anything smaller gets the
	// scrolling page, which is also what search engines and browsers without
	// JavaScript are served.
	const desktop = watchDesktop();
</script>

<svelte:head>
	<title>Hamlet — a village of tools for small organizations</title>
	<meta
		name="description"
		content="Hamlet is a village of free, open-source, self-hosted tools for small organizations. Every app is a building."
	/>
</svelte:head>

{#if desktop.current}
	<VillageMap />
{:else}
	<div class="small-screens">
		<ScrollingHome />
	</div>
{/if}
