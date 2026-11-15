// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			/** The feedback screen open over the village map; null once it is closed. */
			feedback?: import('#lib/feedback.ts').FeedbackView | null;
		}
		// interface Platform {}
	}
}

export {};
