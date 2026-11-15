<!--
  The "Give feedback" flow: report a bug (filed as a GitHub issue) or find the
  feature board for a request. Each screen has its own address under /feedback.
-->
<script lang="ts">
	import { tick } from 'svelte';
	import {
		apps,
		checkReport,
		deviceOptions,
		emptyReport,
		feedbackPath,
		filledSteps,
		impactOptions,
		isVague,
		MAX_STEPS,
		oftenOptions,
		type AppId,
		type BugReport,
		type BugReportResult,
		type FeedbackView
	} from '#lib/feedback.ts';
	import Emblem from './Emblem.svelte';

	interface Props {
		/** Which screen to show. It follows the page address. */
		view?: FeedbackView;
		/**
		 * Moves to another screen. Without it the screens are ordinary links;
		 * the village map passes one so the map stays put behind the window.
		 */
		navigate?: (view: FeedbackView) => void;
		/** True when shown inside a village map window instead of as its own page. */
		embedded?: boolean;
		/** Called from the last screen when embedded, to close the window. */
		ondone?: () => void;
	}

	let { view = {}, navigate, embedded = false, ondone }: Props = $props();

	type ChoiceField = 'area' | 'often' | 'impact' | 'device';

	// Set once someone tries to send an incomplete report, to turn hints into prompts.
	let tried = $state(false);
	let report = $state<BugReport>(emptyReport());
	// A field people never see; only scripts fill it in.
	let website = $state('');
	let sending = $state(false);
	let failure = $state<{ message: string; fallbackUrl?: string } | null>(null);
	// Where the report went once it is sent. Null until then.
	let sent = $state<{ app: AppId; issueUrl: string | null } | null>(null);
	let doneHeading = $state<HTMLElement>();

	const step = $derived(
		sent
			? 'done'
			: view.kind === 'request'
				? 'request'
				: view.kind === 'report'
					? view.app
						? 'form'
						: 'app'
					: 'kind'
	);
	const appId = $derived(sent?.app ?? view.app ?? null);
	const app = $derived(apps[appId ?? 'th']);
	const example = $derived(app.example);

	const reportBuildings: AppId[] = ['th', 'pv', 'web'];
	// Feature requests go to each building's own board. The website has none.
	const boards = (['th', 'pv'] as const).map((id) => ({ id, url: apps[id].featureBoard }));

	const crumbs = $derived.by(() => {
		if (step === 'request') {
			return [
				{ label: 'Feature request', state: 'past' },
				{ label: '2. The feature board', state: 'current' }
			];
		}
		const order = ['kind', 'app', 'form', 'done'];
		const at = order.indexOf(step);
		const labels = [
			at > 0 ? 'Bug report' : '1. What kind',
			appId ? (appId === 'web' ? 'This website' : app.name) : '2. Which building',
			'3. The details'
		];
		return labels.map((label, i) => ({
			label,
			state: order[i] === step ? 'current' : i < at ? 'past' : 'ahead'
		}));
	});

	// Areas differ per building, so a pick made for another one no longer applies.
	$effect(() => {
		if (report.area && !app.areas.includes(report.area)) report.area = '';
	});

	// What the report still needs, and the running commentary under each field.
	const checks = $derived.by(() => {
		const ok = checkReport(report);
		return [
			{ label: 'A clear title', done: ok.title },
			{ label: 'Where it happened', done: ok.area },
			{ label: 'What you saw', done: ok.happened },
			{ label: 'Two steps to repeat it', done: ok.steps }
		];
	});
	const doneCount = $derived(checks.filter((c) => c.done).length);
	const ready = $derived(doneCount === checks.length);
	const missing = $derived(
		checks
			.filter((c) => !c.done)
			.map((c) => c.label.charAt(0).toLowerCase() + c.label.slice(1))
			.join(', ')
	);

	type Note = { text: string; good?: boolean };

	const titleNote = $derived.by((): Note => {
		if (!report.title.trim())
			return { text: tried ? 'Add a title so we know what this is about.' : '' };
		if (isVague(report.title))
			return { text: 'That is a start. What exactly went wrong, and where?' };
		if (!checks[0].done) return { text: 'A few more words: what were you doing when it happened?' };
		return { text: 'Clear title. Thank you.', good: true };
	});
	const happenedNote = $derived.by((): Note => {
		if (!report.happened.trim())
			return { text: tried ? 'Tell us what you saw on the screen.' : '' };
		if (!checks[2].done)
			return { text: 'Keep going: what did the screen show? Any error message?' };
		return { text: 'Good detail.', good: true };
	});
	const stepsNote = $derived.by((): Note => {
		if (checks[3].done) return { text: 'Thanks. We can follow that.', good: true };
		if (filledSteps(report) === 1 || tried)
			return { text: 'One more step, please: what did you do right before it broke?' };
		return { text: '' };
	});

	const summary = $derived(
		[
			['Where', report.area],
			['How often', report.often],
			['Using', [report.device, report.browser.trim()].filter(Boolean).join(', ')]
		].filter(([, value]) => value)
	);

	/** Makes a link to another screen stay inside the window when the map asks for that. */
	function to(target: FeedbackView) {
		return (event: MouseEvent) => {
			failure = null;
			if (!navigate || event.metaKey || event.ctrlKey || event.shiftKey) return;
			event.preventDefault();
			navigate(target);
		};
	}

	function toggle(field: ChoiceField, option: string) {
		report[field] = report[field] === option ? '' : option;
	}

	async function send(event?: Event) {
		event?.preventDefault();
		if (sending) return;
		if (!ready || !appId) {
			tried = true;
			return;
		}

		sending = true;
		failure = null;
		try {
			const response = await fetch('/api/bug-report', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ app: appId, website, ...report })
			});
			const result: BugReportResult = await response.json();
			if (result.ok) {
				sent = { app: appId, issueUrl: result.issueUrl };
				await tick();
				doneHeading?.focus();
			} else {
				failure = result;
			}
		} catch {
			failure = { message: 'We could not reach the server. Check your connection and try again.' };
		} finally {
			sending = false;
		}
	}

	function startOver(event: MouseEvent) {
		tried = false;
		report = emptyReport();
		sent = null;
		to({})(event);
	}
