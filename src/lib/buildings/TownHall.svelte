<!--
  Ported from the "TownHall" artboard of the Hamlet website design.
  The markup is a direct port, so styling is still inline; pull repeated
  patterns into components and classes as this page gets worked on.
-->
<script lang="ts">
	interface Props {
		/** True when shown inside a village map window instead of as its own page. */
		embedded?: boolean;
	}

	let { embedded = false }: Props = $props();
</script>

<div style="font-family: var(--font-body); color: #2C2430; background: #F2E4C8">
	<header style="position: relative; height: 300px; overflow: hidden; background: #96D0EC">
		<img
			src="/img/town-hall/01-front-town-hall-cream-wooden.png"
			alt="The front of Town Hall: a cream wooden hall with a navy roof, a clock tower and the Town Hall emblem above its arched door."
			style="position: absolute; left: 50%; top: 0; width: 1440px; height: 300px; margin-left: -720px; image-rendering: pixelated"
		/>
		{#if !embedded}
			<a
				href="/"
				style="position: absolute; left: 12px; top: 12px; min-height: 44px; box-sizing: border-box; padding: 8px 14px; background: #FFF6DC; color: #2C2430; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.45); cursor: pointer; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px"
				><span aria-hidden="true">←</span> Hamlet</a
			>
		{/if}
	</header>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<section
		style="background: repeating-linear-gradient(90deg, #F2E4C8 0 22px, #ECDBBB 22px 24px); padding: 30px 16px 36px"
	>
		<div
			style="max-width: 1160px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px"
		>
			<div style="display: flex; flex-wrap: wrap; gap: 26px 36px; align-items: center">
				<div
					style="flex: 1 1 360px; min-width: 0; display: flex; flex-direction: column; gap: 18px"
				>
					<div style="display: flex; align-items: center; gap: 14px">
						<svg
							viewBox="0 0 64 64"
							width="52"
							height="52"
							aria-hidden="true"
							style="flex: none; display: block"
							><rect width="64" height="64" rx="17" fill="#2b3a67"></rect><path
								d="M10.5 27L32 11.5L53.5 27Z"
								fill="#f6e9d2"
								stroke="#f6e9d2"
								stroke-width="3"
								stroke-linejoin="round"
							></path><rect x="15" y="27" width="34" height="25" rx="2.5" fill="#f6e9d2"
							></rect><circle cx="32" cy="27.5" r="7.2" fill="#2b3a67"></circle><path
								d="M32 23.6V27.5L34.8 29.4"
								fill="none"
								stroke="#f6e9d2"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path><path d="M27.5 52V43.5A4.5 4.5 0 0 1 36.5 43.5V52Z" fill="#2b3a67"
							></path></svg
						>
						<div>
							<h1
								style="margin: 0; font-family: var(--font-pixel); font-size: 40px; font-weight: 700; line-height: 1; color: #2C2430"
							>
								Town Hall
							</h1>
							<p
								style="margin: 4px 0 0; font-size: 13px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #5A4E5C"
							>
								A Hamlet building
							</p>
						</div>
					</div>
					<p
						style="margin: 0; font-family: var(--font-pixel); font-size: 24px; font-weight: 600; line-height: 1.25; color: #2B3A67; max-width: 30ch"
					>
						Volunteer management for organizations that run on people.
					</p>
					<p
						style="margin: 0; font-size: 16.5px; line-height: 1.6; color: #3B323D; max-width: 62ch"
					>
						Town Hall helps parishes, nonprofits and community groups plan events, staff them with
						trained volunteers, and recognize the people who show up. Staff get a console to run all
						of it, and they can plan events with Claude.
					</p>
					<ul
						style="margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 8px"
					>
						<li
							style="padding: 5px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 500; color: #2C2430"
						>
							Free and open source
						</li>
						<li
							style="padding: 5px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 500; color: #2C2430"
						>
							Self-hosted
						</li>
						<li
							style="padding: 5px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 500; color: #2C2430"
						>
							Six languages
						</li>
						<li
							style="padding: 5px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 500; color: #2C2430"
						>
							Installs as an app
						</li>
					</ul>
					<div style="display: flex; flex-wrap: wrap; gap: 10px; padding-top: 4px">
						<a
							href="https://github.com/Collert/town_hall"
							style="min-height: 44px; box-sizing: border-box; padding: 8px 14px; background: #2B3A67; color: #F6E9D2; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.45); cursor: pointer; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px"
							>View on GitHub</a
						><a
							href="#th-start"
							style="min-height: 44px; box-sizing: border-box; padding: 8px 14px; background: #FFF6DC; color: #2C2430; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.45); cursor: pointer; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px"
							>Quick start</a
						>
					</div>
				</div>
				<div style="flex: none; margin: 0 auto; display: flex; gap: 14px; align-items: flex-end">
					<div
						style="background: #2C2430; padding: 8px 6px 12px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
					>
						<img
							src="/img/town-hall/02-town-hall-phone-event-page.webp"
							alt="Town Hall on a phone: an event page with a Sign up for a role button."
							loading="lazy"
							style="display: block; width: 146px; height: 292px; image-rendering: auto; background: #EAF6F4"
						/>
					</div>
					<div
						style="background: #2C2430; padding: 8px 6px 12px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
					>
						<img
							src="/img/town-hall/03-town-hall-phone-volunteer-my.webp"
							alt="Town Hall on a phone: a volunteer's My Events page with upcoming shifts and impact points."
							loading="lazy"
							style="display: block; width: 146px; height: 292px; image-rendering: auto; background: #EAF6F4"
						/>
					</div>
				</div>
			</div>
			<p style="margin: 0; font-size: 13.5px; line-height: 1.5; color: #5A4E5C">
				The screenshots on this page show Town Hall with made-up demo data.
			</p>
		</div>
	</section>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<section
		style="background: repeating-linear-gradient(90deg, #F2E4C8 0 22px, #ECDBBB 22px 24px); padding: 30px 16px 36px"
	>
		<div
			style="max-width: 1160px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px"
		>
			<div
				style="align-self: flex-start; display: flex; flex-direction: column; align-items: stretch"
			>
				<div
					aria-hidden="true"
					style="display: flex; justify-content: space-between; padding: 0 22px; height: 12px"
				>
					<span style="width: 3px; background: #2C2430"></span><span
						style="width: 3px; background: #2C2430"
					></span>
				</div>
				<h2
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The notice board
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #2C2430; max-width: 62ch"
			>
				For volunteers: everything they need is pinned up front.
			</p>
			<div
				style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 9px"
			>
				<ul
					style="margin: 0; list-style: none; border: 3px solid #5E4630; background: radial-gradient(#B58650 1.5px, transparent 1.6px) 0 0 / 14px 14px, #C89B63; padding: 22px 16px 18px; display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px; gap: 22px 16px"
				>
					<li
						style="position: relative; background: #FFFBEA; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.35); padding: 20px 14px 14px"
					>
						<span
							aria-hidden="true"
							style="position: absolute; left: 50%; top: -8px; width: 10px; height: 10px; margin-left: -8px; background: #C0392B; border: 3px solid #2C2430"
						></span>
						<h3
							style="margin: 0 0 6px; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Find opportunities
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Browse and search published events, filter by category, and see every role, its time
							window and how many spots are left.
						</p>
					</li>
					<li
						style="position: relative; background: #FFF1B8; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.35); padding: 20px 14px 14px"
					>
						<span
							aria-hidden="true"
							style="position: absolute; left: 50%; top: -8px; width: 10px; height: 10px; margin-left: -8px; background: #2B3A67; border: 3px solid #2C2430"
						></span>
						<h3
							style="margin: 0 0 6px; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Train, then serve
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Roles can require training modules. Sign-up opens once the required ones are complete.
						</p>
					</li>
					<li
						style="position: relative; background: #DCEBF5; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.35); padding: 20px 14px 14px"
					>
						<span
							aria-hidden="true"
							style="position: absolute; left: 50%; top: -8px; width: 10px; height: 10px; margin-left: -8px; background: #F4A93B; border: 3px solid #2C2430"
						></span>
						<h3
							style="margin: 0 0 6px; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Earn impact points
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Shifts, training and endorsements earn points, and points set your level.
						</p>
					</li>
					<li
						style="position: relative; background: #FFFBEA; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.35); padding: 20px 14px 14px"
					>
						<span
							aria-hidden="true"
							style="position: absolute; left: 50%; top: -8px; width: 10px; height: 10px; margin-left: -8px; background: #2F7A4F; border: 3px solid #2C2430"
						></span>
						<h3
							style="margin: 0 0 6px; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							A record you can share
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							A profile, endorsements from peers and staff, external certificates and a printable
							volunteer résumé.
						</p>
					</li>
					<li
						style="position: relative; background: #F9DDE1; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.35); padding: 20px 14px 14px"
					>
						<span
							aria-hidden="true"
							style="position: absolute; left: 50%; top: -8px; width: 10px; height: 10px; margin-left: -8px; background: #C0392B; border: 3px solid #2C2430"
						></span>
						<h3
							style="margin: 0 0 6px; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Know your team
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							On large events you see your area lead, your shift lead and a link to your own task
							list.
						</p>
					</li>
					<li
						style="position: relative; background: #FFF1B8; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.35); padding: 20px 14px 14px"
					>
						<span
							aria-hidden="true"
							style="position: absolute; left: 50%; top: -8px; width: 10px; height: 10px; margin-left: -8px; background: #2B3A67; border: 3px solid #2C2430"
						></span>
						<h3
							style="margin: 0 0 6px; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Install it, get notified
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							The site installs as an app. Turn on push notifications for shift reminders, new
							opportunities, invitations and messages from staff.
						</p>
					</li>
					<li
						style="position: relative; background: #DCEBF5; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.35); padding: 20px 14px 14px"
					>
						<span
							aria-hidden="true"
							style="position: absolute; left: 50%; top: -8px; width: 10px; height: 10px; margin-left: -8px; background: #F4A93B; border: 3px solid #2C2430"
						></span>
						<h3
							style="margin: 0 0 6px; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Reminders
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							A reminder email the day before each shift, and a thank-you asking for feedback after
							your last shift at an event.
						</p>
					</li>
				</ul>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/04-opportunities-page-search-bar-above.webp"
							alt="The Opportunities page: a search bar above event cards with cover photos, dates and places for a food drive, a hamper packing night and a newcomer clinic."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Browse what is coming up
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/05-event-page-heritage-festival-cover.webp"
							alt="An event page for a heritage festival: a cover photo, the date and place, and buttons to sign up for a role, add it to your calendar or cancel a shift."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						An event page, one tap from a shift
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/06-volunteer-profile-her-photo-verified.webp"
							alt="A volunteer profile with her photo, verified hours, impact points, projects completed, core skills and recent endorsements."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						A volunteer's profile and impact dashboard
					</figcaption>
				</figure>
			</div>
		</div>
	</section>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<section
		style="background: repeating-linear-gradient(90deg, #2B3A67 0 30px, #24315A 30px 33px); padding: 30px 16px 36px"
	>
		<div
			style="max-width: 1160px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px"
		>
			<div
				style="align-self: flex-start; display: flex; flex-direction: column; align-items: stretch"
			>
				<div
					aria-hidden="true"
					style="display: flex; justify-content: space-between; padding: 0 22px; height: 12px"
				>
					<span style="width: 3px; background: #2C2430"></span><span
						style="width: 3px; background: #2C2430"
					></span>
				</div>
				<h2
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The front desk
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #F6E9D2; max-width: 62ch"
			>
				For staff: the Console is the ledger that runs it all.
			</p>
			<div
				style="background: #1B2547; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(10, 12, 24, 0.5); padding: 8px"
			>
				<ul
					style="margin: 0; list-style: none; background: #FFFBEA; border: 3px solid #2C2430; border-left: 12px solid #D98C8C; padding: 6px 18px 10px"
				>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #2B3A67"
						>
							Events and staffing
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Role slots with headcounts and overstaffing limits, public or invite-only slots,
							invite links, live check-ins and reports.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #2B3A67"
						>
							Chain of command
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							For big events: group slots into areas, assign area leads, and let Town Hall pick
							shift leads 48 hours before the event.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #2B3A67"
						>
							Roles and training editors
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Set role templates, attach mandatory modules, and write lessons and quizzes.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #2B3A67"
						>
							Venues
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Addresses are geocoded automatically. Venues have features, opening hours, short-lived
							notices and their own kiosk.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #2B3A67"
						>
							Permanent staff
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Ongoing roles, optionally tied to a venue, that only assigned people can clock into.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #2B3A67"
						>
							Points rules
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Adjust points per hour, role weights, reach caps and bonuses, then recalculate
							history.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #2B3A67"
						>
							Communication
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Emails and event announcements through listmonk, with per-language templates in your
							brand colours. Push notifications switch on or off per kind.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #2B3A67"
						>
							Make it yours
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Theme colours, logo, home page hero, languages and time zone, all from the console.
						</p>
					</li>
				</ul>
			</div>
			<div
				aria-hidden="true"
				style="height: 16px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border: 3px solid #2C2430; margin: -6px -6px 0"
			></div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure
					style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px; grid-column: 1 / -1;"
				>
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/07-console-home-page-greeting-admin.webp"
							alt="The Console home page, greeting the admin with active volunteers, upcoming events, unfilled roles and hours logged this week."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The Console home
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/08-roles-staffing-festival-food-court.webp"
							alt="Roles and staffing for a festival: the Food Court area with its area lead, and Kitchen Volunteer and Cashier roles with shifts and shift leads."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Roles and staffing, grouped into areas
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/09-live-check-monitor-food-drive.webp"
							alt="The live check-in monitor for a food drive, showing how many volunteers are checked in and recent activity."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The live check-in monitor
					</figcaption>
				</figure>
			</div>
		</div>
	</section>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<section
		style="background: repeating-linear-gradient(90deg, #F2E4C8 0 22px, #ECDBBB 22px 24px); padding: 30px 16px 36px"
	>
		<div
			style="max-width: 1160px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px"
		>
			<div
				style="align-self: flex-start; display: flex; flex-direction: column; align-items: stretch"
			>
				<div
					aria-hidden="true"
					style="display: flex; justify-content: space-between; padding: 0 22px; height: 12px"
				>
					<span style="width: 3px; background: #2C2430"></span><span
						style="width: 3px; background: #2C2430"
					></span>
				</div>
				<h2
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					At the door
				</h2>
			</div>
			<div style="display: flex; flex-wrap: wrap; gap: 22px 32px; align-items: center">
				<div
					style="flex: 1 1 320px; min-width: 0; max-width: 460px; margin: 0 auto; display: flex; flex-direction: column; align-items: center"
				>
					<div
						style="width: 100%; box-sizing: border-box; background: #2C2430; padding: 10px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
					>
						<img
							src="/img/town-hall/10-kiosk-screen-food-drive-keypad.webp"
							alt="The kiosk screen for a food drive: a keypad for entering a 6-digit volunteer ID code, beside the event name, shift times and hours logged today."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1536 / 1152; image-rendering: auto; background: #EAF6F4"
						/>
					</div>
					<div aria-hidden="true" style="width: 14px; height: 26px; background: #2C2430"></div>
					<div aria-hidden="true" style="width: 110px; height: 10px; background: #2C2430"></div>
				</div>
				<div
					style="flex: 1 1 280px; min-width: 0; display: flex; flex-direction: column; gap: 10px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 24px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Kiosk check-in
					</h3>
					<p style="margin: 0; font-size: 16px; line-height: 1.6; color: #3B323D">
						Put a tablet at the door. Volunteers enter their 6-digit ID code to start and end
						shifts, either for an event or at a venue for permanent roles.
					</p>
					<p style="margin: 0; font-size: 16px; line-height: 1.6; color: #3B323D">
						The kiosk never logs anyone into the site.
					</p>
				</div>
			</div>
		</div>
	</section>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<section
		style="background: repeating-linear-gradient(90deg, #F2E4C8 0 22px, #ECDBBB 22px 24px); padding: 30px 16px 36px"
	>
		<div
			style="max-width: 1160px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px"
		>
			<div
				style="align-self: flex-start; display: flex; flex-direction: column; align-items: stretch"
			>
				<div
					aria-hidden="true"
					style="display: flex; justify-content: space-between; padding: 0 22px; height: 12px"
				>
					<span style="width: 3px; background: #2C2430"></span><span
						style="width: 3px; background: #2C2430"
					></span>
				</div>
				<h2
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The training room
				</h2>
			</div>
			<div
				style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 9px 9px 0"
			>
				<div
					style="background: #2C3F39; border: 3px solid #2C2430; padding: 20px 20px 24px; color: #F4F1E4"
				>
					<h3
						style="margin: 0 0 14px; font-family: var(--font-pixel); font-size: 28px; font-weight: 600; line-height: 1.15"
					>
						Train, then serve
					</h3>
					<ul
						style="margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; font-family: var(--font-pixel); font-size: 18px; font-weight: 400; line-height: 1.35"
					>
						<li style="display: flex; gap: 12px; align-items: baseline">
							<span
								aria-hidden="true"
								style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
							></span><span>Lessons in Markdown and video</span>
						</li>
						<li style="display: flex; gap: 12px; align-items: baseline">
							<span
								aria-hidden="true"
								style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
							></span><span>Quizzes at the end</span>
						</li>
						<li style="display: flex; gap: 12px; align-items: baseline">
							<span
								aria-hidden="true"
								style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
							></span><span>Sign-up opens when the required modules are done</span>
						</li>
						<li style="display: flex; gap: 12px; align-items: baseline">
							<span
								aria-hidden="true"
								style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
							></span><span>Completions can expire, so certifications stay current</span>
						</li>
						<li style="display: flex; gap: 12px; align-items: baseline">
							<span
								aria-hidden="true"
								style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
							></span><span>External certificates sit on the volunteer's record</span>
						</li>
						<li style="display: flex; gap: 12px; align-items: baseline">
							<span
								aria-hidden="true"
								style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
							></span><span>A built-in admin guide walks new admins through the app</span>
						</li>
					</ul>
				</div>
				<div
					aria-hidden="true"
					style="height: 14px; display: flex; align-items: center; gap: 10px; padding: 0 14px"
				>
					<span style="width: 26px; height: 6px; background: #F4F1E4"></span><span
						style="width: 16px; height: 6px; background: #F9DDE1"
					></span><span style="width: 20px; height: 6px; background: #DCEBF5"></span>
				</div>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/11-training-module-called-food-safety.webp"
							alt="A training module called Food Safety Basics, 100 percent completed, with its list of lessons."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						A training module
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/12-training-directory-module-cards-showing.webp"
							alt="The training directory, with module cards showing progress and how many roles need each one."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The training directory
					</figcaption>
				</figure>
			</div>
		</div>
	</section>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<section
		style="background: repeating-linear-gradient(90deg, #2B3A67 0 30px, #24315A 30px 33px); padding: 30px 16px 36px"
	>
		<div
			style="max-width: 1160px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px"
		>
			<div
				style="align-self: flex-start; display: flex; flex-direction: column; align-items: stretch"
			>
				<div
					aria-hidden="true"
					style="display: flex; justify-content: space-between; padding: 0 22px; height: 12px"
				>
					<span style="width: 3px; background: #2C2430"></span><span
						style="width: 3px; background: #2C2430"
					></span>
				</div>
				<h2
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The trophy shelf
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #F6E9D2; max-width: 62ch"
			>
				Recognition for the people who keep showing up.
			</p>
			<div>
				<ul
					style="margin: 0; padding: 0 10px; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px; align-items: end"
				>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="34"
								height="34"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><path d="M8 4 H16 V10 L12 13 L8 10 Z"></path><path
									d="M8 5 H4 V8 L8 9 M16 5 H20 V8 L16 9"
								></path><path d="M12 13 V17 M8 20 H16 M9 17 H15 V20"></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Impact points
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Shifts, training and endorsements all earn points.
						</p>
					</li>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="34"
								height="34"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><path d="M4 20 H9 V15 H14 V10 H19 V5"></path><path d="M19 5 L16 6 M19 5 L20 8"
								></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Levels
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Points set your level. The Recognition page shows the whole ladder.
						</p>
					</li>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="34"
								height="34"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><rect x="7" y="3" width="10" height="10"></rect><path
									d="M9 13 L8 21 L12 18 L16 21 L15 13"
								></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Endorsements
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Peers and staff can endorse a volunteer for the work they do.
						</p>
					</li>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="34"
								height="34"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><path d="M6 3 H15 L19 7 V21 H6 Z"></path><path d="M9 10 H16 M9 14 H16 M9 18 H13"
								></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Volunteer résumé
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							A printable record of where someone has served.
						</p>
					</li>
				</ul>
				<div
					aria-hidden="true"
					style="height: 16px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border: 3px solid #2C2430; box-shadow: 0 6px 0 rgba(10, 12, 24, 0.35)"
				></div>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/13-recognition-page-showing-volunteer-champion.webp"
							alt="The Recognition page, showing the volunteer at Champion level and the ladder of levels with their perks."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The Recognition page
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/town-hall/14-printable-volunteer-resume-hours.webp"
							alt="A printable volunteer résumé with hours, events served, impact points, skills and experience."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #EAF6F4"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						A printable volunteer résumé
					</figcaption>
				</figure>
			</div>
		</div>
	</section>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<section
		style="background: repeating-linear-gradient(90deg, #F2E4C8 0 22px, #ECDBBB 22px 24px); padding: 30px 16px 36px"
	>
		<div
			style="max-width: 1160px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px"
		>
			<div
				style="align-self: flex-start; display: flex; flex-direction: column; align-items: stretch"
			>
				<div
					aria-hidden="true"
					style="display: flex; justify-content: space-between; padding: 0 22px; height: 12px"
				>
					<span style="width: 3px; background: #2C2430"></span><span
						style="width: 3px; background: #2C2430"
					></span>
				</div>
				<h2
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The planning table
				</h2>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; align-items: start"
			>
				<div
					style="background: linear-gradient(#34457A 2px, transparent 2px) 0 0 / 24px 24px, linear-gradient(90deg, #34457A 2px, transparent 2px) 0 0 / 24px 24px, #2B3A67; color: #F6E9D2; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 18px 18px 20px; display: flex; flex-direction: column; gap: 12px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 24px; font-weight: 600; line-height: 1.2"
					>
						Plan events with Claude
					</h3>
					<p style="margin: 0; font-size: 15px; line-height: 1.55">
						Town Hall includes an MCP server. Add it as a custom connector in Claude, and staff can
						ask Claude to:
					</p>
					<ul
						style="margin: 0; padding: 0; list-style: none; display: grid; gap: 7px; font-size: 15px; line-height: 1.45"
					>
						<li style="display: flex; gap: 10px">
							<span aria-hidden="true" style="color: #F4A93B; font-weight: 800">→</span><span
								>Draft an event</span
							>
						</li>
						<li style="display: flex; gap: 10px">
							<span aria-hidden="true" style="color: #F4A93B; font-weight: 800">→</span><span
								>Estimate headcounts from past events</span
							>
						</li>
						<li style="display: flex; gap: 10px">
							<span aria-hidden="true" style="color: #F4A93B; font-weight: 800">→</span><span
								>Set up areas and build task lists</span
							>
						</li>
						<li style="display: flex; gap: 10px">
							<span aria-hidden="true" style="color: #F4A93B; font-weight: 800">→</span><span
								>Build training modules from material you provide</span
							>
						</li>
						<li style="display: flex; gap: 10px">
							<span aria-hidden="true" style="color: #F4A93B; font-weight: 800">→</span><span
								>Write quizzes from lessons</span
							>
						</li>
						<li style="display: flex; gap: 10px">
							<span aria-hidden="true" style="color: #F4A93B; font-weight: 800">→</span><span
								>Invite volunteers</span
							>
						</li>
					</ul>
					<p style="margin: 0; font-size: 14px; line-height: 1.5; color: #D9CDB4">
						The scope is limited on purpose: nothing can be deleted, and people's profiles and
						settings are read-only.
					</p>
				</div>
				<div
					style="background: #FFFBEA; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 18px 18px 20px; display: flex; flex-direction: column; gap: 12px"
				>
					<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px">
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 24px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Task lists with Bell Tower
						</h3>
						<span
							style="font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; background: #EBDDB8; color: #5A4028; padding: 4px 8px"
							>Bell Tower is in progress</span
						>
					</div>
					<p style="margin: 0; font-size: 15px; line-height: 1.55; color: #3B323D">
						Connect your organization's Bell Tower server and every event gets:
					</p>
					<ul
						style="margin: 0; padding: 0; list-style: none; display: grid; gap: 9px; font-size: 15px; line-height: 1.45; color: #2C2430"
					>
						<li style="display: flex; gap: 10px; align-items: center">
							<span
								aria-hidden="true"
								style="flex: none; width: 16px; height: 16px; border: 3px solid #2C2430; background: #2F7A4F"
							></span><span>A planning list for the event</span>
						</li>
						<li style="display: flex; gap: 10px; align-items: center">
							<span
								aria-hidden="true"
								style="flex: none; width: 16px; height: 16px; border: 3px solid #2C2430; background: #2F7A4F"
							></span><span>Day-of lists</span>
						</li>
						<li style="display: flex; gap: 10px; align-items: center">
							<span
								aria-hidden="true"
								style="flex: none; width: 16px; height: 16px; border: 3px solid #2C2430; background: #FFFBEA"
							></span><span>One list per role, joined automatically at sign-up</span>
						</li>
					</ul>
					<p style="margin: 0; font-size: 14px; line-height: 1.5; color: #5A4E5C">
						In the console you can drag tasks between lists and merge lists.
					</p>
				</div>
			</div>
			<div style="display: flex; flex-direction: column; gap: 12px; padding-top: 10px">
				<h3
					style="margin: 0; font-family: var(--font-pixel); font-size: 24px; font-weight: 600; line-height: 1.2; color: #2C2430"
				>
					Speaks your volunteers' language
				</h3>
				<ul
					style="margin: 0; padding: 10px 0 0; list-style: none; display: flex; flex-wrap: wrap; gap: 8px; border-top: 3px solid #2C2430"
				>
					<li
						lang="en"
						style="padding: 7px 12px 9px; background: #2B3A67; color: #F6E9D2; border: 3px solid #2C2430; border-top: 0; font-size: 15px; font-weight: 700"
					>
						English
					</li>
					<li
						lang="es"
						style="padding: 7px 12px 9px; background: #C45838; color: #FFFFFF; border: 3px solid #2C2430; border-top: 0; font-size: 15px; font-weight: 700"
					>
						Español
					</li>
					<li
						lang="fr"
						style="padding: 7px 12px 9px; background: #F4A93B; color: #14261F; border: 3px solid #2C2430; border-top: 0; font-size: 15px; font-weight: 700"
					>
						Français
					</li>
					<li
						lang="uk"
						style="padding: 7px 12px 9px; background: #F6E9D2; color: #2C2430; border: 3px solid #2C2430; border-top: 0; font-size: 15px; font-weight: 700"
					>
						Українська
					</li>
					<li
						lang="zh-Hant"
						style="padding: 7px 12px 9px; background: #2B3A67; color: #F6E9D2; border: 3px solid #2C2430; border-top: 0; font-size: 15px; font-weight: 700"
					>
						繁體中文
					</li>
					<li
						lang="tl"
						style="padding: 7px 12px 9px; background: #C45838; color: #FFFFFF; border: 3px solid #2C2430; border-top: 0; font-size: 15px; font-weight: 700"
					>
						Tagalog
					</li>
				</ul>
				<p style="margin: 0; font-size: 15.5px; line-height: 1.6; color: #3B323D; max-width: 62ch">
					Events, roles and lessons are translatable, and an Auto-translate button fills in missing
					translations.
				</p>
			</div>
		</div>
	</section>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<section
		style="background: repeating-linear-gradient(90deg, #4A382B 0 38px, #3D2E23 38px 41px); padding: 30px 16px 36px"
	>
		<div
			style="max-width: 1160px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px"
		>
			<div
				style="align-self: flex-start; display: flex; flex-direction: column; align-items: stretch"
			>
				<div
					aria-hidden="true"
					style="display: flex; justify-content: space-between; padding: 0 22px; height: 12px"
				>
					<span style="width: 3px; background: #2C2430"></span><span
						style="width: 3px; background: #2C2430"
					></span>
				</div>
				<h2
					id="th-start"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The back office
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #FFF6DC; max-width: 62ch"
			>
				Built with Django 6, HTMX and plain CSS. No SPA and no build step.
			</p>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; align-items: start"
			>
				<div style="display: flex; flex-direction: column; gap: 10px; min-width: 0">
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 22px; font-weight: 600; color: #FFF6DC"
					>
						Quick start
					</h3>
					<div
						style="background: #17121B; border: 3px solid #6B5A4C; padding: 16px 18px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.8; color: #FFF6DC; overflow-x: auto; white-space: nowrap"
					>
						<div>
							<span style="color: #8CC66A">$</span> git clone https://github.com/Collert/town_hall.git
						</div>
						<div><span style="color: #8CC66A">$</span> cd town_hall</div>
						<div><span style="color: #8CC66A">$</span> python -m venv .venv</div>
						<div><span style="color: #8CC66A">$</span> source .venv/bin/activate</div>
						<div><span style="color: #8CC66A">$</span> pip install -r requirements.txt</div>
						<div><span style="color: #8CC66A">$</span> cp .env.example .env</div>
						<div><span style="color: #8CC66A">$</span> python manage.py migrate</div>
						<div><span style="color: #8CC66A">$</span> python manage.py runserver</div>
					</div>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.55; color: #F1E6CF">
						You need Python 3.12 or newer. Set SECRET_KEY in .env before you migrate. On a fresh
						database Town Hall sends you to /setup/, where you create the first admin and name your
						organization.
					</p>
				</div>
				<div style="display: flex; flex-direction: column; gap: 10px; min-width: 0">
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 22px; font-weight: 600; color: #FFF6DC"
					>
						Going to production
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.55; color: #F1E6CF">
						The repo deploys with Nixpacks, for example on Coolify or Railway. A production deploy
						needs a database and S3-compatible storage for uploads, with HTTPS ending at your
						reverse proxy.
					</p>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.55; color: #F1E6CF">
						In production Town Hall sends anonymous crash reports to the project's Bugsink so bugs
						get fixed. You can opt out, or point it at your own.
					</p>
					<div>
						<a
							href="https://github.com/Collert/town_hall"
							style="min-height: 44px; box-sizing: border-box; padding: 8px 14px; background: #FFF6DC; color: #2C2430; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.45); cursor: pointer; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px"
							>View on GitHub</a
						>
					</div>
				</div>
			</div>
			<h3
				style="margin: 8px 0 0; font-family: var(--font-pixel); font-size: 22px; font-weight: 600; color: #FFF6DC"
			>
				What it plugs into
			</h3>
			<ul
				style="margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px; gap: 12px"
			>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 4px"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: baseline; gap: 10px"
					>
						<h4
							style="margin: 0; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							listmonk
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Recommended</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Transactional email, event announcements, newsletter sign-up and password reset
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 4px"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: baseline; gap: 10px"
					>
						<h4
							style="margin: 0; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Bell Tower
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Optional</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Shared task lists for events and roles
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 4px"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: baseline; gap: 10px"
					>
						<h4
							style="margin: 0; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							S3-compatible storage
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Production</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Media uploads in production
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 4px"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: baseline; gap: 10px"
					>
						<h4
							style="margin: 0; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Nominatim (OpenStreetMap)
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Automatic</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Geocoding venue and event addresses
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 4px"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: baseline; gap: 10px"
					>
						<h4
							style="margin: 0; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							LibreTranslate, Google, DeepL or MyMemory
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Optional</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Auto-translating content
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 4px"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: baseline; gap: 10px"
					>
						<h4
							style="margin: 0; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Claude (MCP)
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Optional</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						AI-assisted event planning for staff
					</p>
				</li>
			</ul>
		</div>
	</section>
	<div
		aria-hidden="true"
		style="height: 14px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border-top: 3px solid #2C2430; border-bottom: 3px solid #2C2430"
	></div>
	<footer
		style="background: repeating-linear-gradient(90deg, #F2E4C8 0 22px, #ECDBBB 22px 24px); padding: 26px 16px 34px"
	>
		<div
			style="max-width: 560px; margin: 0 auto; background: #6B8F5E; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 16px 18px 18px; text-align: center"
		>
			<p
				style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 500; line-height: 1.4; color: #14261F"
			>
				Made for the people who set up the chairs, run the registration desk, and stay to clean up.
			</p>
		</div>
	</footer>
</div>
