<script lang="ts">
	interface Props {
		building: 'town-hall' | 'pavilion';
		size?: number;
	}

	let { building, size = 56 }: Props = $props();
</script>

<svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
	{#if building === 'town-hall'}
		<rect width="64" height="64" rx="17" fill="#2b3a67" />
		<path
			d="M10.5 27L32 11.5L53.5 27Z"
			fill="#f6e9d2"
			stroke="#f6e9d2"
			stroke-width="3"
			stroke-linejoin="round"
		/>
		<rect x="15" y="27" width="34" height="25" rx="2.5" fill="#f6e9d2" />
		<circle cx="32" cy="27.5" r="7.2" fill="#2b3a67" />
		<path
			d="M32 23.6V27.5L34.8 29.4"
			fill="none"
			stroke="#f6e9d2"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path d="M27.5 52V43.5A4.5 4.5 0 0 1 36.5 43.5V52Z" fill="#2b3a67" />
	{:else}
		<rect width="64" height="64" rx="17" fill="#1f4a3a" />
		<circle cx="32" cy="19.5" r="3.2" fill="#f4a93b" />
		<path d="M12 42.5A20 18.5 0 0 1 52 42.5Z" fill="#f4a93b" />
		<path
			d="M19.5 37.5A13.5 12 0 0 1 26.5 29"
			fill="none"
			stroke="#1f4a3a"
			stroke-width="2.6"
			stroke-linecap="round"
		/>
		<path d="M9 47.5H55" stroke="#f4a93b" stroke-width="4.5" stroke-linecap="round" />
	{/if}
</svg>

<style>
	svg {
		flex: none;
		display: block;
	}
</style>
