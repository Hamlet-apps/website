<script lang="ts">
	import Emblem from '#lib/components/Emblem.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import InstallSnippet from '#lib/components/InstallSnippet.svelte';
	import { faq, links, upcomingBuildings } from '#lib/content.ts';

	const sceneAlt =
		'The Hamlet village on its island: Town Hall with a clock tower, the Pavilion tavern, cottages, a windmill and a boat at the dock.';

	let innerWidth = $state<number>();
	let innerHeight = $state<number>();
	let askToRotate = $state(false);

	// The village map is wide, so a phone held upright is asked to turn first.
	// Before the size is known (server render, no JS) the hero is a plain link.
	const portrait = $derived(
		innerWidth !== undefined &&
			innerHeight !== undefined &&
			innerWidth < 820 &&
			innerHeight > innerWidth
	);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<svelte:head>
	<title>Hamlet — a village of tools for small organizations</title>
	<meta
		name="description"
		content="Hamlet is a village of free, open-source, self-hosted tools for small organizations. Every app is a building."
	/>
</svelte:head>

<div class="sea page">
	<header class="top">
		<a class="wordmark" href="#top">Hamlet</a>
		<nav aria-label="Main">
			<a class="btn" href="#buildings">Buildings</a>
			<a class="btn" href="#self-host">Self-host</a>
			<a class="btn" href="#faq">FAQ</a>
		</nav>
	</header>

	<section id="top" class="band intro">
		<div class="card card--lg">
			<p class="eyebrow">Free and open source · self-hosted</p>
			<h1>A village of tools for small organizations.</h1>
			<p class="lede">
				Every app in Hamlet is a building. Move in to the ones you need, run them on your own
				server, and they'll work together as the village grows.
			</p>
			<div class="actions">
				<a class="btn btn--dark btn--lg" href="#buildings">Tour the buildings</a>
				<a class="btn btn--lg" href="#self-host">Host it yourself</a>
			</div>
		</div>
	</section>

	{#if portrait}
		<div class="hero">
			<img class="scene" src="/img/village/scene.png" alt={sceneAlt} />
			{#if askToRotate}
				<div class="scrim">
					<div class="card rotate" role="dialog" aria-label="Rotate your phone">
						<div class="rotate-title">
							<svg
								class="tilt"
								width="44"
								height="44"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								aria-hidden="true"
							>
								<rect x="7" y="2.5" width="10" height="19" />
								<path d="M11 18.5 H13" />
							</svg>
							<h2>Turn your phone sideways</h2>
						</div>
						<p>The village map is wide. It looks best in landscape.</p>
						<div class="actions">
							<a class="btn btn--dark" href="/village">Open the map</a>
							<button type="button" class="btn" onclick={() => (askToRotate = false)}>
								Not now
							</button>
						</div>
					</div>
				</div>
			{:else}
				<button
					type="button"
					class="hero-hit"
					aria-label="Explore the village map"
					onclick={() => (askToRotate = true)}
				>
					<span class="btn btn--lg">Explore the village <span aria-hidden="true">→</span></span>
				</button>
			{/if}
		</div>
	{:else}
		<a class="hero" href="/village" aria-label="Explore the village map">
			<img class="scene" src="/img/village/scene.png" alt={sceneAlt} />
			<span class="hero-cta">
				<span class="btn btn--lg">Explore the village <span aria-hidden="true">→</span></span>
			</span>
		</a>
	{/if}

	<section class="band">
		<h2 id="how" class="sign">How the village works</h2>
		<div class="grid">
			<div class="card">
				<div class="card-head">
					<Icon name="house" size={28} />
					<h3>Every app is a building</h3>
				</div>
				<p>
					Each one stands on its own. A restaurant can run Pavilion without ever touching Town Hall.
					Take the buildings you need and skip the rest.
				</p>
			</div>
			<div class="card">
				<div class="card-head">
					<Icon name="server" size={28} />
					<h3>Your server, your data</h3>
				</div>
				<p>
					Every building ships as a Docker image. Run it on a homelab, a mini PC in the back office,
					or any server you trust. No one else holds your data.
				</p>
			</div>
			<div class="card">
				<div class="card-head">
					<Icon name="network" size={28} />
					<h3>Buildings talk to each other</h3>
				</div>
				<p>
					Put more than one up and they connect. Town Hall events turn into Bell Tower task lists,
					and Gatehouse will give everyone one sign-in for the whole village.
				</p>
			</div>
		</div>
	</section>

	<section class="band">
		<h2 id="buildings" class="sign">Open for business</h2>
		<div class="grid">
			<article id="town-hall" class="building building--town-hall">
				<div class="building-head">
					<Emblem building="town-hall" />
					<div>
						<h3>Town Hall</h3>
						<p class="kind">Volunteer management</p>
					</div>
				</div>
				<p class="pitch">
					Built for volunteer coordinators running big events with no paid staff. Plan events, fill
					role slots, train people up, and thank them for showing up.
				</p>
				<ul class="arrow-list">
					<li>Events with role slots, shift sign-up and kiosk check-in</li>
					<li>Training modules with lessons and quizzes before people sign up</li>
					<li>Impact points and levels that recognize the regulars</li>
					<li>A Claude connector that helps plan whole events</li>
					<li>In English, Spanish, French, Ukrainian, Chinese and Tagalog</li>
				</ul>
				<div>
					<a class="btn btn--lg visit" href="/town-hall">
						Visit Town Hall <span aria-hidden="true">→</span>
					</a>
				</div>
			</article>
			<article id="pavilion" class="building building--pavilion">
				<div class="building-head">
					<Emblem building="pavilion" />
					<div>
						<h3>Pavilion</h3>
						<p class="kind">Restaurant management</p>
					</div>
				</div>
				<p class="pitch">
					Everything a small kitchen needs to take orders, cook them and get them out the door,
					without paying a platform a cut of every sale.
				</p>
				<ul class="arrow-list">
					<li>A point-of-sale register for the counter</li>
					<li>Your own online store for pickup and delivery</li>
					<li>Lobby and kitchen display screens you lay out yourself</li>
					<li>A deliveries app for your own drivers</li>
				</ul>
				<div>
					<a class="btn btn--amber btn--lg" href="/pavilion">
						Visit Pavilion <span aria-hidden="true">→</span>
					</a>
				</div>
			</article>
		</div>
	</section>

	<section class="band">
		<h2 id="coming" class="sign">Under construction</h2>
		<div class="grid">
			{#each upcomingBuildings as building (building.id)}
				<div class="plot">
					<div class="plot-head">
						<h3>{building.name}</h3>
						<span class="status-tag">{building.status}</span>
					</div>
					<p>{building.blurb}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="band">
		<h2 id="self-host" class="sign">Run it yourself</h2>
		<div class="self-host">
			<h3>Free, open source, and yours to run</h3>
			<p>
				Every building is free to self-host. Managed hosting is on the way for organizations that
				would rather not run a server.
			</p>
			<InstallSnippet />
			<div class="actions">
				<a class="btn btn--amber" href={links.installGuide}>Read the install guide</a>
				<a class="btn" href={links.github}>View on GitHub</a>
			</div>
		</div>
	</section>

	<section class="band">
		<h2 id="faq" class="sign">Questions from the square</h2>
		<div class="grid">
			{#each faq as item (item.q)}
				<div class="card">
					<h3 class="question">{item.q}</h3>
					<p>{item.a}</p>
				</div>
			{/each}
		</div>
	</section>

	<footer>
		<div class="footer-inner">
			<div>
				<div class="footer-mark">Hamlet</div>
				<div class="tagline">Built for the love of the game.</div>
			</div>
			<nav aria-label="Footer">
				<a href="#town-hall">Town Hall</a>
				<a href="#pavilion">Pavilion</a>
				<a href="#self-host">Self-host</a>
				<a href={links.github}>GitHub</a>
			</nav>
		</div>
	</footer>
</div>

<style>
	.page {
		font-family: var(--font-body);
		color: var(--ink);
		min-height: 100vh;
	}

	h1,
	h2,
	h3 {
		margin: 0;
		font-family: var(--font-pixel);
	}
	p {
		margin: 0;
	}

	/* Header */
	.top {
		max-width: 760px;
		margin: 0 auto;
		padding: 16px 16px 4px;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 12px;
	}
	.top nav {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.wordmark {
		padding: 8px 14px 10px;
		background: var(--ink);
		color: var(--cream);
		border: 3px solid var(--cream);
		box-shadow: 4px 4px 0 var(--shadow);
		text-decoration: none;
		font-family: var(--font-pixel);
		font-size: 28px;
		font-weight: 700;
		line-height: 1;
	}

	/* Page sections */
	.band {
		max-width: 760px;
		margin: 0 auto;
		padding: 28px 16px 8px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.intro {
		padding-top: 16px;
		padding-bottom: 24px;
	}
	.sign {
		align-self: flex-start;
		padding: 8px 14px 10px;
		background: var(--ink);
		color: var(--cream);
		border: 3px solid var(--cream);
		box-shadow: 4px 4px 0 var(--shadow);
		font-size: 26px;
		font-weight: 700;
		line-height: 1.1;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 16px;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	/* Cream cards */
	.card {
		background: var(--cream);
		border: 3px solid var(--ink);
		box-shadow: 5px 5px 0 var(--shadow);
		padding: 16px 16px 18px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.card p {
		font-size: 15.5px;
		line-height: 1.6;
		color: var(--text-soft);
	}
	.card h3 {
		font-size: 20px;
		font-weight: 600;
		line-height: 1.2;
		color: var(--ink);
	}
	.card h3.question {
		font-size: 19px;
	}
	.card-head {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--moss);
	}
	.card--lg {
		padding: 20px 18px 22px;
		gap: 14px;
	}
	.card--lg .actions {
		padding-top: 4px;
	}
	.card .eyebrow {
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.08em;
		line-height: normal;
		text-transform: uppercase;
		color: var(--moss);
	}
	h1 {
		font-size: clamp(32px, 9vw, 46px);
		font-weight: 700;
		line-height: 1.05;
	}
	.card .lede {
		font-size: 17px;
	}

	/* Village hero */
	.hero {
		position: relative;
		display: block;
		width: 100%;
		height: 340px;
		overflow: hidden;
		background-color: var(--sea);
		background-image: url(/img/village/sea.png);
		background-size: 48px 48px;
		background-position: center;
		image-rendering: pixelated;
		border-top: 3px solid var(--ink);
		border-bottom: 3px solid var(--ink);
		box-sizing: border-box;
		text-decoration: none;
	}
	.scene {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 960px;
		height: 640px;
		margin: -312px 0 0 -480px;
		image-rendering: pixelated;
		pointer-events: none;
	}
	.hero .btn {
		pointer-events: none;
	}
	.hero-hit {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		padding: 0 0 16px;
		border: 0;
		background: none;
		cursor: pointer;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.hero-cta {
		position: absolute;
		left: 0;
		bottom: 16px;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.scrim {
		position: absolute;
		inset: 0;
		box-sizing: border-box;
		padding: 16px;
		background: rgba(22, 26, 40, 0.55);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.rotate {
		width: 100%;
		max-width: 340px;
		box-sizing: border-box;
		gap: 10px;
	}
	.rotate p {
		font-size: 15px;
		line-height: 1.5;
	}
	.rotate .actions {
		padding-top: 2px;
	}
	.rotate-title {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.rotate-title svg {
		flex: none;
	}
	.rotate-title h2 {
		font-size: 22px;
		font-weight: 600;
		line-height: 1.15;
	}
	.tilt {
		animation: tilt 1.8s step-end infinite;
	}
	@keyframes tilt {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-90deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	@media (min-width: 760px) {
		.hero {
			height: 560px;
			background-size: 96px 96px;
		}
		.scene {
			transform: scale(2);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.tilt {
			animation: none;
		}
	}

	/* Open buildings */
	.building {
		border: 3px solid var(--ink);
		box-shadow: 5px 5px 0 var(--shadow);
		padding: 20px 18px 22px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		--bullet: var(--amber);
	}
	.building--town-hall {
		background: var(--navy);
		color: #f6e9d2;
	}
	.building--pavilion {
		background: var(--pine);
		color: #fff;
	}
	.building-head {
		display: flex;
		align-items: center;
		gap: 14px;
	}
	.building h3 {
		font-size: 30px;
		font-weight: 700;
		line-height: 1.05;
	}
	.kind {
		margin-top: 2px;
		font-size: 15px;
		font-weight: 700;
	}
	.building--town-hall .kind {
		color: #c9bfa9;
	}
	.building--pavilion .kind {
		color: #a9bbb2;
	}
	.pitch {
		font-size: 16px;
		line-height: 1.6;
	}
	.visit {
		background: #f6e9d2;
		color: var(--navy);
	}

	/* Buildings that aren't open yet */
	.plot {
		background: var(--cream);
		border: 3px dashed var(--wood);
		padding: 16px 16px 18px;
	}
	.plot-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
	}
	.plot h3 {
		font-size: 20px;
		font-weight: 600;
		color: var(--ink);
	}
	.plot .status-tag {
		padding: 4px 8px;
	}
	.plot p {
		margin-top: 8px;
		font-size: 15.5px;
		line-height: 1.6;
		color: var(--text-soft);
	}

	/* Self-host */
	.self-host {
		background: var(--ink);
		color: var(--cream);
		border: 3px solid var(--cream);
		box-shadow: 5px 5px 0 var(--shadow);
		padding: 20px 18px 22px;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.self-host h3 {
		font-size: 24px;
		font-weight: 600;
		line-height: 1.15;
	}
	.self-host p {
		font-size: 16px;
		line-height: 1.6;
		color: var(--cream-dim);
	}

	/* Footer */
	footer {
		margin-top: 36px;
		background: var(--ink);
		color: var(--cream);
		border-top: 3px solid var(--cream);
	}
	.footer-inner {
		max-width: 760px;
		margin: 0 auto;
		padding: 22px 16px 26px;
		display: flex;
		flex-wrap: wrap;
		gap: 12px 24px;
		justify-content: space-between;
		align-items: center;
	}
	.footer-mark {
		font-family: var(--font-pixel);
		font-size: 22px;
		font-weight: 700;
	}
	.tagline {
		font-size: 14px;
		color: var(--cream-dim);
	}
	footer nav {
		display: flex;
		flex-wrap: wrap;
		gap: 6px 18px;
		font-size: 15px;
		font-weight: 700;
	}
	footer nav a {
		color: var(--cream);
		padding: 12px 0;
	}
</style>
