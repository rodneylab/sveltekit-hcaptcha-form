<script>
	import { EmailInputField, TextArea, TextInputField } from '@rodneylab/sveltekit-components';
	import website from '$lib/config/website';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/env';

	const { hcaptchaSitekey, workerUrl } = website;

	/** @typedef {{
    execute(hcaptchaWidgetID: string, opts?: { async: boolean }): Promise<HCaptchaExecuteResponse>;
    render(id: string, config: { sitekey: string; size: string; theme: string }): string;
  } | null}*/
	let hcaptcha;
	let hcaptchaWidgetID;

	onMount(() => {
		if (browser) {
			hcaptcha = window.hcaptcha;
			if (hcaptcha.render) {
				hcaptchaWidgetID = hcaptcha.render('hcaptcha', {
					sitekey: hcaptchaSitekey,
					size: 'invisible',
					theme: 'dark',
				});
			}
		}
	});

	onDestroy(() => {
		if (browser) {
			hcaptcha = { execute: async () => ({ response: '' }), render: () => {} };
		}
	});

	let name = '';
	let email = '';
	let message = '';

	/** @typedef {{email: string; message: string; name: string;}} */
	let errors;
	$: errors = {};
	$: submitting = false;

	function clearFormFields() {
		name = '';
		email = '';
		message = '';
	}

	async function handleSubmit() {
		try {
			const { response: hCaptchaResponse } = await hcaptcha.execute(hcaptchaWidgetID, {
				async: true,
			});
			/* for a static site, you can use a Cloudflare worker to manage the server part of the
			 * hCaptcha and send your site admin an email with the contact details
			 *
			 * in this case, use:
			 *
			 * fetch(`${workerUrl}/verify`, {
			 *
			 * for a server side rendered app, use the verify endpoint to do the processing:
			 *
			 * fetch('/verify.json', {
			 */
			fetch(`${workerUrl}/verify`, {
				method: 'POST',
				credentials: 'omit',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					message,
					response: hCaptchaResponse,
				}),
			});
			console.log('Details: ', { name, email, message });
			clearFormFields();
		} catch (error) {
			console.error('Error in contact form submission');
		}
	}
</script>

<svelte:head>
	<script src="https://js.hcaptcha.com/1/api.js?render=explicit" async defer></script>
</svelte:head>

<form class="form" on:submit|preventDefault={handleSubmit}>
	<h2>Drop me a message</h2>
	<TextInputField
		id="form-name"
		value={name}
		placeholder="Your name"
		title="Name"
		error={errors?.name ?? null}
		on:update={(event) => {
			name = event.detail;
		}}
		style="padding-bottom:1rem"
	/>
	<EmailInputField
		id="form-email"
		value={email}
		placeholder="blake@example.com"
		title="Email"
		error={errors?.email ?? null}
		on:update={(event) => {
			email = event.detail;
		}}
		style="width:100%;padding-bottom:1rem"
	/>
	<TextArea
		id="form-message"
		value={message}
		placeholder="Enter your message here"
		title="Message"
		error={errors?.message ?? null}
		on:update={(event) => {
			message = event.detail;
		}}
		style="padding-bottom:1rem"
	/>
	<button type="submit" disabled={submitting}>Submit form</button>
	<div
		id="hcaptcha"
		class="h-captcha"
		data-sitekey={hcaptchaSitekey}
		data-size="invisible"
		data-theme="dark"
	/>
</form>

<style lang="scss">
	.form {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: $spacing-6 auto;
	}
	button {
		cursor: pointer;
		padding: $spacing-2 $spacing-0;
	}
</style>
