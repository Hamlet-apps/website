<!--
  Switchboard's page. Unlike the other buildings it isn't a brochure with a
  storefront photo: the top of the page is a working patch panel. Pick an
  event on the left, plug it into an action on the right, and the page reads
  the workflow back in plain words.
-->
<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		/** True when shown inside a village map window instead of as its own page. */
		embedded?: boolean;
	}

	let { embedded = false }: Props = $props();

	type Tile = 'th' | 'pv' | 'clock' | 'web';

	interface Caller {
		id: string;
		tile: Tile;
		from: string;
		label: string;
		/** Starts the sentence on the ticket. */
		when: string;
	}
	interface Line {
		id: string;
		tile: Tile;
		to: string;
		label: string;
		/** Ends the sentence on the ticket. */
		then: string;
	}

	const callers: Caller[] = [
		{
			id: 'level',
			tile: 'th',
			from: 'Town Hall',
			label: 'A volunteer reaches a new level',
			when: 'When a volunteer reaches a new level in Town Hall'
		},
		{
			id: 'signup',
			tile: 'th',
			from: 'Town Hall',
			label: 'A volunteer signs up for a shift',
			when: 'When a volunteer signs up for a shift in Town Hall'
		},
		{
			id: 'order',
			tile: 'pv',
			from: 'Pavilion',
			label: 'An order is placed',
			when: 'When an order is placed in Pavilion'
		},
		{
			id: 'clock',
			tile: 'pv',
			from: 'Pavilion',
			label: 'Someone clocks in',
			when: 'When someone clocks in at Pavilion'
		},
		{
			id: 'monday',
			tile: 'clock',
			from: 'Schedule',
			label: 'Every Monday at 8:00',
			when: 'Every Monday at 8:00'
		}
	];

	const lines: Line[] = [
		{
			id: 'card',
			tile: 'pv',
			to: 'Pavilion',
			label: 'Issue a staff card',
			then: 'Pavilion gives them a meal card'
		},
		{
			id: 'shift',
			tile: 'pv',
			to: 'Pavilion',
			label: 'Add a shift to the schedule',
			then: 'Pavilion puts the shift on its schedule so they can clock in'
		},
		{
			id: 'notify',
			tile: 'th',
			to: 'Town Hall',
			label: 'Send a notification',
			then: 'Town Hall sends a notification'
		},
		{
			id: 'invite',
			tile: 'th',
			to: 'Town Hall',
			label: 'Add a volunteer',
			then: 'Town Hall adds them as a volunteer and emails a welcome link'
		},
		{
			id: 'http',
			tile: 'web',
			to: 'Anywhere',
			label: 'Send an HTTP request',
			then: 'Switchboard posts to any address you like, such as your Telegram bot'
		}
	];

	const cordColours = ['#ff4f8b', '#ff9a3c', '#8fe0b7', '#8fd3ff', '#c7a6ff'];

	// caller id -> line id. The first cord is the workflow the whole idea started with.
	let cords = $state<Record<string, string>>({ level: 'card' });
	let picked = $state<string | null>(null);
	let latest = $state<string | null>('level');

	let board: HTMLElement;
	let callerJacks: Record<string, HTMLElement> = $state({});
	let lineJacks: Record<string, HTMLElement> = $state({});
	let paths = $state<{ id: string; d: string; colour: string; x: number; y: number }[]>([]);

	const colourOf = (callerId: string) =>
		cordColours[callers.findIndex((c) => c.id === callerId) % cordColours.length];

	const ticket = $derived(
		Object.entries(cords).map(([from, to]) => {
			const caller = callers.find((c) => c.id === from)!;
			const line = lines.find((l) => l.id === to)!;
			return { id: from, text: `${caller.when}, ${line.then}.`, colour: colourOf(from) };
		})
	);
	const busyLines = $derived(new Set(Object.values(cords)));

	function pickCaller(id: string) {
		if (cords[id]) {
			// Pull the plug.
			const { [id]: _pulled, ...rest } = cords;
			cords = rest;
			picked = id;
			return;
		}
		picked = picked === id ? null : id;
	}

	function pickLine(id: string) {
		if (!picked) return;
		cords = { ...cords, [picked]: id };
		latest = picked;
		picked = null;
	}

	function reset() {
		cords = {};
		picked = null;
		latest = null;
	}

	function draw() {
		if (!board) return;
		const frame = board.getBoundingClientRect();
		const centre = (el: HTMLElement) => {
			const r = el.getBoundingClientRect();
			return { x: r.left + r.width / 2 - frame.left, y: r.top + r.height / 2 - frame.top };
		};
		paths = Object.entries(cords).flatMap(([from, to]) => {
			const a = callerJacks[from];
			const b = lineJacks[to];
			if (!a || !b) return [];
			const p = centre(a);
			const q = centre(b);
			// A cord hangs: the further apart the jacks, the deeper the belly.
			const sag = 28 + Math.hypot(q.x - p.x, q.y - p.y) * 0.22;
			// Jacks stacked in one column (phones): let the cord belly out to the side instead.
			const stacked = Math.abs(q.x - p.x) < 40;
			const belly = Math.min(70, Math.abs(q.y - p.y) * 0.18);
			const d = stacked
				? `M${p.x} ${p.y} C${p.x - belly} ${p.y + 50}, ${q.x - belly} ${q.y - 50}, ${q.x} ${q.y}`
				: `M${p.x} ${p.y} C${p.x} ${p.y + sag}, ${q.x} ${q.y + sag}, ${q.x} ${q.y}`;
			return [{ id: from, d, colour: colourOf(from), x: q.x, y: q.y }];
		});
	}

	$effect(() => {
		// Redraw whenever a cord is plugged or pulled.
		void cords;
		draw();
	});

	onMount(() => {
		draw();
		const observer = new ResizeObserver(draw);
		observer.observe(board);
		// Web fonts move the jacks a little once they load.
		document.fonts?.ready.then(draw);
		return () => observer.disconnect();
	});

	const screens = [
		{
			src: 'builder',
			title: 'The builder',
			text: 'A workflow is a trigger and a short list of steps, top to bottom. Add a step anywhere with the plus.',
			alt: 'The Switchboard builder: a Town Hall trigger, a Pavilion look-up, a check and a Pavilion action stacked in a column.'
		},
		{
			src: 'editor',
			title: 'Fields, not code',
			text: 'Each step shows what the earlier ones gave. Drag a field into a setting, or make an amount depend on one.',
			alt: 'The step editor: input fields on the left, settings in the middle with a table that sets the card amount by level, output on the right.'
		},
		{
			src: 'runs',
			title: 'Every call is logged',
			text: 'See what started a run, what each step sent and got back, and where it stopped. Retry a failed run from the step that failed.',
			alt: 'The Runs page: a table of runs with their status, and one run opened to show each step.'
		},
		{
			src: 'buildings',
			title: 'No keys to copy',
			text: 'Type a building’s address, approve the connection over there, and its events and actions show up in the builder.',
			alt: 'The Buildings page with Pavilion and Town Hall connected.'
		}
	];
