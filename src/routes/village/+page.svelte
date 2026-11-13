<script lang="ts">
	import { onMount } from 'svelte';
	import Pavilion from '#lib/buildings/Pavilion.svelte';
	import TownHall from '#lib/buildings/TownHall.svelte';
	import Emblem from '#lib/components/Emblem.svelte';
	import Guidebook from '#lib/components/Guidebook.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Window from '#lib/components/Window.svelte';
	import { links, upcomingBuildings } from '#lib/content.ts';

	type BuildingId = 'th' | 'pv' | 'bt' | 'bk' | 'gt';
	type WindowId = BuildingId | 'welcome' | 'guide';

	// Everything on the map is placed in map pixels: the 960×640 art drawn at 3×.
	// Buildings are listed back to front.
	const buildings: {
		id: BuildingId;
		label: string;
		img: string;
		x: number;
		y: number;
		w: number;
		h: number;
	}[] = [
		{
			id: 'bt',
			label: 'Bell Tower, under construction',
			img: 'bell-tower',
			x: 1365,
			y: 375,
			w: 165,
			h: 288
		},
		{
			id: 'th',
			label: 'Town Hall, volunteer management',
			img: 'town-hall',
			x: 864,
			y: 423,
			w: 510,
			h: 462
		},
		{
			id: 'pv',
			label: 'Pavilion, restaurant management',
			img: 'pavilion',
			x: 1512,
			y: 375,
			w: 525,
			h: 552
		},
		{ id: 'bk', label: 'Bank, under construction', img: 'bank', x: 1641, y: 975, w: 270, h: 222 },
		{
			id: 'gt',
			label: 'Gatehouse, under construction',
			img: 'gatehouse',
			x: 1308,
			y: 1182,
			w: 258,
			h: 168
		}
	];

	const openSigns = [
		{ building: 'town-hall', name: 'Town Hall', kind: 'Volunteer management', x: 1000, y: 478 },
		{ building: 'pavilion', name: 'Pavilion', kind: 'Restaurant management', x: 1770, y: 586 }
	] as const;

	const comingSoonSigns = [
		{ name: 'Bell Tower', x: 1447, y: 366 },
		{ name: 'Bank', x: 1776, y: 968 },
		{ name: 'Gatehouse', x: 1437, y: 1174 }
	];

	// Villagers: [x, y, animation seconds, animation delay]. Each uses the next row of the sprite sheet.
	const villagers = [
		[1371, 660, 0.75, 0],
		[1650, 813, 1.8, -0.37],
		[1593, 840, 2.1, -0.74],
		[1230, 864, 1.65, -1.11],
		[1974, 891, 0.75, -0.73],
		[1680, 894, 1.2, -0.65],
		[1476, 906, 2.1, -0.12],
		[1089, 912, 1.65, -0.94],
		[1356, 918, 1.5, -1.46],
		[1272, 936, 1.8, -1.53],
		[852, 948, 1.05, -0.55],
		[915, 957, 1.65, -0.77],
		[1560, 972, 1.5, -1.44],
		[1500, 990, 1.2, -0.01],
		[1560, 1002, 1.05, -0.98],
		[1392, 1038, 1.65, -0.6],
		[1461, 1053, 1.5, -1.42],
		[1428, 1158, 1.8, -0.89],
		[1689, 1158, 0.75, -0.66],
		[1887, 1188, 1.65, -0.43],
		[1275, 1263, 0.75, -0.65],
		[1722, 1269, 1.2, -0.57],
		[1410, 1563, 2.1, -1.84],
		[1350, 1563, 1.2, -0.11]
	];

	// How far the map can be dragged from centre, in px.
	const PAN = { minX: -1080, maxX: 1080, minY: -700, maxY: 620 };
	const DRAG_THRESHOLD = 6;
	const MIN_LOADING_MS = 900;
	const MAX_LOADING_MS = 9000;

	let dx = $state(0);
	let dy = $state(0);
	let dragging = $state(false);
	let hover = $state<BuildingId | null>(null);
	let open = $state<WindowId | null>('welcome');
	let loaded = $state(false);

	let root: HTMLElement;
	let map: HTMLElement;
	let press: { x: number; y: number; dx: number; dy: number; id: number } | null = null;
	// True once a press has turned into a drag, so the click that follows doesn't open a building.
	let moved = false;

	// The welcome note sits in a corner; everything else is modal.
	const modal = $derived(open !== null && open !== 'welcome');
	const paused = $derived(modal || !loaded);

	const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

	function show(id: WindowId) {
		open = id;
		hover = null;
	}

	function close() {
		open = null;
	}

	function visit(id: BuildingId) {
		if (!moved) show(id);
	}

	function recentre() {
		dx = 0;
		dy = 0;
		dragging = false;
	}

	function onpointerdown(e: PointerEvent) {
		if (e.button !== 0) return;
		press = { x: e.clientX, y: e.clientY, dx, dy, id: e.pointerId };
		moved = false;
	}

	function onpointermove(e: PointerEvent) {
		if (!press) return;
		const mx = e.clientX - press.x;
		const my = e.clientY - press.y;
		if (!moved) {
			if (Math.abs(mx) + Math.abs(my) < DRAG_THRESHOLD) return;
			moved = true;
			try {
				root.setPointerCapture(press.id);
			} catch {
				// The pointer is already gone; the drag just won't be captured.
			}
		}
		dx = clamp(Math.round(press.dx + mx), PAN.minX, PAN.maxX);
		dy = clamp(Math.round(press.dy + my), PAN.minY, PAN.maxY);
		dragging = true;
		hover = null;
	}

	function onpointerup() {
		press = null;
		dragging = false;
	}

	function stop(e: Event) {
		e.stopPropagation();
	}

	// Hold the loading screen until the map art is in, but never for less than
	// a beat (so it doesn't flash) or more than a few seconds (if an image fails).
	onMount(() => {
		const started = Date.now();
		let reveal: ReturnType<typeof setTimeout>;
		const fallback = setTimeout(() => (loaded = true), MAX_LOADING_MS);

		const images = [...map.querySelectorAll('img')].map(
			(img) =>
				img.complete ||
				new Promise((resolve) => {
					img.addEventListener('load', resolve, { once: true });
					img.addEventListener('error', resolve, { once: true });
				})
		);
		Promise.all(images).then(() => {
			reveal = setTimeout(
				() => (loaded = true),
				Math.max(0, MIN_LOADING_MS - (Date.now() - started))
			);
		});

		return () => {
			clearTimeout(fallback);
			clearTimeout(reveal);
		};
	});
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && close()} />

