<!--
  A pixel-art window that floats over the village map.
  With a `title` it gets a title bar; without one (the building pages bring
  their own header) the close button floats in the corner instead.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon, { type IconName } from './Icon.svelte';

	interface Props {
		label: string;
		size: 'small' | 'guide' | 'large';
		title?: string;
		icon?: IconName;
		tone?: 'ink' | 'wood';
		onclose: () => void;
		/** Fixed strip between the title bar and the scrolling body. */
		toolbar?: Snippet;
		children: Snippet;
	}

	let { label, size, title, icon, tone = 'ink', onclose, toolbar, children }: Props = $props();
</script>

{#snippet cross()}
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
{/snippet}

<!-- Pointer events stop here so dragging inside a window doesn't pan the map. -->
<div
	class="win win--{size}"
	role="dialog"
	tabindex="-1"
	aria-label={label}
	onpointerdown={(e) => e.stopPropagation()}
>
	{#if title}
		<div class="bar bar--{tone}">
			{#if icon}<Icon name={icon} />{/if}
			<h2>{title}</h2>
			<button type="button" class="close" aria-label="Close" onclick={onclose}>
				{@render cross()}
			</button>
		</div>
	{/if}
	{@render toolbar?.()}
	<div class="body">
		{@render children()}
	</div>
	{#if !title}
		<button type="button" class="close close--floating" aria-label="Close" onclick={onclose}>
			{@render cross()}
		</button>
	{/if}
</div>

<style>
	.win {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		max-width: calc(100% - 32px);
		max-height: calc(100% - 32px);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		background: var(--cream);
		border: 3px solid var(--ink);
		box-shadow: 8px 8px 0 rgba(20, 16, 24, 0.55);
		cursor: default;
		user-select: text;
		-webkit-user-select: text;
		animation: pop 0.15s steps(3) both;
	}
	.win--small {
		width: 460px;
	}
	.win--guide {
		width: 920px;
		height: 660px;
	}
	.win--large {
		width: 90%;
		max-width: 1400px;
		height: 94%;
		overflow: hidden;
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 10px;
		padding-left: 10px;
		color: var(--cream);
		border-bottom: 3px solid var(--ink);
		flex: none;
	}
	.bar--ink {
		background: var(--ink);
	}
	.bar--wood {
		background: var(--wood);
	}
	.bar h2 {
		margin: 0;
		flex: 1;
		font-family: var(--font-pixel);
		font-size: 20px;
		font-weight: 600;
		line-height: 1.2;
	}

	.close {
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
	.close--floating {
		position: absolute;
		right: 12px;
		top: 12px;
		border: 3px solid var(--ink);
		box-shadow: 3px 3px 0 var(--shadow);
	}

	/* The map sets touch-action: none, so scrolling is re-enabled here. */
	.body {
		overflow-y: auto;
		touch-action: pan-y;
		overscroll-behavior: contain;
		min-height: 0;
	}
	.win--small .body {
		padding: 18px 22px 22px;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.win--guide .body {
		flex: 1;
		padding: 24px 28px 30px;
	}
	.win--large .body {
		flex: 1;
	}

	@keyframes pop {
		0% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(0.94);
		}
		100% {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.win {
			animation: none;
		}
	}
</style>
