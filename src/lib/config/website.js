import {
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_FACEBOOK_AUTHOR_PAGE,
	PUBLIC_FACEBOOK_PAGE,
	PUBLIC_GITHUB_PAGE,
	PUBLIC_HCAPTCHA_SITEKEY,
	PUBLIC_LINKEDIN_PROFILE,
	PUBLIC_SITE_URL,
	PUBLIC_TELEGRAM_USERNAME,
	PUBLIC_TIKTOK_USERNAME,
	PUBLIC_TWITTER_USER_ID,
	PUBLIC_TWITTER_USERNAME,
	PUBLIC_WIRE_USERNAME,
	PUBLIC_WORKER_URL,
} from '$env/static/public';

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

const website = {
	author: 'Rodney Johnson',
	ogLanguage: 'en_GB',
	siteLanguage: 'en-GB',
	siteTitle: 'SvelteKit Blog Mdx',
	siteShortTitle: 'SvelteKit Blog',
	siteUrl: PUBLIC_SITE_URL,
	icon: 'static/icon.png',
	backgroundColor: '#1b4079',
	themeColor: '#d62828',
	contactEmail: PUBLIC_CONTACT_EMAIL,
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	githubPage: PUBLIC_GITHUB_PAGE,
	linkedinProfile: PUBLIC_LINKEDIN_PROFILE,
	telegramUsername: PUBLIC_TELEGRAM_USERNAME,
	tiktokUsername: PUBLIC_TIKTOK_USERNAME,
	twitterUsername: PUBLIC_TWITTER_USERNAME,
	twitterUserId: PUBLIC_TWITTER_USER_ID,
	wireUsername: PUBLIC_WIRE_USERNAME,
	hcaptchaSitekey: PUBLIC_HCAPTCHA_SITEKEY,
	workerUrl: PUBLIC_WORKER_URL,
};

export { website as default };
