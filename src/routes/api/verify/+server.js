export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	return new Response('OK');
}

// DELETE content above and uncomment content below if running in SSR rather than static mode

/** @type {import('./$types').RequestHandler} */
// export async function POST({ request }) {
// 	try {
// 		const { name, email, message, response: hCaptchaClientResponse } = await request.json();

// 		const secret = process.env['HCAPTCHA_SECRETKEY'];
// 		const sitekey = process.env['VITE_HCAPTCHA_SITEKEY'];
// 		const body = new URLSearchParams({ response: hCaptchaClientResponse, secret, sitekey });

// 		const response = await fetch('https://hcaptcha.com/siteverify', {
// 			method: 'POST',
// 			credentials: 'omit',
// 			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 			},
// 			body: body.toString(),
// 		});

// 		const data = await response.json();
// 		const { success } = data;
// 		console.log('data: ', data);
// 		if (success) {
// 			console.log('hCaptcha says yes!');
// 		} else {
// 			console.log('hCaptcha says no!');
// 		}

// 		// process name, email and message here e.g. email site admin with message details
// 		console.log({ name, email, message });

// 		return new Response('OK');
// 	} catch (err) {
// 		const error = `Error in /verify.json.js: ${err}`;
// 		console.error(error);
// 		return {
// 			status: 500,
// 			error,
// 		};
// 	}
// }