</script>

{#snippet chips(field: ChoiceField, options: string[], labelledby: string)}
	<div class="chips" role="group" aria-labelledby={labelledby}>
		{#each options as option (option)}
			<button
				type="button"
				aria-pressed={report[field] === option}
				onclick={() => toggle(field, option)}
			>
				{option}
			</button>
		{/each}
	</div>
{/snippet}

{#snippet note(n: Note)}
	<p class="note" class:good={n.good} role="status">{n.text}</p>
{/snippet}

<div class="feedback" class:embedded>
	<div class="column">
		{#if !embedded}
			<div><a class="btn btn--lg" href="/"><span aria-hidden="true">←</span> Hamlet</a></div>
		{/if}

		<div class="card">
			<header>
				<div class="plaque">Give feedback</div>
				<ol class="crumbs" aria-label="Steps">
					{#each crumbs as crumb (crumb.label)}
						<li class={crumb.state} aria-current={crumb.state === 'current' ? 'step' : undefined}>
							{crumb.label}
						</li>
					{/each}
				</ol>
			</header>

			{#if step === 'kind'}
				<section aria-labelledby="fb-h-kind">
					<h2 id="fb-h-kind" class="big">We appreciate your feedback</h2>
					<p class="lede">
						Hamlet is built in the open, and it gets better because people who use it tell us what
						went wrong and what is missing. A person reads every message. What would you like to do?
					</p>
					<div class="kinds">
						<a
							class="tile tile--tall"
							href={feedbackPath({ kind: 'report' })}
							onclick={to({ kind: 'report' })}
						>
							<svg
								viewBox="0 0 12 12"
								width="56"
								height="56"
								shape-rendering="crispEdges"
								aria-hidden="true"
							>
								<path
									fill="#2C2430"
									d="M2 0h1v1H2zM9 0h1v1H9zM3 1h1v1H3zM8 1h1v1H8zM4 2h4v1H4zM3 3h1v1H3zM8 3h1v1H8zM0 4h3v1H0zM5 4h2v1H5zM9 4h3v1H9zM1 6h2v1H1zM5 6h2v1H5zM9 6h2v1H9zM0 8h3v1H0zM5 8h2v1H5zM9 8h3v1H9zM3 9h1v1H3zM8 9h1v1H8zM4 10h4v1H4z"
								/>
								<path
									fill="#C0392B"
									d="M4 3h4v1H4zM3 4h2v1H3zM7 4h2v1H7zM3 5h6v1H3zM3 6h2v1H3zM7 6h2v1H7zM3 7h6v1H3zM3 8h2v1H3zM7 8h2v1H7zM4 9h4v1H4z"
								/>
							</svg>
							<span class="tile-name">Report a bug</span>
							<span class="tile-text">
								Something is broken, looks wrong, or does not do what it should.</span
							></a
						>
						<a
							class="tile tile--tall"
							href={feedbackPath({ kind: 'request' })}
							onclick={to({ kind: 'request' })}
						>
							<svg
								viewBox="0 0 12 12"
								width="56"
								height="56"
								shape-rendering="crispEdges"
								aria-hidden="true"
							>
								<path
									fill="#F4A93B"
									d="M4 0h4v1H4zM3 1h6v1H3zM2 2h2v1H2zM6 2h4v1H6zM2 3h2v1H2zM5 3h5v1H5zM2 4h8v1H2zM3 5h6v1H3zM4 6h4v1H4z"
								/>
								<path fill="#FFF1C2" d="M4 2h2v1H4zM4 3h1v1H4z" />
								<path fill="#6B5A4C" d="M4 7h4v2H4zM5 9h2v1H5z" />
							</svg>
							<span class="tile-name">Suggest a feature</span>
							<span class="tile-text">Something is missing, or could work better for you.</span></a
						>
					</div>
				</section>
			{:else if step === 'app'}
				<section aria-labelledby="fb-h-app" class="tight">
					<h2 id="fb-h-app">Where did you find the bug?</h2>
					<p class="sub">Pick the building it belongs to, so it reaches the right place.</p>
					<div class="buildings">
						{#each reportBuildings as id (id)}
							<a
								class="tile"
								href={feedbackPath({ kind: 'report', app: id })}
								onclick={to({ kind: 'report', app: id })}
							>
								{#if id === 'th'}
									<Emblem building="town-hall" size={44} />
									<span class="tile-label">
										<span class="tile-name">Town Hall</span>
										<span class="tile-text">Volunteer management</span>
									</span>
								{:else if id === 'pv'}
									<Emblem building="pavilion" size={44} />
									<span class="tile-label">
										<span class="tile-name">Pavilion</span>
										<span class="tile-text">Restaurant management</span>
									</span>
								{:else}
									<svg
										viewBox="0 0 12 12"
										width="44"
										height="44"
										shape-rendering="crispEdges"
										aria-hidden="true"
									>
										<path
											fill="#C0392B"
											d="M5 1h2v1H5zM4 2h4v1H4zM3 3h6v1H3zM2 4h8v1H2zM1 5h10v1H1z"
										/>
										<path fill="#FFF6DC" d="M2 6h8v5H2z" />
										<path fill="#F4A93B" d="M4 7h1v2H4z" />
										<path fill="#5E4630" d="M7 7h2v4H7z" />
										<path fill="#7DB454" d="M0 11h12v1H0z" />
									</svg>
									<span class="tile-label">
										<span class="tile-name">This website</span>
										<span class="tile-text">The village map and these pages</span>
									</span>
								{/if}</a
							>{/each}
					</div>
					<div><a class="btn btn--lg" href={feedbackPath()} onclick={to({})}>Back</a></div>
				</section>
			{:else if step === 'form'}
				<section aria-labelledby="fb-h-bug">
					<div class="heading">
						<h2 id="fb-h-bug">Tell us what went wrong in {app.name}</h2>
						<p class="sub wide">
							The more we can picture it, the faster we can fix it. Answer what you can. Only the
							four items in the checklist are needed to send.
						</p>
					</div>
					<div class="report">
						<form onsubmit={send} novalidate>
							<div class="q">
								<span class="num" aria-hidden="true">1</span>
								<div class="q-body">
									<div class="q-head"><label for="fb-title">Give it a short title</label></div>
									<p class="hint">One line that says what you did and what went wrong.</p>
									<input
										id="fb-title"
										type="text"
										autocomplete="off"
										maxlength="200"
										bind:value={report.title}
										placeholder={example.title}
									/>
									{@render note(titleNote)}
									<div class="examples">
										<div><strong class="yes">Helpful:</strong> {example.title}</div>
										<div>
											<strong class="no">Too vague:</strong> "Website broke" or "It doesn't work"
										</div>
									</div>
								</div>
							</div>

							<div class="q">
								<span class="num" aria-hidden="true">2</span>
								<div class="q-body">
									<div class="q-head">
										<span id="fb-l2" class="label">Where did it happen?</span>
									</div>
									<p class="hint">Pick the part you were using.</p>
									{@render chips('area', app.areas, 'fb-l2')}
								</div>
							</div>

							<div class="q">
								<span class="num" aria-hidden="true">3</span>
								<div class="q-body">
									<div class="q-head">
										<label for="fb-doing">What were you trying to do?</label>
										<span class="status-tag">Optional</span>
									</div>
									<p class="hint">
										Tell it like a story: what you wanted, and what you clicked or tapped.
									</p>
									<textarea
										id="fb-doing"
										rows="3"
										maxlength="3000"
										bind:value={report.doing}
										placeholder={example.doing}></textarea>
								</div>
							</div>

							<div class="q">
								<span class="num" aria-hidden="true">4</span>
								<div class="q-body">
									<div class="q-head"><label for="fb-happened">What happened?</label></div>
									<p class="hint">
										Describe what you saw. If there was an error message, copy it word for word.
									</p>
									<textarea
										id="fb-happened"
										rows="3"
										maxlength="3000"
										bind:value={report.happened}
										placeholder={example.happened}></textarea>
									{@render note(happenedNote)}
								</div>
							</div>

							<div class="q">
								<span class="num" aria-hidden="true">5</span>
								<div class="q-body">
									<div class="q-head">
										<label for="fb-expected">What did you expect instead?</label>
										<span class="status-tag">Optional</span>
									</div>
									<input
										id="fb-expected"
										type="text"
										autocomplete="off"
										maxlength="500"
										bind:value={report.expected}
										placeholder={example.expected}
									/>
								</div>
							</div>

							<div class="q">
								<span class="num" aria-hidden="true">6</span>
								<div class="q-body">
									<div class="q-head">
										<span id="fb-l6" class="label">How can we make it happen again?</span>
									</div>
									<p class="hint">
										List the steps, one per line, starting from where you opened the app. Two steps
										is enough to start.
									</p>
									<ol class="steps" aria-labelledby="fb-l6">
										{#each report.steps as _, i (i)}
											<li>
												<span aria-hidden="true">{i + 1}.</span>
												<input
													type="text"
													autocomplete="off"
													maxlength="300"
													aria-label="Step {i + 1}"
													bind:value={report.steps[i]}
													placeholder={example.steps[i]
														? `Example: ${example.steps[i]}`
														: 'And then…'}
												/>
											</li>
										{/each}
									</ol>
									<div>
										{#if report.steps.length < MAX_STEPS}
											<button
												type="button"
												class="btn add-step"
												onclick={() => report.steps.push('')}
											>
												+ Add a step
											</button>
										{/if}
									</div>
									{@render note(stepsNote)}
								</div>
							</div>

							<div class="q">
								<span class="num" aria-hidden="true">7</span>
								<div class="q-body">
									<div class="q-head">
										<span id="fb-l7" class="label">How often does it happen?</span>
										<span class="status-tag">Optional</span>
									</div>
									{@render chips('often', oftenOptions, 'fb-l7')}
								</div>
							</div>

							<div class="q">
								<span class="num" aria-hidden="true">8</span>
								<div class="q-body">
									<div class="q-head">
										<span id="fb-l8" class="label">How much does it get in your way?</span>
										<span class="status-tag">Optional</span>
									</div>
									{@render chips('impact', impactOptions, 'fb-l8')}
								</div>
							</div>

							<div class="q">
								<span class="num" aria-hidden="true">9</span>
								<div class="q-body">
									<div class="q-head">
										<span id="fb-l9" class="label">What were you using?</span>
										<span class="status-tag">Optional</span>
									</div>
									{@render chips('device', deviceOptions, 'fb-l9')}
									<input
										class="narrow"
										type="text"
										autocomplete="off"
										maxlength="100"
										aria-label="Browser, if you know it"
										bind:value={report.browser}
										placeholder="Browser, if you know it (Chrome, Safari…)"
									/>
								</div>
							</div>

							<div class="trap" aria-hidden="true">
								<label>
									Leave this empty
									<input type="text" tabindex="-1" autocomplete="off" bind:value={website} />
								</label>
							</div>

							<div class="send">
								<p class="public">
									Your report is posted as a public issue on GitHub, so leave out names, passwords
									and anything else private.
								</p>
								{#if failure}
									<p class="note" role="alert">
										{failure.message}
										{#if failure.fallbackUrl}
											You can also
											<a href={failure.fallbackUrl} target="_blank" rel="noopener">
												report it on GitHub yourself
											</a>.
										{/if}
									</p>
								{:else if ready}
									<p class="note good" role="status">Ready to send.</p>
								{:else if tried}
									<p class="note" role="status">Not yet. We still need: {missing}.</p>
								{:else}
									<p class="note muted" role="status">Still needed: {missing}.</p>
								{/if}
								<div class="actions">
									<button
										type="submit"
										class="btn btn--lg submit"
										class:ready
										aria-disabled={!ready || sending}
									>
										{sending ? 'Sending…' : 'Send bug report'}
									</button>
									<a
										class="btn btn--lg"
										href={feedbackPath({ kind: 'report' })}
										onclick={to({ kind: 'report' })}>Back</a
									>
								</div>
							</div>
						</form>

						<aside aria-label="What makes a good report">
							<h3>A report we can act on</h3>
							<div class="bar" aria-hidden="true">
								<div style:width="{Math.round((100 * doneCount) / checks.length)}%"></div>
							</div>
							<p class="bar-text" role="status">{doneCount} of {checks.length} done</p>
							<ul>
								{#each checks as check (check.label)}
									<li>
										<span class="box" class:done={check.done} aria-hidden="true">
											{#if check.done}
												<svg
													width="14"
													height="14"
													viewBox="0 0 14 14"
													fill="none"
													stroke="currentColor"
													stroke-width="3"
													stroke-linecap="square"
												>
													<path d="M2 7 L6 11 L12 3" />
												</svg>
											{/if}
										</span>
										<span>
											{check.label}<span class="sr-only">
												{check.done ? ' (done)' : ' (still needed)'}
											</span>
										</span>
									</li>
								{/each}
							</ul>
							<p class="foot">
								{ready
									? 'That is everything we need. The optional answers help us fix it sooner.'
									: 'These are the only things we need. Everything else is optional.'}
							</p>
						</aside>
					</div>
				</section>
			{:else if step === 'request'}
				<section aria-labelledby="fb-h-request">
					<h2 id="fb-h-request">Feature requests live on the feature boards</h2>
					<p class="lede">
						That is where we collect suggestions, so everyone can see them and nothing gets lost in
						an inbox. Which building is your idea for?
					</p>
					<div class="buildings">
						{#each boards as board (board.id)}
							<a class="tile" href={board.url} target="_blank" rel="noopener">
								<Emblem building={board.id === 'th' ? 'town-hall' : 'pavilion'} size={44} />
								<span class="tile-label">
									<span class="tile-name">{apps[board.id].name}</span>
									<span class="tile-text">
										Open the feature board<span class="sr-only">(opens in a new tab)</span>
									</span>
								</span>
								<svg
									class="out"
									width="18"
									height="18"
									viewBox="0 0 16 16"
									fill="none"
									stroke="currentColor"
									stroke-width="2.6"
									stroke-linecap="square"
									aria-hidden="true"
								>
									<path d="M6 3 H13 V10 M13 3 L4 12" />
								</svg>
							</a>
						{/each}
					</div>
					<ol class="how">
						<li>
							<span class="num" aria-hidden="true">1</span>
							<span
								><strong>Look first.</strong> Someone may have asked for the same thing already.</span
							>
						</li>
						<li>
							<span class="num" aria-hidden="true">2</span>
							<span
								><strong>Vote for it.</strong> If it is there, add your vote. Votes tell us what to build
								next.</span
							>
						</li>
						<li>
							<span class="num" aria-hidden="true">3</span>
							<span
								><strong>Or post it.</strong> If it is new, describe what you are trying to get done and
								why.</span
							>
						</li>
					</ol>
					<div><a class="btn btn--lg" href={feedbackPath()} onclick={to({})}>Back</a></div>
				</section>
			{:else}
				<section aria-labelledby="fb-h-done">
					<h2 id="fb-h-done" class="big thanks" tabindex="-1" bind:this={doneHeading}>
						Thank you. We have it.
					</h2>
					<p class="lede">
						Your report is in.
						{#if sent?.issueUrl}
							It is now an issue on GitHub, where we will post when we have a fix or a question.
						{/if}
					</p>
					<div class="receipt">
						<p class="eyebrow">Bug report · {app.name}</p>
						<p class="receipt-title">{report.title}</p>
						<ul>
							{#each summary as [label, value] (label)}
								<li><strong>{label}:</strong> {value}</li>
							{/each}
						</ul>
					</div>
					<div class="actions">
						{#if sent?.issueUrl}
							<a class="btn btn--lg" href={sent?.issueUrl} target="_blank" rel="noopener">
								Follow it on GitHub<span class="sr-only">(opens in a new tab)</span>
							</a>
						{/if}
						<a class="btn btn--lg" href={feedbackPath()} onclick={startOver}>Send another</a>
						{#if embedded}
							<button type="button" class="btn btn--amber btn--lg" onclick={ondone}>
								Back to the village
							</button>
						{:else}
							<a class="btn btn--amber btn--lg" href="/">Back to Hamlet</a>
						{/if}
					</div>
				</section>
			{/if}
		</div>
	</div>
</div>

<style>
	.feedback {
		font-family: var(--font-body);
		color: var(--ink);
		background: var(--sea);
		padding: 16px 12px 40px;
		min-height: 100vh;
		box-sizing: border-box;
	}
	.column {
		max-width: 860px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.card {
		background: var(--cream);
		border: 3px solid var(--ink);
		box-shadow: 6px 6px 0 rgba(20, 16, 24, 0.45);
		padding: 18px 16px 24px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	/* Inside a map window the window is the card. */
	.embedded {
		background: transparent;
		padding: 0;
		min-height: 0;
	}
	.embedded .card {
		border: none;
		box-shadow: none;
		padding: 20px 22px 26px;
	}
	/* Leaves room for the window's close button. */
	.embedded header {
		padding-right: 56px;
	}
	.embedded aside {
		top: 68px;
	}

	header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px 14px;
	}
	.plaque {
		padding: 6px 12px 8px;
		background: var(--wood);
		color: var(--cream);
		border: 3px solid var(--ink);
		font-family: var(--font-pixel);
		font-size: 22px;
		font-weight: 700;
		line-height: 1.1;
	}
	.crumbs {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.crumbs li {
		padding: 4px 10px 5px;
		border: 3px solid var(--ink);
		font-family: var(--font-pixel);
		font-size: 15px;
		font-weight: 600;
		background: var(--tan);
	}
	.crumbs .current {
		background: var(--amber);
	}
	.crumbs .past {
		background: #dde6d3;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	section.tight {
		gap: 14px;
	}
	h2,
	h3 {
		margin: 0;
		font-family: var(--font-pixel);
		line-height: 1.15;
	}
	h2 {
		font-size: 28px;
		font-weight: 700;
	}
	h2.big {
		font-size: 30px;
	}
	h2.thanks {
		color: var(--pine);
		outline: none;
	}
	p {
		margin: 0;
	}
	.lede {
		font-size: 16.5px;
		line-height: 1.6;
		color: var(--text-soft);
		max-width: 60ch;
	}
	.sub {
		font-size: 16px;
		line-height: 1.55;
		color: var(--text-soft);
	}
	.sub.wide {
		max-width: 62ch;
	}
	.heading {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
	}

	/* Big pick-one buttons */
	.kinds {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}
	.buildings {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
		gap: 14px;
	}
	.tile {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 14px 16px;
		background: #fffbea;
		color: var(--ink);
		border: 3px solid var(--ink);
		box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4);
		cursor: pointer;
		text-align: left;
		font-family: inherit;
	}
	.tile {
		text-decoration: none;
		box-sizing: border-box;
	}
	.tile svg {
		flex: none;
		display: block;
	}
	.tile .out {
		margin-left: auto;
	}
	.tile--tall {
		flex: 1 1 240px;
		min-width: 0;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		padding: 18px 18px 20px;
	}
	.tile-label {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.tile-name {
		font-family: var(--font-pixel);
		font-size: 22px;
		font-weight: 700;
		line-height: 1.1;
	}
	.tile-text {
		font-size: 14.5px;
		line-height: 1.4;
		color: var(--text-soft);
	}
	.tile--tall .tile-name {
		font-size: 24px;
	}
	.tile--tall .tile-text {
		font-size: 15px;
		line-height: 1.5;
	}

	/* Bug report */
	.report {
		display: flex;
		flex-wrap: wrap;
		gap: 20px 22px;
		align-items: flex-start;
	}
	form {
		flex: 999 1 380px;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 18px;
		margin: 0;
	}
	.q {
		display: grid;
		grid-template-columns: 34px minmax(0, 1fr);
		gap: 0 12px;
	}
	.num {
		width: 34px;
		height: 34px;
		box-sizing: border-box;
		background: var(--amber);
		color: var(--ink);
		border: 3px solid var(--ink);
		font-family: var(--font-pixel);
		font-size: 18px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.q-body {
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 7px;
		padding-bottom: 4px;
	}
	.q-head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 6px 10px;
		min-height: 34px;
	}
	.q-head label,
	.q-head .label {
		font-family: var(--font-pixel);
		font-size: 20px;
		font-weight: 600;
		line-height: 1.2;
	}
	.hint {
		font-size: 14.5px;
		line-height: 1.5;
		color: var(--text-soft);
	}
	input,
	textarea {
		display: block;
		width: 100%;
		box-sizing: border-box;
		padding: 10px 12px;
		border: 3px solid var(--ink);
		border-radius: 0;
		background: #fff;
		color: var(--ink);
		font-family: inherit;
		font-size: 15.5px;
		line-height: 1.45;
	}
	textarea {
		resize: vertical;
	}
	input.narrow {
		max-width: 360px;
	}
	.note {
		font-size: 14px;
		font-weight: 700;
		line-height: 1.45;
		color: #a3301f;
		min-height: 20px;
	}
	.note.good {
		color: #2f6b3f;
	}
	.note.muted {
		color: var(--text-muted);
	}
	.examples {
		display: grid;
		gap: 4px;
		font-size: 13.5px;
		line-height: 1.45;
		color: var(--text-soft);
		padding: 8px 10px;
		background: #f4ebd0;
		border-left: 6px solid var(--wood);
	}
	.yes {
		color: #2f6b3f;
	}
	.no {
		color: #a3301f;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.chips button {
		min-height: 40px;
		box-sizing: border-box;
		padding: 6px 12px;
		border: 3px solid var(--ink);
		cursor: pointer;
		font-family: inherit;
		font-size: 14.5px;
		font-weight: 700;
		background: #fffbea;
		color: var(--ink);
		box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.3);
	}
	.chips button[aria-pressed='true'] {
		background: var(--ink);
		color: var(--cream);
		box-shadow: none;
	}

	.steps {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 8px;
	}
	.steps li {
		display: grid;
		grid-template-columns: 26px minmax(0, 1fr);
		gap: 8px;
		align-items: center;
	}
	.steps li > span {
		font-family: var(--font-pixel);
		font-size: 18px;
		font-weight: 700;
		color: var(--text-muted);
		text-align: right;
	}
	.add-step {
		min-height: 40px;
		font-size: 15px;
		padding: 5px 12px;
	}

	.trap {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.send {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-top: 12px;
		border-top: 3px dotted #d2c49c;
	}
	.send .note {
		font-size: 14.5px;
		min-height: 0;
	}
	.public {
		font-size: 14px;
		line-height: 1.5;
		color: var(--text-soft);
	}
	.submit {
		background: #e4d7b4;
		color: var(--text-muted);
	}
	.submit.ready {
		background: var(--amber);
		color: #14261f;
	}

	aside {
		flex: 1 1 210px;
		max-width: 100%;
		box-sizing: border-box;
		align-self: flex-start;
		position: sticky;
		top: 12px;
		background: #fffbea;
		border: 3px solid var(--ink);
		box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4);
		padding: 14px 14px 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	aside h3 {
		font-size: 19px;
		font-weight: 600;
		line-height: 1.2;
	}
	.bar {
		height: 14px;
		background: #e4d7b4;
		border: 3px solid var(--ink);
	}
	.bar div {
		height: 100%;
		background: #2f7a4f;
	}
	.bar-text {
		font-size: 13.5px;
		font-weight: 700;
		color: var(--text-muted);
	}
	aside ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 8px;
	}
	aside li {
		display: grid;
		grid-template-columns: 22px minmax(0, 1fr);
		gap: 8px;
		align-items: start;
		font-size: 14.5px;
		line-height: 1.4;
	}
	.box {
		width: 22px;
		height: 22px;
		box-sizing: border-box;
		border: 3px solid var(--ink);
		background: #fff;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.box.done {
		background: #2f7a4f;
	}
	.foot {
		font-size: 13.5px;
		line-height: 1.45;
		color: var(--text-soft);
	}

	/* Feature board */
	.how {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 10px;
		max-width: 560px;
	}
	.how li {
		display: grid;
		grid-template-columns: 34px minmax(0, 1fr);
		gap: 0 12px;
		align-items: start;
		font-size: 15.5px;
		line-height: 1.5;
		color: var(--text-soft);
	}
	.how li > span:last-child {
		padding-top: 4px;
	}
	.how strong {
		color: var(--ink);
	}

	/* Sent */
	.receipt {
		background: #fff;
		border: 3px solid var(--ink);
		box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4);
		padding: 14px 16px 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		max-width: 560px;
	}
	.eyebrow {
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
	}
	.receipt-title {
		font-family: var(--font-pixel);
		font-size: 21px;
		font-weight: 600;
		line-height: 1.25;
		overflow-wrap: anywhere;
	}
	.receipt ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 4px;
		font-size: 14.5px;
		line-height: 1.45;
		color: var(--text-soft);
	}
	.receipt strong {
		color: var(--ink);
	}
</style>
