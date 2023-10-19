export const STOCK_URLS = [
	'https://discord.gg/UrAkGhT',
	'https://www.youtube.com/watch?v=CAL4WMpBNs0',
	'https://xkcd.com/221/',
	'https://github.com/FrankerFaceZ/FrankerFaceZ',
	'https://twitter.com/frankerfacez',
	'https://twitter.com/FrankerFaceZ/status/1240717057630625792',
	'http://testsafebrowsing.appspot.com/apiv4/ANY_PLATFORM/MALWARE/URL/',
	'https://en.wikipedia.org/wiki/Emoji',
	'https://en.wikipedia.org/wiki/Naginata',
	'https://www.smbc-comics.com/comic/punishment'
];

export const LINK_DATA_HOSTS = {
	localhost: {
		title: 'Local Dev Server (Port 8002)',
		value: 'https://localhost:8002',
		has_sse: true
	},
	'localhost-cf': {
		title: 'Local Dev Worker (Wrangler, Port 8787)',
		value: 'https://localhost:8787',
		has_sse: false
	},
	Production: {
		title: 'Production (Cloudflare Worker)',
		value: 'https://link-service.workers.frankerfacez.com',
		has_sse: false
	}
};
