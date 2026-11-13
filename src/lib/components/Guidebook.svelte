<!-- The "What is Hamlet?" window on the village map: four tabs of explanation. -->
<script lang="ts">
	import { faq, guidebookFaq, links } from '#lib/content.ts';
	import Icon, { type IconName } from './Icon.svelte';
	import InstallSnippet from './InstallSnippet.svelte';
	import Window from './Window.svelte';

	interface Props {
		onclose: () => void;
	}

	let { onclose }: Props = $props();

	const tabs = [
		{ id: 'idea', label: 'The idea' },
		{ id: 'how', label: 'How it works' },
		{ id: 'host', label: 'Self-host' },
		{ id: 'faq', label: 'FAQ' }
	] as const;

	let tab = $state<(typeof tabs)[number]['id']>('idea');

	interface Card {
		icon: IconName;
		title: string;
		text: string;
		planned?: boolean;
	}

	const ideaCards: Card[] = [
		{
			icon: 'server',
			title: 'Yours to run',
			text: 'Every building ships as a Docker image. Your data stays on your hardware.'
		},
		{
			icon: 'ledger',
			title: 'Free to use',
			text: "The code is open source and there are no per-seat fees. Paid managed hosting is planned for groups that don't want to run a server."
		},
		{
			icon: 'house',
			title: 'Built for real groups',
			text: 'Each building is built with a real organization first, then shared with everyone else.'
		}
	];

	const howCards: Card[] = [
		{
			icon: 'house',
			title: 'Every app is a building',
			text: 'Each one stands on its own. A restaurant can run Pavilion without ever touching Town Hall. Take the buildings you need and skip the rest.'
		},
		{
			icon: 'server',
			title: 'Your server, your data',
			text: 'Buildings ship as Docker images. Run them on a homelab, a mini PC in the back office, or any server you trust. Your records stay with you.'
		},
		{
			icon: 'network',
			title: 'Buildings talk to each other',
			text: 'Put more than one up and they connect. Town Hall events turn into Bell Tower task lists, so the plan for a big event sits next to the people doing it.'
		},
		{
			icon: 'key',
			title: 'One gate, one key',
			text: "Gatehouse will give everyone a single sign-in for the whole village, so volunteers and staff don't juggle passwords.",
			planned: true
		},
		{
			icon: 'ledger',
			title: 'Free and open',
			text: 'The code is public. Read it, change it, host it yourself. Self-hosting costs nothing.'
		},
		{
			icon: 'hammer',
			title: 'Always under construction',
			text: 'New buildings go up as real organizations need them. Bell Tower is in progress. Bank and Gatehouse are staked out.'
		}
	];

	const fundraiser = [
		{
			who: 'Town Hall',
			text: 'The coordinator posts the event and volunteers sign up for shifts.'
		},
		{
			who: 'Bell Tower',
			status: 'In progress',
			text: 'The prep checklist and day-of tasks reach the right roles.'
		},
		{
			who: 'Pavilion',
			text: "The kitchen takes orders at the counter and online, and screens show what's ready."
		},
		{ who: 'Bank', status: 'Planned', text: 'Regulars collect loyalty points for their orders.' }
	];

	const hostSteps = [
		{ title: 'Pick a building', text: 'Start with the one your organization needs most.' },
		{ title: 'Start it with Docker Compose', text: 'Each building comes with a compose file.' },
		{ title: 'Open the setup page', text: 'Follow the first-run steps in your browser.' },
		{
			title: "Add more when you're ready",
			text: 'New buildings connect to the ones already running.'
		}
	];
</script>

