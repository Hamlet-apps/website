<script lang="ts" module>
	// Square-capped line icons on a 24px grid, drawn to sit next to the pixel type.
	const icons = {
		house:
			'<path d="M4 11 L12 4 L20 11"/><path d="M6 10 V20 H18 V10"/><path d="M10 20 V14 H14 V20"/>',
		server:
			'<rect x="3" y="4" width="18" height="7"/><rect x="3" y="13" width="18" height="7"/><path d="M7 7.5 H8 M7 16.5 H8"/>',
		network:
			'<rect x="3" y="9" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="15" y="15" width="6" height="6"/><path d="M9 11 L15 7 M9 13 L15 17"/>',
		book: '<path d="M4 5 H11 V20 H4 Z M13 5 H20 V20 H13 Z"/>',
		ledger:
			'<path d="M4 6 H11 V19 H4 Z M13 6 H20 V19 H13 Z"/><path d="M6.5 10 H8.5 M15.5 10 H17.5 M6.5 13 H8.5 M15.5 13 H17.5"/>',
		key: '<rect x="3" y="8" width="8" height="8"/><path d="M11 12 H21 M17 12 V16 M20 12 V15"/>',
		hammer: '<path d="M5 20 L13 12"/><path d="M11 6 L18 13 L21 10 L14 3 Z"/>'
	} as const;

	export type IconName = keyof typeof icons;
</script>

<script lang="ts">
	interface Props {
		name: IconName;
		size?: number;
	}

	let { name, size = 24 }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2.4"
	stroke-linecap="square"
	stroke-linejoin="miter"
	aria-hidden="true"
>
	{@html icons[name]}
</svg>

<style>
	svg {
		flex: none;
	}
</style>
