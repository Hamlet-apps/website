<!--
  Ported from the "Pavilion" artboard of the Hamlet website design.
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
			src="/img/pavilion/01-front-pavilion-fantasy-tavern-tall.png"
			alt="The front of Pavilion: a fantasy tavern with a tall timbered gable over a bay window, a thick thatched roof, an open-sided bar under a thatched lean-to, a small gabled annex, an outdoor oven with a fire, and the Pavilion emblem on a hanging banner."
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
							><rect width="64" height="64" rx="17" fill="#1f4a3a"></rect><circle
								cx="32"
								cy="19.5"
								r="3.2"
								fill="#f4a93b"
							></circle><path d="M12 42.5A20 18.5 0 0 1 52 42.5Z" fill="#f4a93b"></path><path
								d="M19.5 37.5A13.5 12 0 0 1 26.5 29"
								fill="none"
								stroke="#1f4a3a"
								stroke-width="2.6"
								stroke-linecap="round"
							></path><path
								d="M9 47.5H55"
								stroke="#f4a93b"
								stroke-width="4.5"
								stroke-linecap="round"
							></path></svg
						>
						<div>
							<h1
								style="margin: 0; font-family: var(--font-pixel); font-size: 40px; font-weight: 700; line-height: 1; color: #2C2430"
							>
								Pavilion
							</h1>
							<p
								style="margin: 4px 0 0; font-size: 13px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #5A4E5C"
							>
								A Hamlet building
							</p>
						</div>
					</div>
					<p
						style="margin: 0; font-family: var(--font-pixel); font-size: 24px; font-weight: 600; line-height: 1.25; color: #1F4A3A; max-width: 32ch"
					>
						Restaurant software that runs the whole place.
					</p>
					<p
						style="margin: 0; font-size: 16.5px; line-height: 1.6; color: #3B323D; max-width: 62ch"
					>
						The till, the kitchen, the online store, the couriers, the TVs on the wall and the music
						in the dining room. Pavilion is one app you host yourself, so it replaces the stack of
						subscriptions a small restaurant usually pays for, and your orders and customers stay
						yours.
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
							Built for touch screens
						</li>
						<li
							style="padding: 5px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 500; color: #2C2430"
						>
							Live on every screen
						</li>
					</ul>
					<div style="display: flex; flex-wrap: wrap; gap: 10px; padding-top: 4px">
						<a
							href="https://github.com/Collert/Pavilion"
							style="min-height: 44px; box-sizing: border-box; padding: 8px 14px; background: #F4A93B; color: #14261F; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.45); cursor: pointer; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px"
							>View on GitHub</a
						><a
							href="#pv-start"
							style="min-height: 44px; box-sizing: border-box; padding: 8px 14px; background: #FFF6DC; color: #2C2430; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(44, 36, 48, 0.45); cursor: pointer; font-family: var(--font-pixel); font-size: 17px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px"
							>Quick start</a
						>
					</div>
				</div>
				<div
					style="flex: 0 1 auto; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; align-items: flex-end"
				>
					<figure
						style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 8px"
					>
						<div
							style="background: #2C2430; padding: 8px 6px 12px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
						>
							<img
								src="/img/pavilion/02-online-store-phone-home-page.webp"
								alt="The online store on a phone: the home page of a restaurant called Corner Kitchen with Order for pickup and Get it delivered buttons."
								loading="lazy"
								style="display: block; width: 146px; height: 292px; image-rendering: auto; background: #E8EFEA"
							/>
						</div>
					</figure>
					<figure
						style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 8px"
					>
						<div
							style="background: #2C2430; padding: 8px 6px 12px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
						>
							<img
								src="/img/pavilion/03-online-store-menu-phone-dish.webp"
								alt="The online store's menu on a phone, with dish cards for a smash burger and a crispy chicken sandwich."
								loading="lazy"
								style="display: block; width: 146px; height: 292px; image-rendering: auto; background: #E8EFEA"
							/>
						</div>
					</figure>
				</div>
			</div>
			<nav aria-label="Rooms on this page" style="display: flex; flex-direction: column; gap: 8px">
				<h2
					style="margin: 0; font-size: 13px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #5A4E5C"
				>
					Take the tour
				</h2>
				<ul
					style="margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 8px"
				>
					<li>
						<a
							href="#pv-till"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The till</a
						>
					</li>
					<li>
						<a
							href="#pv-pass"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The pass</a
						>
					</li>
					<li>
						<a
							href="#pv-pantry"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The pantry</a
						>
					</li>
					<li>
						<a
							href="#pv-window"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The front window</a
						>
					</li>
					<li>
						<a
							href="#pv-door"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The back door</a
						>
					</li>
					<li>
						<a
							href="#pv-walls"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The walls</a
						>
					</li>
					<li>
						<a
							href="#pv-jukebox"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The jukebox</a
						>
					</li>
					<li>
						<a
							href="#pv-banquet"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The banquet room</a
						>
					</li>
					<li>
						<a
							href="#pv-shelf"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The gift shelf</a
						>
					</li>
					<li>
						<a
							href="#pv-staff"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The staff room</a
						>
					</li>
					<li>
						<a
							href="#pv-office"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The office</a
						>
					</li>
					<li>
						<a
							href="#pv-cellar"
							style="display: block; padding: 6px 10px 7px; background: #FFFBEA; color: #2C2430; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 15px; font-weight: 600; text-decoration: none"
							>The cellar</a
						>
					</li>
				</ul>
			</nav>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure
					style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px; grid-column: 1 / -1;"
				>
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/04-staff-launcher-clock-who-signed.webp"
							alt="The staff launcher: a clock, who is signed in, today's numbers for this device, and tiles for Register, Order marking, Cookery, Availability, Cash drawer, Deliveries, Screens, Audio, Time clock, My profile and Admin."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The staff launcher ties every app together
					</figcaption>
				</figure>
			</div>
			<p style="margin: 0; font-size: 13.5px; line-height: 1.5; color: #5A4E5C">
				The screenshots on this page show the demo restaurant that ships with Pavilion, Corner
				Kitchen.
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
					id="pv-till"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The till
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #2C2430; max-width: 62ch"
			>
				A real point of sale for the counter, built for fingers and busy hands.
			</p>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; align-items: start"
			>
				<div
					style="background: #FFFFFF; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 14px 18px 6px; max-width: 520px"
				>
					<p
						style="margin: 0 0 4px; font-family: var(--font-pixel); font-size: 15px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4E5C; text-align: center"
					>
						Register 1 · what it does
					</p>
					<ul style="margin: 0; padding: 0; list-style: none">
						<li style="padding: 9px 0; border-bottom: 2px dashed #C9BFA9">
							<h3
								style="margin: 0 0 2px; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.25; color: #2C2430"
							>
								Touch-first register
							</h3>
							<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Sections follow your stations. Tap a dish to add it, swipe a line to discount,
								customize or remove it.
							</p>
						</li>
						<li style="padding: 9px 0; border-bottom: 2px dashed #C9BFA9">
							<h3
								style="margin: 0 0 2px; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.25; color: #2C2430"
							>
								Combos and modifiers
							</h3>
							<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Combos walk the cashier through each choice. Dishes take options, add-ons,
								substitutions and things to leave off.
							</p>
						</li>
						<li style="padding: 9px 0; border-bottom: 2px dashed #C9BFA9">
							<h3
								style="margin: 0 0 2px; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.25; color: #2C2430"
							>
								PIN sign-in
							</h3>
							<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Staff pick their name and type a 4-digit PIN. Five wrong tries locks that person out
								for a minute.
							</p>
						</li>
						<li style="padding: 9px 0; border-bottom: 2px dashed #C9BFA9">
							<h3
								style="margin: 0 0 2px; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.25; color: #2C2430"
							>
								Card on a Square Terminal
							</h3>
							<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Each register pairs its own Terminal. No Terminal? The register shows a QR code and
								the customer pays on their own phone.
							</p>
						</li>
						<li style="padding: 9px 0; border-bottom: 2px dashed #C9BFA9">
							<h3
								style="margin: 0 0 2px; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.25; color: #2C2430"
							>
								Cash, gift cards, split payments
							</h3>
							<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Take part of a bill one way and the rest another. Gift cards scan by camera or
								reader.
							</p>
						</li>
						<li style="padding: 9px 0; border-bottom: 2px dashed #C9BFA9">
							<h3
								style="margin: 0 0 2px; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.25; color: #2C2430"
							>
								A proper cash drawer
							</h3>
							<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Open with a float, record paid in and out, and close by counting. The expected
								amount stays hidden until you have counted.
							</p>
						</li>
						<li style="padding: 9px 0; border-bottom: 2px dashed #C9BFA9">
							<h3
								style="margin: 0 0 2px; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.25; color: #2C2430"
							>
								History, receipts and refunds
							</h3>
							<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Find any order, reprint or send its receipt, and refund the whole order or picked
								items.
							</p>
						</li>
						<li style="padding: 9px 0; border-bottom: 2px dashed #C9BFA9">
							<h3
								style="margin: 0 0 2px; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.25; color: #2C2430"
							>
								Discounts need a manager
							</h3>
							<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Typed-in discounts need a manager's PIN. Cashiers can ask for one without leaving
								the order.
							</p>
						</li>
					</ul>
					<p
						aria-hidden="true"
						style="margin: 8px 0 6px; font-family: var(--font-pixel); font-size: 14px; color: #8B7F8C; text-align: center"
					>
						* * * thank you * * *
					</p>
				</div>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/05-register-dish-tiles-station-left.webp"
							alt="The register: dish tiles by station on the left, and on the right an order for Maya with a smash burger, a crispy chicken sandwich, charred corn and drinks, totalling $48.14."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Ring up an order
					</figcaption>
				</figure>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/06-combo-picker-register-asking-cashier.webp"
							alt="A combo picker on the register asking the cashier to choose a main for a lunch combo, step 1 of 3."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Combos ask the right questions
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/07-register-payment-screen-card-chosen.webp"
							alt="The register's payment screen with Card chosen: the amount due and a prompt to charge the paired Square Terminal."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Pay by card, cash or gift card
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/08-register-lock-screen-three-staff.webp"
							alt="The register's lock screen: three staff names to pick from and a keypad for a 4-digit PIN."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Sign in with a PIN
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/09-cash-drawer-screen-keypad-enter.webp"
							alt="The cash drawer screen: a keypad to enter the starting float before opening the drawer."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Open and count the drawer
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/10-order-history-today-orders-payment.webp"
							alt="Order history: today's orders with payment and status, and one order's receipt with Print receipt, Send and Refund."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						History, receipts and refunds
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
		style="background: repeating-linear-gradient(90deg, #1F4A3A 0 30px, #1A3F31 30px 33px); padding: 30px 16px 36px"
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
					id="pv-pass"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The pass
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #F6E9D2; max-width: 62ch"
			>
				The kitchen display. Tickets hang here until the food goes out.
			</p>
			<div>
				<div
					aria-hidden="true"
					style="height: 12px; background: #B9B4AC; border: 3px solid #2C2430"
				></div>
				<ul
					style="margin: 0; padding: 0 10px; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 16px; align-items: start"
				>
					<li
						style="background: #FFFFFF; border: 3px solid #2C2430; border-top: 12px solid #2F7A4F; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							One screen per station
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Every dish goes to the station that makes it: grill, bar, pastry, whatever you set up.
							Each screen shows only its own part of an order.
						</p>
					</li>
					<li
						style="background: #FFFFFF; border: 3px solid #2C2430; border-top: 12px solid #F4A93B; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Green, amber, red
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Tickets change colour as they run past the station's target time, so the late ones
							stand out from across the kitchen.
						</p>
					</li>
					<li
						style="background: #FFFFFF; border: 3px solid #2C2430; border-top: 12px solid #C0392B; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Touch, mouse or keyboard
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Tap a ticket, click it, or run the whole screen from a keyboard alone. Every action
							shows its shortcut, and it works on a TV mounted in portrait.
						</p>
					</li>
					<li
						style="background: #FFFFFF; border: 3px solid #2C2430; border-top: 12px solid #2F7A4F; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Confirm, ready, handed out
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Each station confirms and marks its part ready. When every station is done the order
							is ready for pickup.
						</p>
					</li>
					<li
						style="background: #FFFFFF; border: 3px solid #2C2430; border-top: 12px solid #C0392B; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Reject with a reason
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Rejecting an online order voids or refunds the payment and tells the customer why.
						</p>
					</li>
					<li
						style="background: #FFFFFF; border: 3px solid #2C2430; border-top: 12px solid #F4A93B; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Allergies stand out
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Allergy notes show as red flags with a banner on the ticket. Modifiers are coloured by
							kind: left out, extra, option.
						</p>
					</li>
				</ul>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/11-kitchen-display-all-stations-open.webp"
							alt="The kitchen display for all stations: an open ticket for Mark that is ready for pickup and running late in red, and tickets in progress below in green and amber."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Order marking, with late tickets in red
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/12-admin-stations-page-grill-bar.webp"
							alt="The admin's Stations page: Grill, Bar, Bakery and Grab and Go, each with an icon, a colour, a ticket code and a target ticket time."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Set up your own stations
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
					id="pv-pantry"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The pantry
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #2C2430; max-width: 62ch"
			>
				Real inventory and costing, from the delivery door to the plate.
			</p>
			<div>
				<ul
					style="margin: 0; padding: 0 10px; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 16px; align-items: end"
				>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><path d="M7 4 H17 V7 H7 Z"></path><path d="M6 7 H18 V20 H6 Z"></path><path
									d="M9 12 H15"
								></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Ingredients, components, dishes
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Buy ingredients, cook them into components, and build dishes from components.
							Everything downstream follows from that chain.
						</p>
					</li>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><path d="M12 4 V20 M7 20 H17"></path><path d="M5 8 H19"></path><path
									d="M5 8 L3 14 H7 Z M19 8 L17 14 H21 Z"
								></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Costs and allergens work themselves out
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Food cost, allergens and diet flags come from the ingredients you buy. Nobody types
							them in by hand.
						</p>
					</li>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><path d="M5 4 H19 V20 H5 Z"></path><path d="M9 4 V20 M12 9 H16 M12 13 H16"
								></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Cookery
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Cooks follow a recipe step by step with timers, scale the batch, and record what it
							made. Batches in progress show for the whole shift.
						</p>
					</li>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"><path d="M12 3 V21 M4 7.5 L20 16.5 M20 7.5 L4 16.5"></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Freeze and thaw
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Transforms move a component from one state to another, like fresh patties to frozen
							and back.
						</p>
					</li>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><rect x="3" y="8" width="18" height="8"></rect><rect
									x="13"
									y="10"
									width="6"
									height="4"
								></rect></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Run out, and it comes off the menu
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							When a part runs out the dish shows as sold out on the register, the online store and
							the menu boards. Set any item to Off, Auto or Always.
						</p>
					</li>
					<li
						style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
					>
						<span style="color: #B5761A"
							><svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="square"
								stroke-linejoin="miter"
								aria-hidden="true"
								style="flex: none"
								><path d="M4 7 H20 V19 H4 Z"></path><path d="M4 11 H20 M9 7 V19 M15 7 V19"
								></path></svg
							></span
						>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
						>
							Restocks and suppliers
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Draft purchase orders when stock drops under par, log deliveries with their receipts,
							and see which prices went up.
						</p>
					</li>
				</ul>
				<div
					aria-hidden="true"
					style="height: 16px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border: 3px solid #2C2430; box-shadow: 0 6px 0 rgba(44, 36, 48, 0.25)"
				></div>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/13-cookery-three-batches-progress-along.webp"
							alt="Cookery: three batches in progress along the top, and component cards below showing how much is on hand against par."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Cookery: what to make next
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/14-recipe-brioche-buns-batch-size.webp"
							alt="A recipe for brioche buns: batch size, ingredients taken out of inventory, five steps with timers, and a Start guided cooking button."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						A recipe, step by step
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/15-transform-screen-cards-freezing-thawing.webp"
							alt="The Transform screen with cards for freezing and thawing patties, pierogi and pulled pork."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Freeze and thaw
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/16-availability-screen-every-dish-how.webp"
							alt="The Availability screen: every dish with how many can still be made and a switch for Off, Auto or Always."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Availability: off, auto or always
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/17-admin-ingredients-page-cost-diet.webp"
							alt="The admin's Ingredients page: cost, diet flags and stock on hand against par for each ingredient, grouped by kind."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Ingredients with cost and stock
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/18-admin-restocks-page-money-way.webp"
							alt="The admin's Restocks page: money on the way, spend in the last 30 days, price changes, and purchase orders by supplier."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Restocks and price changes
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
					id="pv-window"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The front window
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #2C2430; max-width: 62ch"
			>
				Your own online store. No marketplace, and no cut of every sale.
			</p>
			<div
				aria-hidden="true"
				style="height: 22px; background: repeating-linear-gradient(90deg, #F4A93B 0 28px, #FFF6DC 28px 56px); border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
			></div>
			<ul
				style="margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 16px"
			>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Pickup and delivery
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Customers order from your menus, pick a time, and pay by card. Hours, cutoffs and a
						pause button are enforced on the server.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						It installs as an app
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						The store is a PWA. Customers add it to their home screen and get push notifications as
						their order moves along.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Accounts worth having
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Order history, one-tap reorder, receipts, saved cards and addresses.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Follow the order
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						A live tracking page shows received, cooking, on the way and delivered, with an arrival
						time.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Your colours, your words
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Every page is drawn by a theme. Edit colours, fonts, images and sections in the admin
						and preview before you publish.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						More than the menu
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Gift cards, catering quotes, events, and services like rooms and staff sit alongside the
						food.
					</p>
				</li>
			</ul>
			<div
				style="background: #FFFBEA; border: 3px solid #2C2430; padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px; max-width: 760px"
			>
				<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px">
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Store themes
					</h3>
					<span
						style="font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; background: #EBDDB8; color: #5A4028; padding: 4px 8px"
						>Work in progress</span
					>
				</div>
				<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
					Today there is one built-in theme, Neighbourhood. The plan is for designers to publish
					themes that any store can install. Sharing and installing themes is still being built.
				</p>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure
					style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px; grid-column: 1 / -1;"
				>
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/19-online-store-home-page-corner.webp"
							alt="The online store's home page for Corner Kitchen: a headline, Order for pickup and Get it delivered buttons, and illustrations of a grain bowl, fries and an iced coffee."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The store your customers see
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/20-store-menu-page-grill-dishes.webp"
							alt="The store's menu page: Grill dishes as cards with drawings and prices, and an order summary on the right."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Browse the menu
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/21-dish-sheet-smash-burger-choices.webp"
							alt="A dish sheet for a smash burger with choices for bun, add-ons, patty temperature and things to leave off."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Make it how you like it
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/22-order-tracking-page-that-says.webp"
							alt="An order tracking page that says It's coming, with steps for received, cooking, on the way and delivered, an arrival time and the receipt."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Track an order live
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/23-customer-account-order-that-cooking.webp"
							alt="A customer's account: an order that is cooking now, past orders, and one order's receipt with Reorder these items."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Order history and reorder
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/24-admin-online-store-page-settings.webp"
							alt="The admin's Online store page: settings for the Neighbourhood theme on the left and a live preview of the store on the right."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Edit the theme with a live preview
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/25-admin-store-hours-page-weekly.webp"
							alt="The admin's Store hours page: weekly hours by day, whether the store is open right now, a pause for online orders, and order cutoffs."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Hours, cutoffs and pause
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
		style="background: repeating-linear-gradient(90deg, #1F4A3A 0 30px, #1A3F31 30px 33px); padding: 30px 16px 36px"
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
					id="pv-door"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The back door
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #F6E9D2; max-width: 62ch"
			>
				A courier app for your own drivers.
			</p>
			<div style="display: flex; flex-wrap: wrap; gap: 26px 40px; align-items: center">
				<div
					style="flex: 1 1 320px; min-width: 0; display: flex; flex-direction: column; gap: 16px"
				>
					<ol style="margin: 0; padding: 0; list-style: none; display: grid; gap: 14px">
						<li style="display: flex; gap: 12px; align-items: flex-start">
							<span
								aria-hidden="true"
								style="flex: none; width: 34px; height: 34px; background: #F4A93B; color: #14261F; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 19px; font-weight: 700; display: flex; align-items: center; justify-content: center"
								>1</span
							>
							<div>
								<h3
									style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
								>
									Start a shift
								</h3>
								<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #F1E6CF">
									Couriers sign in on their phone and say how they are travelling: on foot, by bike
									or by car.
								</p>
							</div>
						</li>
						<li style="display: flex; gap: 12px; align-items: flex-start">
							<span
								aria-hidden="true"
								style="flex: none; width: 34px; height: 34px; background: #F4A93B; color: #14261F; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 19px; font-weight: 700; display: flex; align-items: center; justify-content: center"
								>2</span
							>
							<div>
								<h3
									style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
								>
									Accept or pass
								</h3>
								<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #F1E6CF">
									New deliveries go to couriers first. The kitchen only sees a delivery order once
									someone has taken it.
								</p>
							</div>
						</li>
						<li style="display: flex; gap: 12px; align-items: flex-start">
							<span
								aria-hidden="true"
								style="flex: none; width: 34px; height: 34px; background: #F4A93B; color: #14261F; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 19px; font-weight: 700; display: flex; align-items: center; justify-content: center"
								>3</span
							>
							<div>
								<h3
									style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
								>
									Follow the steps
								</h3>
								<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #F1E6CF">
									Pick up, head out, arrive. Each step updates the customer's tracking page.
								</p>
							</div>
						</li>
						<li style="display: flex; gap: 12px; align-items: flex-start">
							<span
								aria-hidden="true"
								style="flex: none; width: 34px; height: 34px; background: #F4A93B; color: #14261F; border: 3px solid #2C2430; font-family: var(--font-pixel); font-size: 19px; font-weight: 700; display: flex; align-items: center; justify-content: center"
								>4</span
							>
							<div>
								<h3
									style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
								>
									Snap a proof photo
								</h3>
								<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #F1E6CF">
									A photo at the door closes the delivery.
								</p>
							</div>
						</li>
					</ol>
					<p style="margin: 0; font-size: 15px; line-height: 1.6; color: #F1E6CF; max-width: 60ch">
						Travel times come from your own OpenStreetMap routing, using Valhalla and Nominatim, so
						there is no maps bill. The courier app installs on a phone and uses web push for new
						deliveries.
					</p>
				</div>
				<div
					style="flex: 0 1 auto; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; align-items: flex-start; color: #FFF6DC"
				>
					<figure
						style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 8px"
					>
						<div
							style="background: #2C2430; padding: 8px 6px 12px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
						>
							<img
								src="/img/pavilion/26-courier-app-phone-shift-cycling.webp"
								alt="The courier app on a phone: on shift and cycling, with two orders looking for a courier, each with distance, items and how long ago it was placed."
								loading="lazy"
								style="display: block; width: 146px; height: 292px; image-rendering: auto; background: #E8EFEA"
							/>
						</div>
						<figcaption
							style="max-width: 158px; font-size: 12.5px; font-weight: 700; line-height: 1.35; text-align: center; color: inherit"
						>
							Orders looking for a courier
						</figcaption>
					</figure>
					<figure
						style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 8px"
					>
						<div
							style="background: #2C2430; padding: 8px 6px 12px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
						>
							<img
								src="/img/pavilion/27-delivery-order-courier-app-map.webp"
								alt="A delivery order in the courier app: a map, travel times on foot, by bike and by car, the address and a delivery note, with Pass and Accept delivery buttons."
								loading="lazy"
								style="display: block; width: 146px; height: 292px; image-rendering: auto; background: #E8EFEA"
							/>
						</div>
						<figcaption
							style="max-width: 158px; font-size: 12.5px; font-weight: 700; line-height: 1.35; text-align: center; color: inherit"
						>
							Accept or pass
						</figcaption>
					</figure>
					<figure
						style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 8px"
					>
						<div
							style="background: #2C2430; padding: 8px 6px 12px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
						>
							<img
								src="/img/pavilion/28-customer-tracking-page-phone-showing.webp"
								alt="The customer's tracking page on a phone, showing the order received and cooking with an arrival time."
								loading="lazy"
								style="display: block; width: 146px; height: 292px; image-rendering: auto; background: #E8EFEA"
							/>
						</div>
						<figcaption
							style="max-width: 158px; font-size: 12.5px; font-weight: 700; line-height: 1.35; text-align: center; color: inherit"
						>
							What the customer sees
						</figcaption>
					</figure>
				</div>
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
					id="pv-walls"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The walls
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #FFF6DC; max-width: 62ch"
			>
				Every TV in the building, laid out by you.
			</p>
			<ul
				style="margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px"
			>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						A screen builder
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Lay widgets out on a grid: order lists, weather, clocks, QR codes, promo slides, the
						song that is playing, and an order-ready pop-up.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Ten menu-board templates
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Five for landscape TVs and five for portrait. Pick a menu, pick a template, and choose
						what to feature. Sold-out dishes update on the board by themselves.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Plug in a Raspberry Pi
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						A small computer behind the TV pairs with a six-digit code and shows whichever screen
						you pick from the admin.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Landscape or portrait
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Every screen is built for one or the other, and staff screens work both ways.
					</p>
				</li>
			</ul>
			<div
				style="display: flex; flex-wrap: wrap; gap: 26px 30px; align-items: flex-end; justify-content: center; padding-top: 6px"
			>
				<div style="flex: 1 1 420px; min-width: 0; max-width: 820px">
					<figure
						style="margin: 0; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 0"
					>
						<div
							style="width: 100%; box-sizing: border-box; background: #2C2430; padding: 10px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
						>
							<img
								src="/img/pavilion/29-order-board-landscape-tv-orders.webp"
								alt="An order board on a landscape TV: orders being prepared, one ready for pickup, a promo for a lunch combo, the clock and the song that is playing."
								loading="lazy"
								style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; image-rendering: auto; background: #E8EFEA"
							/>
						</div>
						<div aria-hidden="true" style="width: 14px; height: 18px; background: #2C2430"></div>
						<div aria-hidden="true" style="width: 120px; height: 10px; background: #2C2430"></div>
						<figcaption
							style="margin-top: 10px; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
						>
							An order board, built from widgets
						</figcaption>
					</figure>
				</div>
				<div style="flex: 0 0 210px">
					<figure
						style="margin: 0 auto; width: 100%; max-width: 210px; display: flex; flex-direction: column; align-items: center; gap: 0"
					>
						<div
							style="width: 100%; box-sizing: border-box; background: #2C2430; padding: 8px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
						>
							<img
								src="/img/pavilion/30-pickup-board-portrait-tv-orders.webp"
								alt="A pickup board on a portrait TV: orders being prepared, one ready for pickup, the clock, the weather and a promo for a maple oat latte."
								loading="lazy"
								style="display: block; width: 100%; height: auto; aspect-ratio: 9 / 16; image-rendering: auto; background: #E8EFEA"
							/>
						</div>
						<figcaption
							style="margin-top: 10px; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
						>
							The same idea on a portrait TV
						</figcaption>
					</figure>
				</div>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/31-screen-builder-admin-preview-order.webp"
							alt="The screen builder in the admin: a preview of the order board and its layout tree of rows, columns and widgets."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The screen builder
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/32-admin-devices-page-registered-computers.webp"
							alt="The admin's Devices page: registered computers, visual dongles plugged into TVs, and kiosk links for the register, kitchen display and time clock."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Devices and TV dongles
					</figcaption>
				</figure>
			</div>
			<h3
				style="margin: 10px 0 0; font-family: var(--font-pixel); font-size: 22px; font-weight: 600; color: #FFF6DC"
			>
				Ten menu boards, one menu
			</h3>
			<p style="margin: 0; font-size: 15px; line-height: 1.6; color: #F1E6CF; max-width: 68ch">
				The same lunch menu in every template. Five are made for a TV on its side and five for a TV
				hung upright. Change the menu once and every board follows.
			</p>
			<h4
				style="margin: 4px 0 0; font-size: 13px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #D9CDB4"
			>
				For landscape TVs
			</h4>
			<ul
				style="margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); gap: 16px 14px"
			>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/33-neon-menu-board-template-showing.webp"
							alt="The Neon menu-board template showing Corner Kitchen's lunch menu on a landscape screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Neon</span
					>
				</li>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/34-departures-menu-board-template-showing.webp"
							alt="The Departures menu-board template showing Corner Kitchen's lunch menu on a landscape screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Departures</span
					>
				</li>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/35-letterboard-menu-board-template-showing.webp"
							alt="The Letterboard menu-board template showing Corner Kitchen's lunch menu on a landscape screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Letterboard</span
					>
				</li>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/36-triptych-menu-board-template-showing.webp"
							alt="The Triptych menu-board template showing Corner Kitchen's lunch menu on a landscape screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Triptych</span
					>
				</li>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/37-carousel-menu-board-template-showing.webp"
							alt="The Carousel menu-board template showing Corner Kitchen's lunch menu on a landscape screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Carousel</span
					>
				</li>
			</ul>
			<h4
				style="margin: 8px 0 0; font-size: 13px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #D9CDB4"
			>
				For portrait TVs
			</h4>
			<ul
				style="margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px 14px; max-width: 760px"
			>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/38-showcase-menu-board-template-showing.webp"
							alt="The Showcase menu-board template showing Corner Kitchen's lunch menu on a portrait screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 9 / 16; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Showcase</span
					>
				</li>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/39-chalkboard-menu-board-template-showing.webp"
							alt="The Chalkboard menu-board template showing Corner Kitchen's lunch menu on a portrait screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 9 / 16; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Chalkboard</span
					>
				</li>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/40-editorial-menu-board-template-showing.webp"
							alt="The Editorial menu-board template showing Corner Kitchen's lunch menu on a portrait screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 9 / 16; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Editorial</span
					>
				</li>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/41-grid-menu-board-template-showing.webp"
							alt="The Grid menu-board template showing Corner Kitchen's lunch menu on a portrait screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 9 / 16; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Grid</span
					>
				</li>
				<li
					style="min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: stretch"
				>
					<div
						style="background: #2C2430; padding: 5px; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.5)"
					>
						<img
							src="/img/pavilion/42-poster-menu-board-template-showing.webp"
							alt="The Poster menu-board template showing Corner Kitchen's lunch menu on a portrait screen."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 9 / 16; image-rendering: auto; background: #17121B"
						/>
					</div>
					<span
						style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600; line-height: 1.2; text-align: center; color: #FFF6DC"
						>Poster</span
					>
				</li>
			</ul>
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
					id="pv-jukebox"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The jukebox
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #2C2430; max-width: 62ch"
			>
				Music for the room, and a way to talk across it.
			</p>
			<div
				style="background: #17121B; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 16px 18px 12px"
			>
				<div
					aria-hidden="true"
					style="display: flex; align-items: flex-end; gap: 6px; height: 42px; padding-bottom: 10px; border-bottom: 3px solid #F4A93B"
				>
					<span style="width: 10px; height: 14px; background: #F4A93B"></span><span
						style="width: 10px; height: 26px; background: #F4A93B"
					></span><span style="width: 10px; height: 38px; background: #FFD680"></span><span
						style="width: 10px; height: 22px; background: #F4A93B"
					></span><span style="width: 10px; height: 32px; background: #FFD680"></span><span
						style="width: 10px; height: 18px; background: #F4A93B"
					></span><span style="width: 10px; height: 40px; background: #FFD680"></span><span
						style="width: 10px; height: 28px; background: #F4A93B"
					></span><span style="width: 10px; height: 12px; background: #F4A93B"></span><span
						style="width: 10px; height: 34px; background: #FFD680"
					></span><span style="width: 10px; height: 20px; background: #F4A93B"></span><span
						style="width: 10px; height: 30px; background: #F4A93B"
					></span>
				</div>
				<ol style="margin: 0; padding: 0; list-style: none">
					<li
						style="display: grid; grid-template-columns: 34px 1fr; gap: 4px 12px; padding: 10px 0; border-bottom: 2px solid #3A2F3E"
					>
						<span
							aria-hidden="true"
							style="font-family: var(--font-pixel); font-size: 20px; font-weight: 700; color: #F4A93B"
							>01</span
						>
						<div>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
							>
								Your own music library
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #D9CDB4">
								Upload songs, sort them into playlists, and see what is missing tags.
							</p>
						</div>
					</li>
					<li
						style="display: grid; grid-template-columns: 34px 1fr; gap: 4px 12px; padding: 10px 0; border-bottom: 2px solid #3A2F3E"
					>
						<span
							aria-hidden="true"
							style="font-family: var(--font-pixel); font-size: 20px; font-weight: 700; color: #F4A93B"
							>02</span
						>
						<div>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
							>
								Radio-style channels
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #D9CDB4">
								Every screen on a channel plays the same song at the same moment, so the dining room
								and the patio stay in step or play different things.
							</p>
						</div>
					</li>
					<li
						style="display: grid; grid-template-columns: 34px 1fr; gap: 4px 12px; padding: 10px 0; border-bottom: 2px solid #3A2F3E"
					>
						<span
							aria-hidden="true"
							style="font-family: var(--font-pixel); font-size: 20px; font-weight: 700; color: #F4A93B"
							>03</span
						>
						<div>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
							>
								Push to talk
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #D9CDB4">
								Voice channels work like walkie-talkies between screens. Hold the button and speak.
							</p>
						</div>
					</li>
					<li
						style="display: grid; grid-template-columns: 34px 1fr; gap: 4px 12px; padding: 10px 0; border-bottom: 2px solid #3A2F3E"
					>
						<span
							aria-hidden="true"
							style="font-family: var(--font-pixel); font-size: 20px; font-weight: 700; color: #F4A93B"
							>04</span
						>
						<div>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
							>
								Order-ready calls
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #D9CDB4">
								Spoken announcements call out names when orders are ready, and the music ducks
								quietly underneath.
							</p>
						</div>
					</li>
				</ol>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/43-music-channel-called-lobby-music.webp"
							alt="A music channel called Lobby music: the song playing now, playback controls and the queue."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						A music channel
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/44-voice-channel-called-order-calls.webp"
							alt="A voice channel called Order calls with a large Hold to talk button and a chime button."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Push to talk
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/45-admin-music-library-all-songs.webp"
							alt="The admin's music Library: all songs with album, playlists and length, and playlists down the side."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The music library
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
					id="pv-banquet"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The banquet room
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #2C2430; max-width: 62ch"
			>
				Catering, from the first quote to the last chafing dish.
			</p>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; align-items: start"
			>
				<div
					style="background: #FFFBEA; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 18px 18px 6px"
				>
					<ol style="margin: 0; padding: 0; list-style: none">
						<li
							style="position: relative; padding: 0 0 16px 30px; border-left: 3px solid #2C2430; margin-left: 9px"
						>
							<span
								aria-hidden="true"
								style="position: absolute; left: -11px; top: 2px; width: 14px; height: 14px; background: #F4A93B; border: 3px solid #2C2430"
							></span>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
							>
								The customer builds a quote
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								They pick dishes and services, a date, and pickup or delivery. Notice periods and
								minimums are checked as they go.
							</p>
						</li>
						<li
							style="position: relative; padding: 0 0 16px 30px; border-left: 3px solid #2C2430; margin-left: 9px"
						>
							<span
								aria-hidden="true"
								style="position: absolute; left: -11px; top: 2px; width: 14px; height: 14px; background: #F4A93B; border: 3px solid #2C2430"
							></span>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
							>
								You answer
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Accept it, or propose changes. The customer accepts or declines, and it can go back
								and forth.
							</p>
						</li>
						<li
							style="position: relative; padding: 0 0 16px 30px; border-left: 3px solid #2C2430; margin-left: 9px"
						>
							<span
								aria-hidden="true"
								style="position: absolute; left: -11px; top: 2px; width: 14px; height: 14px; background: #F4A93B; border: 3px solid #2C2430"
							></span>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
							>
								Every version is kept
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Nobody loses track of what was agreed. Both sides see the same history.
							</p>
						</li>
						<li
							style="position: relative; padding: 0 0 16px 30px; border-left: 3px solid #2C2430; margin-left: 9px"
						>
							<span
								aria-hidden="true"
								style="position: absolute; left: -11px; top: 2px; width: 14px; height: 14px; background: #F4A93B; border: 3px solid #2C2430"
							></span>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
							>
								Charged on acceptance
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								The card on file is only charged once both sides agree.
							</p>
						</li>
						<li
							style="position: relative; padding: 0 0 16px 30px; border-left: 3px solid #2C2430; margin-left: 9px"
						>
							<span
								aria-hidden="true"
								style="position: absolute; left: -11px; top: 2px; width: 14px; height: 14px; background: #F4A93B; border: 3px solid #2C2430"
							></span>
							<h3
								style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
							>
								Deposits for equipment
							</h3>
							<p style="margin: 3px 0 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
								Holds for rented equipment are placed close to the event and released after.
							</p>
						</li>
					</ol>
				</div>
				<div style="display: flex; flex-direction: column; gap: 14px">
					<div
						style="background: #1F4A3A; color: #F6E9D2; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 8px"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 22px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
						>
							Catering prices per dish
						</h3>
						<p style="margin: 0; font-size: 15px; line-height: 1.55">
							Set a minimum order and price breaks by quantity on any dish, and see the food cost at
							each break.
						</p>
					</div>
					<div
						style="background: #1F4A3A; color: #F6E9D2; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 8px"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 22px; font-weight: 600; line-height: 1.2; color: #FFF6DC"
						>
							Services, not just food
						</h3>
						<p style="margin: 0; font-size: 15px; line-height: 1.55">
							Sell staffing by the hour, equipment rental by the day, a room, or a class. Customers
							add them to a catering request.
						</p>
					</div>
				</div>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/46-store-catering-quote-builder-rules.webp"
							alt="The store's catering quote builder: the rules for notice, minimums and dates, and a form for the event beside a running quote."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Customers build a quote
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/47-admin-catering-page-new-request.webp"
							alt="The admin's Catering page: a new request for a birthday with its date, contact, card on file and note, and buttons to reject, propose changes, or accept and charge."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Accept, or propose changes
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/48-admin-services-page-staffing-hour.webp"
							alt="The admin's Services page: staffing by the hour and equipment rental by the day, with how often each was booked."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Staff, equipment and rooms
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
		style="background: repeating-linear-gradient(90deg, #1F4A3A 0 30px, #1A3F31 30px 33px); padding: 30px 16px 36px"
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
					id="pv-shelf"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The gift shelf
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #F6E9D2; max-width: 62ch"
			>
				Gift cards, staff cards and discounts.
			</p>
			<div>
				<ul
					style="margin: 0; padding: 0 10px; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; align-items: end"
				>
					<li
						aria-hidden="true"
						style="background: #1F4A3A; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 10px 12px; min-height: 112px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px"
					>
						<div
							style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px"
						>
							<span style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600"
								>Classic</span
							><svg
								viewBox="0 0 12 12"
								width="60"
								height="60"
								shape-rendering="crispEdges"
								aria-hidden="true"
								style="flex: none; display: block"
								><rect x="5" y="1" width="2" height="1" fill="#F4A93B"></rect><rect
									x="5"
									y="2"
									width="2"
									height="1"
									fill="#F4A93B"
								></rect><rect x="4" y="3" width="4" height="1" fill="#F4A93B"></rect><rect
									x="2"
									y="4"
									width="3"
									height="1"
									fill="#F4A93B"
								></rect><rect x="5" y="4" width="1" height="1" fill="#FFD680"></rect><rect
									x="6"
									y="4"
									width="4"
									height="1"
									fill="#F4A93B"
								></rect><rect x="1" y="5" width="2" height="1" fill="#F4A93B"></rect><rect
									x="3"
									y="5"
									width="1"
									height="1"
									fill="#FFD680"
								></rect><rect x="4" y="5" width="7" height="1" fill="#F4A93B"></rect><rect
									x="1"
									y="6"
									width="10"
									height="1"
									fill="#F4A93B"
								></rect><rect x="0" y="7" width="12" height="1" fill="#F4A93B"></rect><rect
									x="0"
									y="9"
									width="12"
									height="1"
									fill="#F4A93B"
								></rect></svg
							>
						</div>
						<span
							style="font-family: var(--font-pixel); font-size: 26px; font-weight: 700; line-height: 1"
							>$50</span
						>
					</li>
					<li
						aria-hidden="true"
						style="background: #E98BB0; color: #14261F; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 10px 12px; min-height: 112px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px"
					>
						<div
							style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px"
						>
							<span style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600"
								>Birthday</span
							><svg
								viewBox="0 0 12 12"
								width="60"
								height="60"
								shape-rendering="crispEdges"
								aria-hidden="true"
								style="flex: none; display: block"
								><rect x="5" y="0" width="1" height="1" fill="#FFD680"></rect><rect
									x="5"
									y="1"
									width="1"
									height="1"
									fill="#F4A93B"
								></rect><rect x="5" y="2" width="1" height="1" fill="#FFF6DC"></rect><rect
									x="5"
									y="3"
									width="1"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="2" y="4" width="8" height="1" fill="#FFF6DC"></rect><rect
									x="2"
									y="5"
									width="1"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="3" y="5" width="1" height="1" fill="#A8386A"></rect><rect
									x="4"
									y="5"
									width="2"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="6" y="5" width="1" height="1" fill="#A8386A"></rect><rect
									x="7"
									y="5"
									width="2"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="9" y="5" width="1" height="1" fill="#A8386A"></rect><rect
									x="2"
									y="6"
									width="8"
									height="1"
									fill="#A8386A"
								></rect><rect x="1" y="7" width="10" height="1" fill="#FFF6DC"></rect><rect
									x="1"
									y="8"
									width="1"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="2" y="8" width="1" height="1" fill="#A8386A"></rect><rect
									x="3"
									y="8"
									width="2"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="5" y="8" width="1" height="1" fill="#A8386A"></rect><rect
									x="6"
									y="8"
									width="2"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="8" y="8" width="1" height="1" fill="#A8386A"></rect><rect
									x="9"
									y="8"
									width="2"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="1" y="9" width="10" height="1" fill="#A8386A"></rect><rect
									x="1"
									y="10"
									width="10"
									height="1"
									fill="#A8386A"
								></rect><rect x="0" y="11" width="12" height="1" fill="#5E4630"></rect></svg
							>
						</div>
						<span
							style="font-family: var(--font-pixel); font-size: 26px; font-weight: 700; line-height: 1"
							>$25</span
						>
					</li>
					<li
						aria-hidden="true"
						style="background: #E3A85C; color: #14261F; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 10px 12px; min-height: 112px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px"
					>
						<div
							style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px"
						>
							<span style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600"
								>Thank you</span
							><svg
								viewBox="0 0 12 12"
								width="60"
								height="60"
								shape-rendering="crispEdges"
								aria-hidden="true"
								style="flex: none; display: block"
								><rect x="4" y="0" width="2" height="1" fill="#C0392B"></rect><rect
									x="7"
									y="0"
									width="2"
									height="1"
									fill="#C0392B"
								></rect><rect x="3" y="1" width="7" height="1" fill="#C0392B"></rect><rect
									x="3"
									y="2"
									width="3"
									height="1"
									fill="#C0392B"
								></rect><rect x="6" y="2" width="1" height="1" fill="#FFD680"></rect><rect
									x="7"
									y="2"
									width="3"
									height="1"
									fill="#C0392B"
								></rect><rect x="3" y="3" width="7" height="1" fill="#C0392B"></rect><rect
									x="4"
									y="4"
									width="5"
									height="1"
									fill="#C0392B"
								></rect><rect x="5" y="5" width="2" height="1" fill="#1F4A3A"></rect><rect
									x="2"
									y="6"
									width="2"
									height="1"
									fill="#1F4A3A"
								></rect><rect x="5" y="6" width="2" height="1" fill="#1F4A3A"></rect><rect
									x="3"
									y="7"
									width="4"
									height="1"
									fill="#1F4A3A"
								></rect><rect x="8" y="7" width="2" height="1" fill="#1F4A3A"></rect><rect
									x="5"
									y="8"
									width="4"
									height="1"
									fill="#1F4A3A"
								></rect><rect x="5" y="9" width="2" height="1" fill="#1F4A3A"></rect><rect
									x="5"
									y="10"
									width="2"
									height="1"
									fill="#1F4A3A"
								></rect></svg
							>
						</div>
						<span
							style="font-family: var(--font-pixel); font-size: 26px; font-weight: 700; line-height: 1"
							>$25</span
						>
					</li>
					<li
						aria-hidden="true"
						style="background: #6B4423; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 10px 12px; min-height: 112px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px"
					>
						<div
							style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px"
						>
							<span style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600"
								>Coffee lover</span
							><svg
								viewBox="0 0 12 12"
								width="60"
								height="60"
								shape-rendering="crispEdges"
								aria-hidden="true"
								style="flex: none; display: block"
								><rect x="3" y="0" width="1" height="1" fill="#E3C9A8"></rect><rect
									x="7"
									y="0"
									width="1"
									height="1"
									fill="#E3C9A8"
								></rect><rect x="4" y="1" width="1" height="1" fill="#E3C9A8"></rect><rect
									x="8"
									y="1"
									width="1"
									height="1"
									fill="#E3C9A8"
								></rect><rect x="3" y="2" width="1" height="1" fill="#E3C9A8"></rect><rect
									x="7"
									y="2"
									width="1"
									height="1"
									fill="#E3C9A8"
								></rect><rect x="1" y="4" width="8" height="1" fill="#FFF6DC"></rect><rect
									x="1"
									y="5"
									width="1"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="2" y="5" width="6" height="1" fill="#3D2414"></rect><rect
									x="8"
									y="5"
									width="3"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="1" y="6" width="8" height="1" fill="#FFF6DC"></rect><rect
									x="10"
									y="6"
									width="1"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="1" y="7" width="8" height="1" fill="#FFF6DC"></rect><rect
									x="10"
									y="7"
									width="1"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="1" y="8" width="10" height="1" fill="#FFF6DC"></rect><rect
									x="2"
									y="9"
									width="6"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="0" y="11" width="10" height="1" fill="#FFF6DC"></rect></svg
							>
						</div>
						<span
							style="font-family: var(--font-pixel); font-size: 26px; font-weight: 700; line-height: 1"
							>$20</span
						>
					</li>
					<li
						aria-hidden="true"
						style="background: #C0392B; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 3px 3px 0 rgba(10, 12, 24, 0.45); padding: 10px 12px; min-height: 112px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px"
					>
						<div
							style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px"
						>
							<span style="font-family: var(--font-pixel); font-size: 15px; font-weight: 600"
								>Holiday</span
							><svg
								viewBox="0 0 12 12"
								width="60"
								height="60"
								shape-rendering="crispEdges"
								aria-hidden="true"
								style="flex: none; display: block"
								><rect x="5" y="0" width="2" height="1" fill="#FFD680"></rect><rect
									x="5"
									y="1"
									width="2"
									height="1"
									fill="#FFD680"
								></rect><rect x="4" y="2" width="4" height="1" fill="#FFF6DC"></rect><rect
									x="3"
									y="3"
									width="6"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="4" y="4" width="4" height="1" fill="#FFF6DC"></rect><rect
									x="3"
									y="5"
									width="2"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="5" y="5" width="1" height="1" fill="#F4A93B"></rect><rect
									x="6"
									y="5"
									width="3"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="2" y="6" width="8" height="1" fill="#FFF6DC"></rect><rect
									x="3"
									y="7"
									width="6"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="2" y="8" width="3" height="1" fill="#FFF6DC"></rect><rect
									x="5"
									y="8"
									width="1"
									height="1"
									fill="#F4A93B"
								></rect><rect x="6" y="8" width="4" height="1" fill="#FFF6DC"></rect><rect
									x="1"
									y="9"
									width="10"
									height="1"
									fill="#FFF6DC"
								></rect><rect x="5" y="10" width="2" height="1" fill="#3D2414"></rect><rect
									x="5"
									y="11"
									width="2"
									height="1"
									fill="#3D2414"
								></rect></svg
							>
						</div>
						<span
							style="font-family: var(--font-pixel); font-size: 26px; font-weight: 700; line-height: 1"
							>$100</span
						>
					</li>
				</ul>
				<div
					aria-hidden="true"
					style="height: 16px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border: 3px solid #2C2430; box-shadow: 0 6px 0 rgba(10, 12, 24, 0.35)"
				></div>
			</div>
			<ul
				style="margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 16px"
			>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Gift cards
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Sell them on the register or online, with designs that come and go by season. Card
						numbers are never stored, only a hash and the last four digits.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Staff cards
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Give staff a card that refills itself on a schedule, like a shift meal, or one that
						takes a staff discount. They scan it at the register.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Offers and coupons
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Automatic offers, coupon codes, happy-hour windows and first-order deals, each with its
						own days, times and limits.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Rules that make sense
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Choose where a discount works: in store, pickup or delivery. Decide what stacks, and see
						how each one performed.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Know your regulars
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Customer profiles show lifetime spend, average order and what they usually get, with
						notes only staff see.
					</p>
				</li>
			</ul>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/49-store-gift-card-page-classic.webp"
							alt="The store's gift card page: a classic card for $50, design choices, and a form to send it as a gift."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Buy a gift card online
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/50-admin-gift-card-designs-page.webp"
							alt="The admin's Gift card designs page: designs like Classic, Birthday and Holiday, the amounts buyers pick from, and how each design sells."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Seasonal designs
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/51-admin-staff-cards-page-shift.webp"
							alt="The admin's Staff cards page: a shift meal card that refills every day, a staff discount card and a manager comp card, with a preview at the register."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Staff cards that refill themselves
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/52-admin-discounts-page-happy-hour.webp"
							alt="The admin's Discounts page: a happy hour discount with the days and hours it runs, a checkout preview, and how often it was applied."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Discounts with days and hours
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
					id="pv-staff"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The staff room
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #2C2430; max-width: 62ch"
			>
				Scheduling and a time clock for the whole team.
			</p>
			<div style="display: flex; flex-wrap: wrap; gap: 22px 32px; align-items: flex-start">
				<div
					style="flex: 1 1 360px; min-width: 0; background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 9px 9px 0"
				>
					<div
						style="background: #2C3F39; border: 3px solid #2C2430; padding: 20px 20px 24px; color: #F4F1E4"
					>
						<h3
							style="margin: 0 0 14px; font-family: var(--font-pixel); font-size: 28px; font-weight: 600; line-height: 1.15"
						>
							This week
						</h3>
						<ul
							style="margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; font-family: var(--font-pixel); font-size: 18px; font-weight: 400; line-height: 1.35"
						>
							<li style="display: flex; gap: 12px; align-items: baseline">
								<span
									aria-hidden="true"
									style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
								></span><span>Build the week's schedule by dragging shifts</span>
							</li>
							<li style="display: flex; gap: 12px; align-items: baseline">
								<span
									aria-hidden="true"
									style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
								></span><span>Staffing pars say how many people each role needs, hour by hour</span>
							</li>
							<li style="display: flex; gap: 12px; align-items: baseline">
								<span
									aria-hidden="true"
									style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
								></span><span>Staff set their availability and ask for time off</span>
							</li>
							<li style="display: flex; gap: 12px; align-items: baseline">
								<span
									aria-hidden="true"
									style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
								></span><span>Shift swaps and giveaways go up for grabs</span>
							</li>
							<li style="display: flex; gap: 12px; align-items: baseline">
								<span
									aria-hidden="true"
									style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
								></span><span>A PIN time clock runs on a shared tablet</span>
							</li>
							<li style="display: flex; gap: 12px; align-items: baseline">
								<span
									aria-hidden="true"
									style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
								></span><span>Clocking in early needs a manager's OK</span>
							</li>
							<li style="display: flex; gap: 12px; align-items: baseline">
								<span
									aria-hidden="true"
									style="flex: none; width: 10px; height: 10px; background: #F4F1E4"
								></span><span>Roles describe the jobs; groups decide what each person can open</span
								>
							</li>
						</ul>
					</div>
					<div
						aria-hidden="true"
						style="height: 14px; display: flex; align-items: center; gap: 10px; padding: 0 14px"
					>
						<span style="width: 26px; height: 6px; background: #F4F1E4"></span><span
							style="width: 16px; height: 6px; background: #FFD680"
						></span><span style="width: 20px; height: 6px; background: #DDE6D3"></span>
					</div>
				</div>
				<div style="flex: none; margin: 0 auto; color: #2C2430">
					<figure
						style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 8px"
					>
						<div
							style="background: #2C2430; padding: 8px 6px 12px; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4)"
						>
							<img
								src="/img/pavilion/53-staff-member-shifts-page-phone.webp"
								alt="A staff member's Shifts page on a phone: the next shift today, hours scheduled this week, and upcoming shifts with Give away and Swap buttons."
								loading="lazy"
								style="display: block; width: 146px; height: 292px; image-rendering: auto; background: #E8EFEA"
							/>
						</div>
						<figcaption
							style="max-width: 158px; font-size: 12.5px; font-weight: 700; line-height: 1.35; text-align: center; color: inherit"
						>
							Staff see their shifts on their phone
						</figcaption>
					</figure>
				</div>
			</div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure
					style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px; grid-column: 1 / -1;"
				>
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/54-admin-shifts-page-week-days.webp"
							alt="The admin's Shifts page: a week of days along the top, coverage by role and hour, open shifts, and each person's shifts on a timeline."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The schedule, with coverage by role
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/55-shift-pars-page-friday-how.webp"
							alt="The Shift pars page for a Friday: how many cooks, cashiers, baristas and servers are needed in each hour."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Staffing pars, hour by hour
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/56-availability-requests-time-off-request.webp"
							alt="Availability requests: a time-off request with the shift it affects and choices for what to do with that shift."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Time off, availability and swaps
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/57-time-clock-who-clock-who.webp"
							alt="The time clock: who is on the clock, who is due in, and a keypad to clock in with a PIN."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The time clock
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/58-admin-groups-page-managers-group.webp"
							alt="The admin's Groups page: the Managers group with switches for which apps it can open and which actions it can take."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Groups and permissions
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
		style="background: repeating-linear-gradient(90deg, #1F4A3A 0 30px, #1A3F31 30px 33px); padding: 30px 16px 36px"
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
					id="pv-office"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The office
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #F6E9D2; max-width: 62ch"
			>
				The back office: menus, money and everything you set once.
			</p>
			<div
				style="background: #12241D; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(10, 12, 24, 0.5); padding: 8px"
			>
				<ul
					style="margin: 0; list-style: none; background: #FFFBEA; border: 3px solid #2C2430; border-left: 12px solid #F4A93B; padding: 6px 18px 10px"
				>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #1F4A3A"
						>
							Dashboard and reports
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Net sales, orders, average order and ticket time, live. Reports by day, as a table, a
							calendar or a CSV.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #1F4A3A"
						>
							Orders
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Every order with its timeline, payments and customer. Add a note, send a receipt, or
							refund.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #1F4A3A"
						>
							Menus
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Several menus with schedules and priorities: breakfast, lunch, happy hour, specials.
							Choose how each one looks on a menu board.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #1F4A3A"
						>
							Dishes and combos
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Prep time, the station it goes to, allergens, food cost against price, and what a
							combo saves the customer.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #1F4A3A"
						>
							Store hours and events
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Weekly hours with breaks, one-off events that open or close the store, and
							announcements to go with them.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #1F4A3A"
						>
							Payments
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Connect your own Square account from the admin. Each register pairs its own Terminal.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #1F4A3A"
						>
							Email and notifications
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Receipts, order updates and gift cards go out through listmonk. Push notifications
							switch on or off by kind.
						</p>
					</li>
					<li
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px 18px; padding: 11px 0; border-bottom: 3px dotted #D2C49C"
					>
						<h3
							style="margin: 0; font-family: var(--font-pixel); font-size: 18px; font-weight: 600; line-height: 1.3; color: #1F4A3A"
						>
							Devices
						</h3>
						<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
							Only registered devices can open the register and kitchen screens. Kiosk links make a
							tablet remember what it is for.
						</p>
					</li>
				</ul>
			</div>
			<div
				aria-hidden="true"
				style="height: 16px; background: repeating-linear-gradient(90deg, #7A5A3C 0 46px, #5E4630 46px 49px); border: 3px solid #2C2430; margin: -6px -6px 0"
			></div>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px 18px; padding-top: 6px"
			>
				<figure
					style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px; grid-column: 1 / -1;"
				>
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/59-admin-dashboard-net-sales-orders.webp"
							alt="The admin dashboard: net sales, orders, average order and average ticket time for today, and a chart of sales by hour against last week."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The dashboard
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/60-reports-month-net-sales-business.webp"
							alt="Reports for the month: net sales, business days, average per day, best day, and a row for each day."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Reports by day
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/61-one-order-admin-items-station.webp"
							alt="One order in the admin: its items by station, the total with a member discount and delivery fee, a timeline, and buttons to print or send the receipt or refund."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						An order, start to finish
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/62-admin-dishes-page-each-dish.webp"
							alt="The admin's Dishes page: each dish with its picture, allergens, food cost percentage, price and whether it is available."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Dishes with food cost
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/63-dish-editor-smash-burger-price.webp"
							alt="The dish editor for a smash burger: price, kitchen ticket name, prep time, station, catering price breaks, availability and allergens worked out from its ingredients."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						The dish editor
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/64-menu-editor-display-tab-row.webp"
							alt="The menu editor's Display tab: a row of menu-board templates to pick from and a live preview of the board."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Pick a menu-board look
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/65-admin-customers-page-customer-contact.webp"
							alt="The admin's Customers page: a customer's contact details, staff notes, lifetime spend, average order and recent orders."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Customers
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/66-admin-payments-page-connecting-store.webp"
							alt="The admin's Payments page for connecting the store's Square account, with the Terminals each register has paired."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Connect Square
					</figcaption>
				</figure>
				<figure style="margin: 0; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
					<div
						style="background: #7A5A3C; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 8px"
					>
						<img
							src="/img/pavilion/67-admin-languages-page-english-ukrainian.webp"
							alt="The admin's Languages page: English and Ukrainian fully translated, Cantonese partly, a default language, and a preview of the language picker."
							loading="lazy"
							style="display: block; width: 100%; height: auto; aspect-ratio: 1680 / 1050; image-rendering: auto; box-sizing: border-box; border: 3px solid #2C2430; background: #E8EFEA"
						/>
					</div>
					<figcaption
						style="align-self: center; padding: 4px 10px; background: #EBDDB8; border: 3px solid #2C2430; font-size: 13px; font-weight: 700; line-height: 1.35; color: #2C2430; text-align: center"
					>
						Turn languages on and off
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
					id="pv-cellar"
					style="margin: 0; padding: 8px 16px 10px; background: #7A5A3C; color: #FFF6DC; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); font-family: var(--font-pixel); font-size: 24px; font-weight: 700; line-height: 1.1"
				>
					The cellar
				</h2>
			</div>
			<p
				style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.55; color: #FFF6DC; max-width: 62ch"
			>
				What it is built on, and how to move in.
			</p>
			<ul
				style="margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px"
			>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<span style="color: #B5761A"
						><svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.2"
							stroke-linecap="square"
							stroke-linejoin="miter"
							aria-hidden="true"
							style="flex: none"><path d="M13 3 L6 13 H11 L10 21 L18 10 H13 Z"></path></svg
						></span
					>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Live everywhere
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						A new order, a dish selling out, a song skipping: every open screen hears about it at
						once over Server-Sent Events. Nothing polls.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<span style="color: #B5761A"
						><svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.2"
							stroke-linecap="square"
							stroke-linejoin="miter"
							aria-hidden="true"
							style="flex: none"
							><path d="M4 12 H20 M12 4 V20"></path><path d="M6 6 H18 V18 H6 Z"></path></svg
						></span
					>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Multilingual
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						English and Ukrainian are complete, and Cantonese is under way. Each person's language
						follows them across the store, their emails and their notifications.
					</p>
				</li>
				<li
					style="background: #FFFBEA; border: 3px solid #2C2430; padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 8px"
				>
					<span style="color: #B5761A"
						><svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.2"
							stroke-linecap="square"
							stroke-linejoin="miter"
							aria-hidden="true"
							style="flex: none"
							><rect x="6" y="11" width="12" height="9"></rect><path d="M8 11 V7 H16 V11"
							></path></svg
						></span
					>
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 600; line-height: 1.2; color: #2C2430"
					>
						Locked down by default
					</h3>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.5; color: #3B323D">
						Permissions go down to view, edit and delete on each admin page. Prices and totals are
						always worked out on the server, and only the server marks a payment paid.
					</p>
				</li>
			</ul>
			<p style="margin: 0; font-size: 15.5px; line-height: 1.6; color: #F1E6CF; max-width: 68ch">
				Pavilion is Django 6.1 on Python 3.12 or newer, with plain templates and vanilla JavaScript.
				There is no npm and no build step. It runs on PostgreSQL and Redis in production and on
				SQLite while you try it out.
			</p>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: 18px; align-items: start"
			>
				<div style="display: flex; flex-direction: column; gap: 10px; min-width: 0">
					<h3
						id="pv-start"
						style="margin: 0; font-family: var(--font-pixel); font-size: 22px; font-weight: 600; color: #FFF6DC"
					>
						Try it locally
					</h3>
					<div
						style="background: #17121B; border: 3px solid #6B5A4C; padding: 16px 18px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.8; color: #FFF6DC; overflow-x: auto; white-space: nowrap"
					>
						<div>
							<span style="color: #8CC66A">$</span> git clone https://github.com/Collert/Pavilion.git
							pavilion
						</div>
						<div><span style="color: #8CC66A">$</span> cd pavilion</div>
						<div><span style="color: #8CC66A">$</span> python -m venv venv</div>
						<div><span style="color: #8CC66A">$</span> source venv/bin/activate</div>
						<div>
							<span style="color: #8CC66A">$</span> pip install -r requirements.txt -r requirements-dev.txt
						</div>
						<div><span style="color: #8CC66A">$</span> cp pavilion/.env.example pavilion/.env</div>
						<div><span style="color: #8CC66A">$</span> python manage.py migrate</div>
						<div><span style="color: #8CC66A">$</span> python manage.py seed_demo</div>
						<div><span style="color: #8CC66A">$</span> python manage.py runserver</div>
					</div>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.55; color: #F1E6CF">
						Then open /apps/ on your machine. seed_demo fills in the Corner Kitchen demo with menus,
						orders and staff. Skip it and Pavilion opens a first-time setup screen that asks for
						your store's name, address, tax rate and time zone.
					</p>
				</div>
				<div style="display: flex; flex-direction: column; gap: 10px; min-width: 0">
					<h3
						style="margin: 0; font-family: var(--font-pixel); font-size: 22px; font-weight: 600; color: #FFF6DC"
					>
						Run it for real
					</h3>
					<div
						style="background: #17121B; border: 3px solid #6B5A4C; padding: 16px 18px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.8; color: #FFF6DC; overflow-x: auto; white-space: nowrap"
					>
						<div><span style="color: #8CC66A">$</span> cp pavilion/.env.example pavilion/.env</div>
						<div><span style="color: #8CC66A">$</span> docker compose up -d</div>
						<div>
							<span style="color: #8CC66A">$</span> docker compose exec web python manage.py setup_code
						</div>
					</div>
					<p style="margin: 0; font-size: 14.5px; line-height: 1.55; color: #F1E6CF">
						The compose file brings the web app, Postgres, Redis, a scheduler for the daily jobs,
						routing and address lookup. Put a TLS proxy in front. Most settings live in the admin,
						not in environment variables.
					</p>
					<div>
						<a
							href="https://github.com/Collert/Pavilion"
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
							Square
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Payments</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Terminals, online payments, saved cards and refunds, on your own account
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
							listmonk
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Email</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Transactional email, newsletters and event announcements
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
							Web Push
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Built in</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Order updates and courier alerts. The keys are generated for you
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
							Valhalla and Nominatim
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Self-hosted</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						OpenStreetMap routing and address lookup for deliveries
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
							weatherapi.com
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Optional</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						The weather widget on screens
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
							Gotenberg
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Optional</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Screenshots for the store app's install sheet
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
							Bugsink
						</h4>
						<span
							style="flex: none; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #5A4028"
							>Optional</span
						>
					</div>
					<p style="margin: 0; font-size: 14px; line-height: 1.45; color: #3B323D">
						Error reporting
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
						Photos and music in production
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
			style="max-width: 560px; margin: 0 auto; background: #F4A93B; border: 3px solid #2C2430; box-shadow: 4px 4px 0 rgba(44, 36, 48, 0.4); padding: 16px 18px 18px; text-align: center"
		>
			<p
				style="margin: 0; font-family: var(--font-pixel); font-size: 19px; font-weight: 500; line-height: 1.4; color: #14261F"
			>
				Made for the places that know your order before you reach the counter.
			</p>
		</div>
	</footer>
</div>