</script>

{#snippet tile(kind: Tile)}
	{#if kind === 'th'}
		<span class="tile tile--th" aria-hidden="true">TH</span>
	{:else if kind === 'pv'}
		<span class="tile tile--pv" aria-hidden="true">PV</span>
	{:else if kind === 'clock'}
		<span class="tile" aria-hidden="true">
			<svg
				viewBox="0 0 24 24"
				width="18"
				height="18"
				fill="none"
				stroke="currentColor"
				stroke-width="2.6"
				stroke-linecap="square"
				><rect x="4" y="4" width="16" height="16" /><path d="M12 8 V12 H15" /></svg
			>
		</span>
	{:else}
		<span class="tile" aria-hidden="true">
			<svg
				viewBox="0 0 24 24"
				width="18"
				height="18"
				fill="none"
				stroke="currentColor"
				stroke-width="2.6"
				stroke-linecap="square"
				><rect x="4" y="4" width="16" height="16" /><path d="M4 12 H20 M12 4 V20" /></svg
			>
		</span>
	{/if}
{/snippet}

<div class="sb">
	<header class="hero">
		<div class="sky" aria-hidden="true">
			<div class="sun"></div>
			<div class="poles">
				{#each [8, 31, 54, 77] as left (left)}
					<span style:left="{left}%"></span>
				{/each}
			</div>
		</div>
		{#if !embedded}
			<a class="back" href="/"><span aria-hidden="true">←</span> Hamlet</a>
		{/if}
		<div class="hero-inner">
			<div class="name">
				<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
					<rect width="64" height="64" rx="17" fill="#ff4f8b" />
					<g fill="none" stroke="#1b1030" stroke-width="5.5" stroke-linecap="round">
						<circle cx="19" cy="19" r="6.5" />
						<circle cx="45" cy="45" r="6.5" />
						<path d="M24.500 23.500C35 26.500 29 41.500 39.500 44" />
					</g>
				</svg>
				<div>
					<h1>Switchboard</h1>
					<p class="kicker">A Hamlet building · early build</p>
				</div>
			</div>
			<p class="tagline">
				When something happens in one building, put the call through to the others.
			</p>
			<p class="lede">
				Switchboard is a small workflow builder that already knows every Hamlet app. A volunteer
				levels up in Town Hall, and Pavilion hands them a bigger meal card. You wire it up by
				picking from lists. Nobody writes code, and nobody copies keys around.
			</p>
			<ul class="chips">
				<li>Free and open source</li>
				<li>Self-hosted</li>
				<li>No code</li>
				<li>Works with Town Hall and Pavilion</li>
			</ul>
			<div class="actions">
				<a class="btn btn--pink" href="https://github.com/Hamlet-apps/Switchboard">View on GitHub</a
				>
				<a class="btn" href="#sb-start">Quick start</a>
			</div>
		</div>
	</header>

	<section class="panel-band" aria-labelledby="sb-try">
		<div class="wrap">
			<div class="band-head">
				<h2 id="sb-try">Try the board</h2>
				<p>Pick what happens, then plug it into what should follow.</p>
			</div>

			<div class="cabinet">
				<div class="board" bind:this={board}>
					<div class="col">
						<h3>When this happens</h3>
						{#each callers as caller (caller.id)}
							<button
								type="button"
								class="jack-row"
								class:picked={picked === caller.id}
								class:plugged={!!cords[caller.id]}
								aria-pressed={picked === caller.id}
								onclick={() => pickCaller(caller.id)}
							>
								{@render tile(caller.tile)}
								<span class="jack-text">
									<span class="jack-from">{caller.from}</span>
									<span class="jack-label">{caller.label}</span>
								</span>
								<span class="lamp" style:--lamp={colourOf(caller.id)} aria-hidden="true"></span>
								<span class="jack" bind:this={callerJacks[caller.id]} aria-hidden="true"></span>
								<span class="sr">
									{cords[caller.id] ? ', plugged in. Press to pull the cord.' : ''}
								</span>
							</button>
						{/each}
					</div>

					<div class="col col--lines">
						<h3>Do this</h3>
						{#each lines as line (line.id)}
							<button
								type="button"
								class="jack-row jack-row--line"
								class:ready={!!picked}
								class:plugged={busyLines.has(line.id)}
								disabled={!picked}
								onclick={() => pickLine(line.id)}
							>
								<span class="jack" bind:this={lineJacks[line.id]} aria-hidden="true"></span>
								{@render tile(line.tile)}
								<span class="jack-text">
									<span class="jack-from">{line.to}</span>
									<span class="jack-label">{line.label}</span>
								</span>
							</button>
						{/each}
					</div>

					<svg class="cords" aria-hidden="true">
						{#each paths as cord (cord.id)}
							<path d={cord.d} class="cord-shadow" />
							<path d={cord.d} class="cord" class:fresh={cord.id === latest} stroke={cord.colour} />
							<circle cx={cord.x} cy={cord.y} r="7" fill={cord.colour} />
						{/each}
					</svg>
				</div>

				<div class="ticket" aria-live="polite">
					<div class="ticket-head">
						<span>Your workflows</span>
						<button type="button" class="pull" onclick={reset} disabled={!ticket.length}>
							Pull all cords
						</button>
					</div>
					{#if ticket.length}
						<ul>
							{#each ticket as row (row.id)}
								<li><span class="dot" style:background={row.colour}></span>{row.text}</li>
							{/each}
						</ul>
					{:else if picked}
						<p>Now pick what should happen next.</p>
					{:else}
						<p>The board is clear. Pick something that happens to start.</p>
					{/if}
				</div>
			</div>
			<p class="note">
				This is a toy. The real builder also looks things up, checks conditions, and passes fields
				from one step to the next.
			</p>
		</div>
	</section>

	<section class="how" aria-labelledby="sb-how">
		<div class="wrap">
			<h2 id="sb-how">How a call goes through</h2>
			<ol class="steps">
				<li>
					<span class="num" aria-hidden="true">1</span>
					<h3>Buildings say what they can do</h3>
					<p>
						Each building publishes the events it sends and the actions it offers. Connect one and
						they appear in the builder as steps you pick from a list.
					</p>
				</li>
				<li>
					<span class="num" aria-hidden="true">2</span>
					<h3>You wire a trigger to steps</h3>
					<p>
						Start from an event, a schedule or a private web address. Add look-ups, a check, an
						action in another building, or a request to anything else.
					</p>
				</li>
				<li>
					<span class="num" aria-hidden="true">3</span>
					<h3>Switchboard does the rest</h3>
					<p>
						It tries again when a building is slow to answer, never does the same thing twice, and
						keeps a plain log of every run.
					</p>
				</li>
			</ol>
		</div>
	</section>

	<section class="screens" aria-labelledby="sb-screens">
		<div class="wrap">
			<h2 id="sb-screens">Inside the exchange</h2>
			<p class="sub">These screenshots show Switchboard with made-up demo data.</p>
			<div class="screen-grid">
				{#each screens as screen (screen.src)}
					<figure>
						<div class="monitor">
							<img
								src="/img/switchboard/{screen.src}.webp"
								alt={screen.alt}
								width="1440"
								height="900"
								loading="lazy"
							/>
						</div>
						<figcaption>
							<h3>{screen.title}</h3>
							<p>{screen.text}</p>
						</figcaption>
					</figure>
				{/each}
			</div>
		</div>
	</section>

	<section class="recipes" aria-labelledby="sb-recipes">
		<div class="wrap">
			<h2 id="sb-recipes">Recipes you can switch on</h2>
			<p class="sub">
				Ready-made workflows. Under the hood each is an ordinary workflow you can open and change.
			</p>
			<div class="recipe-grid">
				<article>
					<div class="pair">
						{@render tile('th')}<span aria-hidden="true">→</span>{@render tile('pv')}
					</div>
					<h3>Staff card by volunteer level</h3>
					<p>
						A volunteer restaurant gives meal cards that grow with Town Hall level: $5 at first, $10
						at level 3, $15 from level 4. You set the amounts.
					</p>
				</article>
				<article>
					<div class="pair">
						{@render tile('th')}<span aria-hidden="true">→</span>{@render tile('pv')}
					</div>
					<h3>Sync shifts to the time clock</h3>
					<p>
						When someone signs up for a shift in Town Hall, it lands on Pavilion’s schedule, so they
						can clock in when they arrive.
					</p>
				</article>
				<article class="yours">
					<div class="pair"><span class="tile" aria-hidden="true">+</span></div>
					<h3>Or your own</h3>
					<p>
						Every organization wires things differently. Build the combinations you need instead of
						waiting for someone to add a setting.
					</p>
				</article>
			</div>
		</div>
	</section>

	<section class="start" aria-labelledby="sb-start">
		<div class="wrap start-grid">
			<div>
				<h2 id="sb-start">Quick start</h2>
				<p>
					Switchboard is a Django app with no build step. Run it next to your buildings, open it,
					and the first visit sets up your organization and your login.
				</p>
				<div class="terminal">
					<div class="comment"># Python 3.12 or newer</div>
					<div>
						<span class="prompt">$</span> git clone https://github.com/Hamlet-apps/Switchboard
					</div>
					<div><span class="prompt">$</span> cd Switchboard</div>
					<div><span class="prompt">$</span> python -m venv .venv</div>
					<div><span class="prompt">$</span> .venv/bin/pip install -r requirements.txt</div>
					<div><span class="prompt">$</span> .venv/bin/python manage.py migrate</div>
					<div><span class="prompt">$</span> .venv/bin/python manage.py runserver</div>
					<div class="comment gap"># then open http://127.0.0.1:8000/ and connect a building</div>
				</div>
			</div>
			<div class="early">
				<h3>It’s an early build</h3>
				<p>What works today:</p>
				<ul>
					<li>Triggers from Town Hall and Pavilion, schedules and web addresses</li>
					<li>Look-ups, actions, checks and HTTP requests</li>
					<li>Run history with retry from the failed step</li>
					<li>Two recipes</li>
				</ul>
				<p>Not built yet:</p>
				<ul class="later">
					<li>Workflows that branch more than one way</li>
					<li>Steps that repeat over a list</li>
					<li>One village sign-in. For now people are matched between buildings by email.</li>
				</ul>
			</div>
		</div>
	</section>

	<footer>
		<p>Made for the person who used to copy things from one screen into another.</p>
	</footer>
</div>

<style>
	.sb {
		--night: #1b1030;
		--night-2: #2a1a47;
		--night-3: #241540;
		--line: #3a2760;
		--pink: #ff4f8b;
		--rose: #d4145a;
		--lilac: #cfc2e4;
		--lilac-2: #b9abd1;
		--paper: #f3eff8;
		--ink: #2c2430;
		font-family: var(--font-body);
		color: #f4eefc;
		background: var(--night);
	}
	.sb :is(h1, h2, h3, p, ul, ol, figure) {
		margin: 0;
	}
	.sb :is(ul, ol) {
		padding: 0;
		list-style: none;
	}
	.wrap {
		max-width: 1160px;
		margin: 0 auto;
	}
	h2 {
		font-family: var(--font-pixel);
		font-size: 30px;
		font-weight: 700;
		line-height: 1.1;
	}
	.sub {
		margin-top: 8px;
		font-size: 15px;
		line-height: 1.55;
	}
	.sr {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
	}

	/* Hero: the sun going down behind the telegraph poles */
	.hero {
		position: relative;
		overflow: hidden;
		padding: 34px 16px 44px;
		border-bottom: 3px solid var(--pink);
	}
	.sky {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}
	.sun {
		position: absolute;
		right: max(4%, calc(50% - 560px));
		bottom: -70px;
		width: 340px;
		height: 340px;
		border-radius: 50%;
		background: linear-gradient(180deg, #ff9a3c 0%, #ff4f8b 55%, #b8306f 100%);
		/* Bars across the lower half, like the dial window on the building. */
		-webkit-mask-image: linear-gradient(
			180deg,
			#000 0 48%,
			transparent 48% 52%,
			#000 52% 60%,
			transparent 60% 65%,
			#000 65% 72%,
			transparent 72% 78%,
			#000 78% 84%,
			transparent 84% 91%,
			#000 91%
		);
		mask-image: linear-gradient(
			180deg,
			#000 0 48%,
			transparent 48% 52%,
			#000 52% 60%,
			transparent 60% 65%,
			#000 65% 72%,
			transparent 72% 78%,
			#000 78% 84%,
			transparent 84% 91%,
			#000 91%
		);
		opacity: 0.9;
	}
	.poles {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 150px;
		/* Three wires sagging between the poles. */
		background:
			radial-gradient(
					120% 60px at 50% -34px,
					transparent 59px,
					var(--night-2) 59px 61px,
					transparent 62px
				)
				0 22px / 23% 60px repeat-x,
			radial-gradient(
					120% 60px at 50% -34px,
					transparent 59px,
					var(--night-2) 59px 61px,
					transparent 62px
				)
				0 36px / 23% 60px repeat-x;
		opacity: 0.9;
	}
	.poles span {
		position: absolute;
		bottom: 0;
		width: 6px;
		height: 150px;
		background: var(--night-2);
	}
	.poles span::before,
	.poles span::after {
		content: '';
		position: absolute;
		left: -24px;
		width: 54px;
		height: 5px;
		background: var(--night-2);
		top: 20px;
	}
	.poles span::after {
		left: -18px;
		width: 42px;
		top: 34px;
	}
	.back,
	.btn {
		min-height: 44px;
		box-sizing: border-box;
		padding: 8px 14px;
		background: #fff6dc;
		color: var(--ink);
		border: 3px solid var(--ink);
		box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.45);
		font-family: var(--font-pixel);
		font-size: 17px;
		font-weight: 600;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}
	.back {
		position: relative;
		z-index: 2;
		margin-bottom: 22px;
	}
	.btn--pink {
		background: var(--pink);
		color: var(--night);
	}
	.btn:hover,
	.back:hover {
		color: var(--ink);
		transform: translate(-1px, -1px);
		box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.45);
	}
	.hero-inner {
		position: relative;
		z-index: 1;
		max-width: 1160px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.name {
		display: flex;
		align-items: center;
		gap: 14px;
	}
	h1 {
		font-family: var(--font-pixel);
		font-size: 44px;
		font-weight: 700;
		line-height: 1;
	}
	.kicker {
		margin-top: 4px;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--lilac-2);
	}
	.tagline {
		font-family: var(--font-pixel);
		font-size: 26px;
		font-weight: 600;
		line-height: 1.25;
		color: #ffb3cd;
		max-width: 26ch;
	}
	.lede {
		font-size: 16.5px;
		line-height: 1.6;
		color: var(--lilac);
		max-width: 58ch;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.chips li {
		padding: 5px 10px;
		background: var(--night-2);
		border: 3px solid var(--line);
		font-family: var(--font-pixel);
		font-size: 15px;
		font-weight: 500;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		padding-top: 4px;
	}

	/* The patch panel */
	.panel-band {
		padding: 34px 16px 40px;
		background:
			radial-gradient(var(--line) 1.5px, transparent 1.5px) 0 0 / 22px 22px,
			var(--night-3);
	}
	.band-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 6px 18px;
		margin-bottom: 18px;
	}
	.band-head p {
		font-size: 16px;
		color: var(--lilac);
	}
	.cabinet {
		background: #3a2a22;
		background-image: repeating-linear-gradient(90deg, #4a3628 0 46px, #3f2d21 46px 49px);
		border: 3px solid #120a1c;
		box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.5);
		padding: 14px;
	}
	.board {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 18px clamp(60px, 16vw, 220px);
		background: var(--night);
		border: 3px solid #120a1c;
		padding: 18px 16px 26px;
	}
	.col {
		display: flex;
		flex-direction: column;
		gap: 8px;
		min-width: 0;
	}
	.col h3 {
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--lilac-2);
		margin-bottom: 4px;
	}
	.col--lines h3 {
		text-align: right;
	}
	.jack-row {
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 10px;
		min-height: 56px;
		padding: 8px 10px;
		background: var(--night-2);
		border: 3px solid var(--line);
		color: #f4eefc;
		font: inherit;
		text-align: left;
		cursor: pointer;
	}
	.jack-row:hover:not(:disabled) {
		border-color: var(--lilac-2);
	}
	.jack-row:focus-visible {
		outline: 3px solid var(--pink);
		outline-offset: 2px;
	}
	.jack-row.picked {
		border-color: var(--pink);
		box-shadow: 0 0 0 3px rgba(255, 79, 139, 0.3);
	}
	.jack-row--line {
		flex-direction: row;
	}
	.jack-row--line:disabled {
		cursor: default;
		opacity: 0.72;
	}
	.jack-row--line.ready {
		border-style: dashed;
		border-color: var(--pink);
		opacity: 1;
	}
	.jack-row--line.plugged {
		opacity: 1;
	}
	.jack-text {
		display: flex;
		flex-direction: column;
		gap: 1px;
		min-width: 0;
		flex: 1;
	}
	.jack-from {
		font-size: 11.5px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--lilac-2);
	}
	.jack-label {
		font-family: var(--font-pixel);
		font-size: 17px;
		font-weight: 500;
		line-height: 1.2;
	}
	.tile {
		flex: none;
		width: 34px;
		height: 34px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f1ecf6;
		color: var(--night);
		border: 3px solid #120a1c;
		font-size: 12px;
		font-weight: 800;
	}
	.tile--th {
		background: #2b3a67;
		color: #fff6dc;
	}
	.tile--pv {
		background: #1f4a3a;
		color: #f4a93b;
	}
	.jack {
		flex: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #0c0614;
		border: 3px solid #8d80a6;
		box-shadow: inset 0 0 0 2px #120a1c;
	}
	.lamp {
		flex: none;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #3a2760;
		border: 2px solid #120a1c;
	}
	.plugged .lamp {
		background: var(--lamp);
		box-shadow: 0 0 10px var(--lamp);
	}
	.picked .lamp {
		background: var(--lamp);
		animation: blink 0.7s steps(2) infinite;
	}
	.cords {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		pointer-events: none;
		overflow: visible;
	}
	.cord,
	.cord-shadow {
		fill: none;
		stroke-linecap: round;
	}
	.cord {
		stroke-width: 6;
	}
	.cord-shadow {
		stroke: rgba(0, 0, 0, 0.45);
		stroke-width: 10;
		transform: translateY(3px);
	}
	.cord.fresh {
		stroke-dasharray: 1400;
		animation: plug 0.5s ease-out;
	}
	@keyframes plug {
		from {
			stroke-dashoffset: 1400;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes blink {
		50% {
			opacity: 0.25;
		}
	}
	.ticket {
		margin-top: 14px;
		background: #fff6dc;
		color: var(--ink);
		border: 3px solid #120a1c;
		padding: 12px 14px 14px;
	}
	.ticket-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #5a4e5c;
		margin-bottom: 8px;
	}
	.pull {
		min-height: 36px;
		padding: 4px 10px;
		background: transparent;
		border: 3px solid var(--ink);
		font-family: var(--font-pixel);
		font-size: 15px;
		font-weight: 600;
		color: var(--ink);
		cursor: pointer;
	}
	.pull:disabled {
		opacity: 0.4;
		cursor: default;
	}
	.ticket ul {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.ticket li,
	.ticket p {
		font-family: var(--font-pixel);
		font-size: 19px;
		font-weight: 500;
		line-height: 1.35;
		display: flex;
		gap: 10px;
		align-items: baseline;
	}
	.dot {
		flex: none;
		width: 12px;
		height: 12px;
		border: 2px solid var(--ink);
		position: relative;
		top: 1px;
	}
	.note {
		margin-top: 14px;
		font-size: 14px;
		line-height: 1.5;
		color: var(--lilac-2);
	}

	/* How it works */
	.how {
		padding: 38px 16px;
		background: var(--night);
	}
	.steps {
		margin-top: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 18px;
		counter-reset: step;
	}
	.steps li {
		position: relative;
		background: var(--night-2);
		border: 3px solid var(--line);
		padding: 18px 16px 18px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.num {
		width: 38px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--pink);
		color: var(--night);
		border: 3px solid #120a1c;
		font-family: var(--font-pixel);
		font-size: 22px;
		font-weight: 700;
	}
	.steps h3,
	.recipe-grid h3,
	figcaption h3,
	.early h3 {
		font-family: var(--font-pixel);
		font-size: 21px;
		font-weight: 600;
		line-height: 1.2;
	}
	.steps p {
		font-size: 15.5px;
		line-height: 1.55;
		color: var(--lilac);
	}

	/* Screens: on light paper so the app's own light screens sit naturally */
	.screens {
		padding: 38px 16px 42px;
		background: var(--paper);
		color: var(--ink);
		border-top: 3px solid var(--ink);
		border-bottom: 3px solid var(--ink);
	}
	.screens .sub {
		color: #5a4e5c;
	}
	.screen-grid {
		margin-top: 22px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
		gap: 26px 22px;
	}
	figure {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.monitor {
		background: var(--night);
		border: 3px solid var(--ink);
		box-shadow: 5px 5px 0 rgba(44, 36, 48, 0.4);
		padding: 8px;
	}
	.monitor img {
		display: block;
		width: 100%;
		height: auto;
	}
	figcaption p {
		margin-top: 4px;
		font-size: 15.5px;
		line-height: 1.55;
		color: #3b323d;
		max-width: 56ch;
	}

	/* Recipes */
	.recipes {
		padding: 38px 16px;
		background: var(--night-3);
	}
	.recipes .sub {
		color: var(--lilac);
	}
	.recipe-grid {
		margin-top: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 18px;
	}
	.recipe-grid article {
		background: #fff6dc;
		color: var(--ink);
		border: 3px solid #120a1c;
		box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.45);
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.recipe-grid .yours {
		background: transparent;
		color: #f4eefc;
		border-style: dashed;
		border-color: var(--lilac-2);
		box-shadow: none;
	}
	.recipe-grid p {
		font-size: 15.5px;
		line-height: 1.55;
	}
	.pair {
		display: flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-pixel);
		font-size: 22px;
		font-weight: 700;
	}

	/* Quick start */
	.start {
		padding: 38px 16px 42px;
		background: var(--night);
	}
	.start-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
		gap: 26px;
		align-items: start;
	}
	.start p {
		margin-top: 10px;
		font-size: 15.5px;
		line-height: 1.6;
		color: var(--lilac);
	}
	.terminal {
		margin-top: 16px;
		background: #0c0614;
		border: 3px solid var(--line);
		padding: 16px 18px;
		font-family: var(--font-mono);
		font-size: 14px;
		line-height: 1.8;
		color: #fff6dc;
		overflow-x: auto;
		white-space: nowrap;
	}
	.comment {
		color: var(--lilac-2);
	}
	.gap {
		margin-top: 8px;
	}
	.prompt {
		color: var(--pink);
	}
	.early {
		background: var(--night-2);
		border: 3px solid var(--line);
		padding: 18px 16px;
	}
	.early ul {
		margin-top: 8px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.early li {
		position: relative;
		padding-left: 22px;
		font-size: 15.5px;
		line-height: 1.5;
	}
	.early li::before {
		content: '';
		position: absolute;
		left: 2px;
		top: 7px;
		width: 9px;
		height: 9px;
		background: #8fe0b7;
		border: 2px solid #120a1c;
	}
	.early .later li::before {
		background: transparent;
		border-color: var(--lilac-2);
	}
	.early .later li {
		color: var(--lilac);
	}

	footer {
		padding: 26px 16px 34px;
		background: var(--night-3);
		border-top: 3px solid var(--pink);
		text-align: center;
	}
	footer p {
		max-width: 560px;
		margin: 0 auto;
		font-family: var(--font-pixel);
		font-size: 19px;
		font-weight: 500;
		line-height: 1.4;
		color: #ffb3cd;
	}

	@media (max-width: 700px) {
		h1 {
			font-size: 36px;
		}
		.tagline {
			font-size: 22px;
		}
		.sun {
			width: 220px;
			height: 220px;
			right: -60px;
			opacity: 0.45;
		}
		/* Callers above, lines below; cords hang down between them. */
		.board {
			grid-template-columns: 1fr;
			gap: 46px;
		}
		.col--lines h3 {
			text-align: left;
		}
		/* Jacks down the right edge, so cords hang clear of the words. */
		.jack-row--line .jack {
			order: 3;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.cord.fresh,
		.picked .lamp {
			animation: none;
		}
	}
</style>