<svelte:head>
	<title>The village — Hamlet</title>
	<meta
		name="description"
		content="Look around the Hamlet village. Every app is a building: click one to step inside."
	/>
</svelte:head>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	bind:this={root}
	class="village sea"
	class:paused
	class:dragging
	style:background-position="calc(50% + {dx}px) calc(50% + {dy}px)"
	{onpointerdown}
	{onpointermove}
	{onpointerup}
	onpointercancel={onpointerup}
>
	<div class="anchor">
		<div bind:this={map} class="map" style:transform="translate({dx}px, {dy}px)">
			<img class="layer" src="/img/village/island.png" alt="" draggable="false" />
			<img class="ship" src="/img/village/ship.png" alt="" draggable="false" />

			{#each buildings as b (b.id)}
				<button
					type="button"
					class="building"
					class:glow={hover === b.id}
					aria-label={b.label}
					style:left="{b.x}px"
					style:top="{b.y}px"
					style:width="{b.w}px"
					style:height="{b.h}px"
					onclick={() => visit(b.id)}
					onmouseenter={() => (hover = b.id)}
					onmouseleave={() => (hover = null)}
					onfocus={() => (hover = b.id)}
					onblur={() => (hover = null)}
				>
					<img src="/img/village/{b.img}.png" alt="" draggable="false" />
				</button>
			{/each}

			<img class="layer" src="/img/village/overlay.png" alt="" draggable="false" />
			<div class="windmill" aria-hidden="true"></div>
			{#each villagers as [x, y, duration, delay], i (i)}
				<div
					class="villager"
					aria-hidden="true"
					style:left="{x}px"
					style:top="{y}px"
					style:background-position-y="{-30 * i}px"
					style:animation-duration="{duration}s"
					style:animation-delay="{delay}s"
				></div>
			{/each}

			{#each openSigns as sign (sign.name)}
				<div class="sign sign--open" style:left="{sign.x}px" style:top="{sign.y}px">
					<Emblem building={sign.building} size={34} />
					<div>
						<div class="sign-name">{sign.name}</div>
						<div class="sign-kind">{sign.kind}</div>
					</div>
				</div>
			{/each}
			{#each comingSoonSigns as sign (sign.name)}
				<div class="sign sign--soon" style:left="{sign.x}px" style:top="{sign.y}px">
					{sign.name} · coming soon
				</div>
			{/each}
		</div>
	</div>

	<header onpointerdown={stop}>
		<button
			type="button"
			class="wordmark"
			aria-label="Hamlet, open the guidebook"
			onclick={() => show('guide')}
		>
			<span class="wordmark-name">Hamlet</span>
			<span class="wordmark-tag">A village of tools for small organizations</span>
		</button>
		<nav aria-label="Main">
			<button type="button" class="btn" onclick={recentre}>Back to the square</button>
			<button type="button" class="btn" onclick={() => show('guide')}>What is Hamlet?</button>
			<a class="btn" href={links.github}>GitHub</a>
		</nav>
	</header>

	<p class="hint">Drag to look around · Click a building</p>

	{#if open === 'welcome'}
		<section class="welcome" aria-label="Welcome" onpointerdown={stop}>
			<div class="welcome-bar">
				<Icon name="house" />
				<h2>Welcome to Hamlet</h2>
				<button type="button" aria-label="Close" onclick={close}>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="square"
						aria-hidden="true"
					>
						<path d="M3 3 L13 13 M13 3 L3 13" />
					</svg>
				</button>
			</div>
			<div class="welcome-body">
				<p>
					Hamlet is a village of free, open-source tools for small organizations. Every app is a
					building.
				</p>
				<p>Drag to look around. Click a building to step inside.</p>
				<div>
					<button type="button" class="btn btn--dark" onclick={() => show('guide')}>
						<Icon name="book" size={20} />Read the guide
					</button>
				</div>
			</div>
		</section>
	{/if}

	{#if modal}
		<button
			type="button"
			class="backdrop"
			aria-label="Close window"
			onpointerdown={stop}
			onclick={close}
		></button>
	{/if}

	{#if open === 'guide'}
		<Guidebook onclose={close} />
	{:else if open === 'th'}
		<Window label="Town Hall" size="large" onclose={close}>
			<TownHall embedded />
		</Window>
	{:else if open === 'pv'}
		<Window label="Pavilion" size="large" onclose={close}>
			<Pavilion embedded />
		</Window>
	{/if}

	{#each upcomingBuildings as building (building.id)}
		{#if open === building.id}
			<Window
				label={building.name}
				title={building.name}
				icon="hammer"
				tone="wood"
				size="small"
				onclose={close}
			>
				<p class="eyebrow">Under construction</p>
				<p class="blurb">{building.blurb}</p>
			</Window>
		{/if}
	{/each}

	{#if !loaded}
		<div class="loading sea" role="status" onpointerdown={stop}>
			<div class="loading-mark">Hamlet</div>
			<div class="blocks" aria-hidden="true">
				{#each [0, 0.2, 0.4, 0.6, 0.8] as delay (delay)}
					<span style:animation-delay="{delay}s"></span>
				{/each}
			</div>
			<p>Raising the village…</p>
		</div>
	{/if}
</div>

<style>
	/* The map fills the window and pans instead of scrolling. */
	:global(body:has(.village)) {
		overflow: hidden;
	}

	.village {
		position: relative;
		height: 100vh;
		height: 100dvh;
		min-height: 480px;
		overflow: hidden;
		touch-action: none;
		user-select: none;
		-webkit-user-select: none;
		cursor: grab;
		font-family: var(--font-body);
		color: var(--ink);
	}
	.village.dragging {
		cursor: grabbing;
	}

	/* Map */
	.anchor {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 0;
		height: 0;
	}
	.map {
		position: absolute;
		left: -1440px;
		top: -960px;
		width: 2880px;
		height: 1920px;
		transition: transform 0.35s ease-out;
	}
	.dragging .map {
		transition: none;
	}
	.map img {
		image-rendering: pixelated;
		pointer-events: none;
	}
	.layer {
		position: absolute;
		left: 0;
		top: 0;
		width: 2880px;
		height: 1920px;
	}
	.ship {
		position: absolute;
		left: 1371px;
		top: 1497px;
		width: 204px;
		height: 177px;
		animation: bob 2.6s step-end infinite;
	}
	.building {
		position: absolute;
		padding: 0;
		margin: 0;
		border: 0;
		background: none;
		outline: none;
		cursor: pointer;
	}
	.building img {
		display: block;
		width: 100%;
		height: 100%;
	}
	/* A pixel outline for the hovered or focused building. */
	.building.glow img {
		filter: drop-shadow(3px 0 0 var(--cream)) drop-shadow(-3px 0 0 var(--cream))
			drop-shadow(0 3px 0 var(--cream)) drop-shadow(0 -3px 0 var(--cream));
	}
	.windmill {
		position: absolute;
		left: 2043px;
		top: 759px;
		width: 135px;
		height: 150px;
		background-image: url(/img/village/windmill.png);
		background-size: 540px 150px;
		background-repeat: no-repeat;
		image-rendering: pixelated;
		pointer-events: none;
		animation: windmill 1.4s steps(4) infinite;
	}
	.villager {
		position: absolute;
		width: 30px;
		height: 30px;
		background-image: url(/img/village/people.png);
		background-size: 90px 720px;
		background-repeat: no-repeat;
		image-rendering: pixelated;
		pointer-events: none;
		animation: villager 1.6s steps(3) infinite;
	}
	.paused :is(.ship, .windmill, .villager) {
		animation-play-state: paused;
	}

	.sign {
		position: absolute;
		transform: translate(-50%, -100%);
		background: var(--cream);
		pointer-events: none;
		white-space: nowrap;
	}
	.sign--open {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 6px 14px 6px 6px;
		border: 3px solid var(--ink);
		box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4);
	}
	.sign-name {
		font-family: var(--font-pixel);
		font-size: 20px;
		font-weight: 600;
		line-height: 1.1;
	}
	.sign-kind {
		font-size: 12px;
		font-weight: 700;
		line-height: 1.3;
		color: var(--text-muted);
	}
	.sign--soon {
		padding: 3px 10px;
		border: 3px dashed var(--wood);
		font-family: var(--font-pixel);
		font-size: 15px;
		font-weight: 500;
		color: var(--tan-ink);
	}

	/* Chrome over the map */
	header {
		position: absolute;
		left: 24px;
		top: 24px;
		right: 24px;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 12px;
		pointer-events: none;
	}
	header nav {
		pointer-events: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.wordmark {
		pointer-events: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2px;
		padding: 10px 18px 12px;
		background: var(--ink);
		color: var(--cream);
		border: 3px solid var(--cream);
		box-shadow: 4px 4px 0 var(--shadow);
		cursor: pointer;
		text-align: left;
	}
	.wordmark-name {
		font-family: var(--font-pixel);
		font-size: 30px;
		font-weight: 700;
		line-height: 1;
	}
	.wordmark-tag {
		font-family: var(--font-body);
		font-size: 13px;
		font-weight: 700;
		color: var(--cream-dim);
	}
	.hint {
		position: absolute;
		left: 24px;
		bottom: 24px;
		margin: 0;
		padding: 8px 12px;
		background: var(--ink);
		color: var(--cream);
		font-family: var(--font-pixel);
		font-size: 15px;
		font-weight: 500;
		pointer-events: none;
	}

	.welcome {
		position: absolute;
		right: 24px;
		bottom: 24px;
		width: 380px;
		max-width: calc(100% - 48px);
		box-sizing: border-box;
		background: var(--cream);
		border: 3px solid var(--ink);
		box-shadow: 6px 6px 0 var(--shadow);
		cursor: default;
		user-select: text;
		-webkit-user-select: text;
	}
	.welcome-bar {
		display: flex;
		align-items: center;
		gap: 10px;
		padding-left: 10px;
		background: var(--ink);
		color: var(--cream);
		border-bottom: 3px solid var(--ink);
	}
	.welcome-bar h2 {
		margin: 0;
		flex: 1;
		font-family: var(--font-pixel);
		font-size: 20px;
		font-weight: 600;
		line-height: 1.2;
	}
	.welcome-bar button {
		width: 44px;
		height: 44px;
		padding: 0;
		border: 0;
		border-left: 3px solid var(--ink);
		background: var(--cream);
		color: var(--ink);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.welcome-body {
		padding: 16px 18px 20px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.welcome-body p {
		margin: 0;
		font-size: 15px;
		line-height: 1.6;
	}

	.backdrop {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		border: 0;
		background: rgba(22, 26, 40, 0.5);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		cursor: default;
	}

	/* Inside the "under construction" windows */
	.eyebrow,
	.blurb {
		margin: 0;
	}
	.eyebrow {
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
	}
	.blurb {
		font-size: 15.5px;
		line-height: 1.6;
	}

	/* Loading screen */
	.loading {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 22px;
		cursor: progress;
	}
	.loading-mark {
		padding: 12px 24px 14px;
		background: var(--ink);
		color: var(--cream);
		border: 3px solid var(--cream);
		box-shadow: 5px 5px 0 var(--shadow);
		font-family: var(--font-pixel);
		font-size: 44px;
		font-weight: 700;
		line-height: 1;
	}
	.blocks {
		display: flex;
		gap: 8px;
		padding-top: 6px;
	}
	.blocks span {
		width: 14px;
		height: 14px;
		background: var(--cream);
		border: 3px solid var(--ink);
		animation: block 1s step-end infinite;
	}
	.loading p {
		margin: 0;
		padding: 6px 12px;
		background: var(--ink);
		color: var(--cream);
		font-family: var(--font-pixel);
		font-size: 16px;
		font-weight: 500;
	}

	@keyframes villager {
		to {
			background-position-x: -90px;
		}
	}
	@keyframes windmill {
		to {
			background-position-x: -540px;
		}
	}
	@keyframes bob {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(3px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes block {
		0% {
			background: var(--amber);
			transform: translateY(-6px);
		}
		20% {
			background: var(--cream);
			transform: translateY(0);
		}
		100% {
			background: var(--cream);
			transform: translateY(0);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.ship,
		.windmill,
		.villager,
		.blocks span {
			animation: none;
		}
	}
</style>
