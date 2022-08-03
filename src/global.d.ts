/// <reference types="@sveltejs/kit" />

import type { ILazyLoadInstance } from 'vanilla-lazyload';

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
}
