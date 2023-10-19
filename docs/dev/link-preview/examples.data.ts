import { type Example } from '../../lib/utilities';
import { STOCK_URLS } from '../../lib/constants';


export default {
	async load() {
		let examples: Example[] | null = null;
		try {
			examples = (await fetch(`https://link-service.workers.frankerfacez.com/examples`)
				.then(resp => resp.ok ? resp.json() : null))?.examples;
		} catch(err) {
			/* no-op */
		}

		if ( ! examples )
			examples = [];

		const urls = examples.map(x => x.url);
		for(const url of STOCK_URLS) {
			if ( ! urls.includes(url) )
				examples.push({
					url,
					resolver: 'Stock'
				});
		}

		return examples;
	}
}
