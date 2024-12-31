// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface Document {
		lazyloadInstance: ILazyLoadInstance;
	}

	interface HCaptchaExecuteResponse {
		response: string;
		key: string;
	}

	interface Window {
		hcaptcha: {
			execute(
				hcaptchaWidgetID: string,
				opts?: { async: boolean },
			): Promise<HCaptchaExecuteResponse>;
			render(id: string, config: { sitekey: string; size: string; theme: string }): string;
		};
	}
	namespace App {
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