{#snippet card(c: Card)}
	<div class="card">
		<div class="card-head">
			<Icon name={c.icon} size={26} />
			<h4>{c.title}</h4>
			{#if c.planned}<span class="status-tag">Planned</span>{/if}
		</div>
		<p>{c.text}</p>
	</div>
{/snippet}

<Window label="Hamlet guidebook" title="Hamlet guidebook" icon="book" size="guide" {onclose}>
	{#snippet toolbar()}
		<div class="tabs" role="tablist" aria-label="Guidebook sections">
			{#each tabs as t (t.id)}
				<button type="button" role="tab" aria-selected={tab === t.id} onclick={() => (tab = t.id)}>
					{t.label}
				</button>
			{/each}
		</div>
	{/snippet}

	<div class="panel" role="tabpanel">
		{#if tab === 'idea'}
			<h3 class="big">A village of tools for small organizations</h3>
			<p class="lede">
				Hamlet is a set of free, open-source apps for the groups that keep a community running:
				churches, community groups, non-profits and independent restaurants.
			</p>
			<p class="prose">
				Each app is a building in the village. A building does one job well, stands on its own, and
				runs on a server you control. Move in to the ones you need and add more as you grow.
			</p>
			<div class="cards">
				{#each ideaCards as c (c.title)}{@render card(c)}{/each}
			</div>
			<p class="prose">
				Two buildings are open today, Town Hall and Pavilion, and three more are going up. Close
				this window and click a building to look inside.
			</p>
		{:else if tab === 'how'}
			<h3>How the village works</h3>
			<div class="cards">
				{#each howCards as c (c.title)}{@render card(c)}{/each}
			</div>
			<h3 class="spaced">An example: a fundraiser dinner</h3>
			<p class="prose">Here's how the buildings could share one busy Saturday.</p>
			<ol class="steps">
				{#each fundraiser as step, i (step.who)}
					<li>
						<span class="num" aria-hidden="true">{i + 1}</span>
						<span>
							<strong>{step.who}</strong>
							{#if step.status}<span class="status-tag inline">{step.status}</span>{/if}
							<br />{step.text}
						</span>
					</li>
				{/each}
			</ol>
			<p class="note">
				Bell Tower and Bank aren't open yet, so those steps are the plan, not today.
			</p>
		{:else if tab === 'host'}
			<h3>Run it on your own server</h3>
			<p class="lede">
				Every building is free to self-host. If you can run Docker, you can run Hamlet.
			</p>
			<div class="columns">
				<div class="column">
					<h4>What you'll need</h4>
					<ul class="arrow-list">
						<li>A machine that runs Docker: a home server, a mini PC or a small cloud machine.</li>
						<li>A domain name, if people will reach it from outside your building.</li>
						<li>Someone comfortable following a setup guide.</li>
					</ul>
					<h4 class="spaced">The steps</h4>
					<ol class="steps tight">
						{#each hostSteps as step, i (step.title)}
							<li>
								<span class="num" aria-hidden="true">{i + 1}</span>
								<span><strong>{step.title}</strong><br />{step.text}</span>
							</li>
						{/each}
					</ol>
				</div>
				<div class="column wide-gap">
					<InstallSnippet />
					<p class="note">The full install guide is still being written.</p>
					<div class="actions">
						<a class="btn btn--dark" href={links.installGuide}>Read the install guide</a>
						<a class="btn" href={links.github}>View on GitHub</a>
					</div>
				</div>
			</div>
			<div class="card">
				<h4>Rather not run a server?</h4>
				<p>Managed hosting is planned for organizations that would rather not run one.</p>
			</div>
		{:else}
			<h3>Questions from the village square</h3>
			<div class="cards cards--wide">
				{#each [...faq, ...guidebookFaq] as item (item.q)}
					<div class="card">
						<h4>{item.q}</h4>
						<p>{item.a}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</Window>

<style>
	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 3px;
		padding: 3px 3px 0;
		background: var(--ink);
		flex: none;
	}
	.tabs button {
		min-height: 44px;
		padding: 8px 16px;
		border: 0;
		background: #bfb08a;
		color: var(--ink);
		cursor: pointer;
		font-family: var(--font-pixel);
		font-size: 17px;
		font-weight: 600;
	}
	.tabs button[aria-selected='true'] {
		background: var(--cream);
	}

	.panel {
		display: flex;
		flex-direction: column;
		gap: 16px;
		color: var(--ink);
	}
	h3,
	h4 {
		margin: 0;
		font-family: var(--font-pixel);
		font-weight: 600;
		color: var(--ink);
	}
	h3 {
		font-size: 22px;
		line-height: 1.2;
	}
	h3.big {
		font-size: 28px;
	}
	h4 {
		font-size: 18px;
	}
	h3.spaced {
		margin-top: 8px;
	}
	h4.spaced {
		margin-top: 10px;
	}
	p {
		margin: 0;
	}
	.lede,
	.prose {
		max-width: 66ch;
		line-height: 1.6;
	}
	.lede {
		font-size: 17px;
	}
	.prose {
		font-size: 15.5px;
	}
	.note {
		font-size: 13.5px;
		line-height: 1.5;
		color: var(--text-muted);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		gap: 14px;
	}
	.cards--wide {
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	}
	.card {
		background: var(--paper);
		border: 3px solid var(--ink);
		box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.25);
		padding: 14px 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.card p {
		font-size: 14.5px;
		line-height: 1.55;
		color: var(--text-soft);
	}
	.card-head {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--moss);
	}
	.card-head h4 {
		flex: 1;
		line-height: 1.2;
	}

	.steps {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 12px;
		font-size: 15px;
		line-height: 1.5;
	}
	.steps.tight {
		gap: 10px;
	}
	.steps li {
		display: flex;
		gap: 12px;
		align-items: flex-start;
	}
	.num {
		flex: none;
		width: 28px;
		height: 28px;
		background: var(--ink);
		color: var(--cream);
		font-family: var(--font-pixel);
		font-size: 16px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.status-tag.inline {
		margin-left: 6px;
	}

	.columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 18px;
		align-items: start;
	}
	.column {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.column.wide-gap {
		gap: 12px;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
