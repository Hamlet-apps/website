<script lang="ts">
	import { page } from '$app/state';
	import Feedback from '#lib/components/Feedback.svelte';
	import VillageMap from '#lib/components/VillageMap.svelte';
	import { watchDesktop } from '#lib/desktop.svelte.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	// Like the home page: desktop-sized windows get the village map, here with
	// the feedback window open over it; smaller ones get the form as a page.
	const desktop = watchDesktop();
</script>

<svelte:head>
	<title>Give feedback — Hamlet</title>
	<meta
		name="description"
		content="Report a bug or request a feature for Town Hall, Pavilion or the Hamlet website."
	/>
</svelte:head>

{#if desktop.current}
	<VillageMap feedback={data.view} />
{:else}
	<div class="small-screens">
		<Feedback view={page.state.feedback ?? data.view} />
	</div>
{/if}
