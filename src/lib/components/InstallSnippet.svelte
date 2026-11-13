<!-- The self-host terminal snippet. The bracketed parts are placeholders in the design. -->
<div class="terminal">
	<div class="comment"># pick a building</div>
	<div><span class="prompt">$</span> git clone [TOWN HALL REPO URL]</div>
	<div><span class="prompt">$</span> cd town-hall</div>
	<div><span class="prompt">$</span> docker compose up -d</div>
	<div class="comment gap"># then open http://localhost:[PORT]/setup/</div>
</div>

<style>
	.terminal {
		background: #17121b;
		border: 3px solid #4a3f4c;
		padding: 16px 18px;
		font-family: var(--font-mono);
		font-size: 14px;
		line-height: 1.8;
		color: var(--cream);
		overflow-x: auto;
	}
	.comment {
		color: #a99daa;
	}
	.gap {
		margin-top: 8px;
	}
	.prompt {
		color: #8cc66a;
	}
</style>
