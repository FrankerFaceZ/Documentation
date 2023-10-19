<script>

import { h } from 'vue';
import { render } from '../../../rich-token-page/src/rich_tokens/render';
import { normalizeResponse } from '../../../rich-token-page/src/rich_tokens/utilities';


export default {
	props: {
		link: {
			type: Boolean,
			default: false
		},
		href: {
			type: String
		},
		active: {
			type: Boolean,
			default: true
		},
		data: {
			type: Object,
			default: null
		},
		dataLoading: {
			type: Boolean,
			default: false
		},
		allowFull: {
			type: Boolean,
			default: true
		},
		allowMid: {
			type: Boolean,
			default: true
		},
		forceFull: {
			type: Boolean,
			default: false
		},
		forceMid: {
			type: Boolean,
			default: false
		},
		forceShort: {
			type: Boolean,
			default: false
		},
		allowMedia: {
			type: Boolean,
			default: true
		},
		allowUnsafe: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
			loading: false,
			player_state: {},
			document: null,
		}
	},

	computed: {
		source() {
			return this.active
				? this.document
				: this.data;
		},

		tokens() {
			const loading = this.active ? this.loading : this.dataLoading;
			if ( loading )
				return {
					type: 'header',
					title: {
						type: 'i18n',
						key: 'card.loading',
						phrase: 'Loading...'
					}
				};

			const doc = this.source;

			if ( ! doc )
				return null;

			if ( this.forceFull )
				return doc.full ?? null;

			if ( this.forceMid )
				return doc.mid ?? null;

			if ( this.forceShort )
				return doc.short ?? null;

			if ( this.allowFull && doc.full )
				return doc.full;

			if ( this.allowMid && doc.mid )
				return doc.mid;

			return doc.short ?? null;
		}
	},

	watch: {
		active() {
			this.resetState();
			if ( this.active )
				this.load();
		},

		href() {
			this.resetState();
			if ( this.active )
				this.load();
		},

		data() {
			if ( ! this.active )
				this.resetState();
		}
	},

	created() {
		if ( this.active )
			this.load();
	},

	methods: {
		resetState() {
			this.loading = false;
			this.player_state = {};
			this.document = null;
		},

		async load() {
			if ( ! this.active ) {
				this.loading = false;
				return;
			}

			if ( this.loading )
				return;

			this.loading = true;

			let data;
			try {
				data = await fetch(`https://link-service.workers.frankerfacez.com/?url=${encodeURIComponent(this.href)}`)
					.then(resp => resp.ok ? resp.json() : null);
			} catch(err) {
				data = {
					error: String(err)
				};
			};

			if ( ! data )
				data = {
					error: {type: 'i18n', key: 'card.empty', phrase: 'No data was returned.'}
				};

			data = normalizeResponse(data);

			this.loading = false;
			this.document = data;
		},

		renderContent() {
			let body = this.tokens;
			if ( ! body )
				body = {
					type: 'header',
					subtitle: 'There is no data.'
				};

			if ( body )
				return render(body, {
					type: 'vue3',
					theme: {
						text: {
							base: 'text-black dark:text-white',
							alt: 'text-neutral-700 dark:text-neutral-300',
							'alt-2': 'text-neutral-500 dark:text-neutral-400'
						},
						background: {
							'text-base': 'bg-black dark:bg-white',
							'text-alt': 'bg-neutral-700 dark:bg-neutral-300',
							'alt-2': 'bg-neutral-500 dark:bg-neutral-400'
						}
					},
					allowMedia: this.allowMedia,
					allowUnsafe: this.allowUnsafe,
					i18nPrefix: this.source?.i18n_prefix,
					fragments: this.source?.fragments,
					i18n: this.i18n,
					player_state: this.player_state,
					togglePlayer: id => this.player_state[id] = ! this.player_state[id]
				});

			return null;
		}

	},

	render() {
		let content = this.renderContent();

		let classes = ['ffz--link-preview max-w-screen-md border p-2 rounded-lg dark:bg-neutral-900 dark:text-white dark:border-neutral-500 bg-neutral-100 flex flex-col drop-shadow-md'];

		if ( this.link && this.href ) {
			classes.push('hover:bg-neutral-200 hover:dark:bg-neutral-700');

			return h('a', {
				href: this.href,
				target: '_blank',
				rel: 'noopener noreferer',
				class: classes
			}, content);
		}

		return h('div', {
			class: classes
		}, content);
	}
}

</script>
