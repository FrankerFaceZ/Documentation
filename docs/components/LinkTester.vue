<template>
	<div class="ffz--link-tester">
		<div>
			<div class="flex items-start w-full mb-2">
				<label for="provider" class="my-2 w-20 shrink-0">
					Provider
				</label>

				<Select
					class="w-full"
					v-model.lazy="provider"
					:options="providers"
				/>
			</div>

			<div class="flex items-start w-full mb-2">
				<label for="selector" class="my-2 w-20 shrink-0">
					URL
				</label>

				<div class="flex flex-col mr-2 w-full min-w-0">
					<select
						id="selector"
						ref="selector"
						class="w-full rounded-t-lg p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						@change="onSelectChange"
					>
						<option :selected="is_custom" value="custom">
							Custom
						</option>
						<optgroup
							v-for="prov in examples"
							:key="prov.key"
							:label="prov.key"
						>
							<option
								v-for="i in prov.items"
								:key="i.url"
								:selected="i.url === raw_url"
								:value="i.url"
							>
								{{ i.title ? `${i.title} (${i.url})` : i.url }}
							</option>
						</optgroup>
					</select>
					<input
						ref="text"
						class="w-full rounded-b-lg p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-t-0"
						@blur="updateText"
						@input="onTextChange"
					/>
				</div>

				<div class="group relative">
					<button
						class="py-2.5 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600"
						:class="{
							'cursor-not-allowed': examples_loading,
							'hover:bg-gray-100': ! examples_loading,
							'hover:text-blue-700': ! examples_loading,
							'dark:hover:text-white': ! examples_loading,
							'dark:hover:bg-gray-700': ! examples_loading
						}"
						:disabled="examples_loading"
						@click="updateExamples"
					>
						<i class="fa fa-refresh" />
					</button>

					<div class="pointer-events-none w-max absolute opacity-0 transition-opacity group-hover:opacity-100 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm dark:bg-gray-300 dark:text-black top-full right-0">
						Refresh Examples
					</div>
				</div>
			</div>

			<div class="flex items-start w-full mb-2">
				<div class="w-20 shrink-0">Options</div>

				<div class="flex flex-col">
					<Toggle
						class="mb-2"
						v-model="allowMedia"
						label="Display Media in Previews"
					/>

					<Toggle
						v-model="allowUnsafe"
						label="Display Potentially NSFW Content"
					/>
				</div>
			</div>

			<div class="flex items-start w-full mb-2">
				<div class="my-2 w-20 shrink-0"></div>

				<Button
					gradient="purple-pink"
					outline
					:disabled="loading"
					:loading="loading"
					loadingPosition="suffix"
					@click="refreshButton"
				>
					Refresh
				</Button>
			</div>

		</div>

		<div class="flex my-4 w-full">
			<label class="w-20 shrink-0 my-2">Short</label>

			<LinkPreview
				class="w-full min-w-0"
				:active="false"
				:href="url"
				:forceShort="true"
				:dataLoading="loading"
				:data="data"
				:allowMedia="allowMedia"
				:allowUnsafe="allowUnsafe"
			/>
		</div>

		<div class="flex my-4 w-full">
			<label class="w-20 shrink-0 my-2">Mid</label>

			<LinkPreview
				class="w-full min-w-0"
				:active="false"
				:href="url"
				:forceMid="true"
				:dataLoading="loading"
				:data="data"
				:allowMedia="allowMedia"
				:allowUnsafe="allowUnsafe"
			/>
		</div>

		<div class="flex my-4 w-full">
			<label class="w-20 shrink-0 my-2">Full</label>

			<LinkPreview
				class="w-full min-w-0"
				:active="false"
				:href="url"
				:forceFull="true"
				:dataLoading="loading"
				:data="data"
				:allowMedia="allowMedia"
				:allowUnsafe="allowUnsafe"
			/>
		</div>

		<div class="flex my-4 w-full">
			<label class="w-20 shrink-0 my-2">Raw</label>

			<div class="ffz--link-preview min-w-0 w-full border p-2 rounded-lg dark:bg-neutral-900 dark:text-white dark:border-neutral-500 bg-neutral-100 drop-shadow-md font-mono text-xs break-words whitespace-pre-wrap overflow-y-scroll h-96">
				<pretty-json :value="data" />
			</div>
		</div>

	</div>
</template>

<script>

import { Button, Select, Toggle } from 'flowbite-vue';
import LinkPreview from './LinkPreview.vue';
import { debounce, formatExamples, highlightJson } from '../lib/utilities';
import { LINK_DATA_HOSTS, STOCK_URLS } from '../lib/constants';

import { normalizeResponse } from '../lib/rich_tokens/utilities'; // '../../../rich-token-page/src/rich_tokens/utilities';


export default {

	components: {
		Button,
		Select,
		Toggle,
		LinkPreview,
		'pretty-json': (props, context) => {
			const val = props.value ?? null;
			return highlightJson(val, true);
		},
	},

	data() {
		const state = window.history.state;
		let url = state?.ffz_lt_url;
		if ( ! url )
			url = 'https://www.youtube.com/watch?v=CAL4WMpBNs0';

		const stuff = formatExamples(STOCK_URLS, url);

		let provider = null;
		const pkey = state?.ffz_lt_provider;
		if ( pkey ) {
			for(const obj of Object.values(LINK_DATA_HOSTS)) {
				if ( obj.value === pkey ) {
					provider = obj;
					break;
				}
			}
		}

		return {
			raw_url: url,
			examples: stuff[0],
			examples_loading: false,
			is_custom: stuff[1],

			allowMedia: state?.ffz_lt_media ?? true,
			allowUnsafe: state?.ffz_lt_unsafe ?? false,

			providers: Object.values(LINK_DATA_HOSTS).map(item => ({
				value: item,
				name: item.title
			})),
			provider: provider ?? LINK_DATA_HOSTS.Production,

			loading: false,
			data: null
		}
	},

	computed: {
		url() {
			try {
				return new URL(this.raw_url).toString()
			} catch(err) {
				return null;
			}
		}
	},

	watch: {
		allowMedia() {
			this.saveState();
		},

		allowUnsafe() {
			this.saveState();
		},

		raw_url() {
			if ( ! this.is_custom )
				this.$refs.text.value = this.raw_url;
		},

		url() {
			this.rebuildData();
			this.saveState();
		},

		provider() {
			this.rebuildData();
			this.updateEventSource();
			this.updateExamples();
			this.saveState();
		}
	},

	created() {
		this.refreshES = debounce(this.refreshES, 1000, true);
		this.rebuildData = debounce(this.rebuildData, 250);
		this.onTextChange = debounce(this.onTextChange, 500);
		this.updateExamples = debounce(this.updateExamples, 500);
		this.updateEventSource = debounce(this.updateEventSource, 500);

		this.updateExamples();
		this.updateEventSource();
	},

	mounted() {
		this.rebuildData();

		this.$refs.text.value = this.raw_url;
	},

	beforeDestroy() {
		this.teardownEventSource();
	},

	methods: {
		refreshES() {
			this.load();
		},

		refreshButton() {
			this.load(true);
		},

		async load(skip_cache = false) {
			if ( this.loading )
				return;

			this.loading = true;

			let host = this.provider.value;
			this.data = null;

			let result;
			try {
				result = await fetch(`${host}/?url=${encodeURIComponent(this.url)}&skip_cache=${skip_cache ? '1' : '0'}`, {
					signal: AbortSignal.timeout(30000)
				}).then(resp => resp.json());
			} catch(err) {
				result = {
					error: String(err)
				}
			}

			this.data = normalizeResponse(result);
			this.loading = false;
		},

		// Update Examples

		async updateExamples() {
			if ( this.examples_loading )
				return;

			this.examples_loading = true;
			const host = this.provider.value;

			let examples;
			try {
				examples = (await fetch(`${host}/examples`, {
					signal: AbortSignal.timeout(15000)
				}).then(resp => resp.ok ? resp.json() : null))?.examples;
			} catch(err) {
				console.error(err);
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

			const out = formatExamples(examples, this.raw_url);

			this.examples = out[0];
			this.is_custom = out[1];
			this.examples_loading = false;
		},

		// UI Elements

		onSelectChange() {
			const raw_value = this.$refs.selector.value;

			if ( raw_value && raw_value !== 'custom' ) {
				this.raw_url = raw_value;
				this.is_custom = false;
			} else
				this.is_custom = true;
		},

		updateText() {
			const value = this.$refs.text.value;
			if ( value === this.raw_url )
				return;

			let custom = true;
			for(const provider of this.examples) {
				for(const url of provider.items) {
					if ( url === value ) {
						custom = false;
						break;
					}
				}

				if ( ! custom )
					break;
			}

			this.is_custom = custom;
			if ( this.is_custom )
				this.raw_url = this.$refs.text.value;
		},

		onTextChange() {
			this.updateText();
		},


		// Internal State

		rebuildData() {
			if ( ! this.url ) {
				this.data = null;
				return;
			}

			this.load();
		},

		// Window State

		saveState() {
			try {
				window.history.replaceState({
					...window.history.state,
					ffz_lt_url: this.raw_url,
					ffz_lt_provider: this.provider.value,
					ffz_lt_media: this.allowMedia,
					ffz_lt_unsafe: this.allowUnsafe
				}, document.title)
			} catch(err) {
				/* no-op */
			}
		},

		// EventSource Stuff

		updateEventSource() {
			if ( ! this.provider.has_sse ) {
				this.teardownEventSource();
				this.es_waiting = false;
				return;
			}

			const url = `${this.provider.value}/sse`;
			if ( this.es ) {
				if ( this.es.url === url )
					return;
				this.teardownEventSource();
			}

			this.es = new EventSource(url);
			this.es.addEventListener('error', () => {
				this.es_waiting = true;
			});
			this.es.addEventListener('message', () => {
				if ( this.es_waiting ) {
					this.es_waiting = false;
					this.refreshES();
				}
			});
		},

		teardownEventSource() {
			if ( this.es ) {
				this.es.close();
				this.es = null;
			}
		},
	}

}

</script>

<style>
.ffz-ct--obj-open,
.ffz-ct--obj-close {
	&[data-depth="1"], &[data-depth="5"], &[data-depth="9"] {
		/* color: var(--color-text-alt-2); */
		@apply dark:text-yellow-500 text-yellow-700;
	}

	&[data-depth="2"], &[data-depth="6"], &[data-depth="10"] {
		/* color: var(--color-text-error); */
		@apply dark:text-purple-400 text-purple-600;
	}

	&[data-depth="3"], &[data-depth="7"], &[data-depth="11"] {
		/* color: var(--color-text-prime); */
		@apply dark:text-blue-400 text-blue-600;
	}

	&[data-depth="4"], &[data-depth="8"] {
		/* Success */
		@apply dark:text-green-500 text-green-700;
	}
}


.ffz-ct--obj-sep,
.ffz-ct--obj-key-sep,

.ffz-ct--params,
.ffz-ct--prefix,
.ffz-ct--tags {
	@apply dark:text-white text-black;

}

.ffz-ct--obj-key,
.ffz-ct--command,
.ffz-ct--tag {
	@apply dark:text-sky-300 text-sky-800;
}

.ffz-ct--channel,
.ffz-ct--user {
	@apply dark:text-green-500 text-green-700;
}

.ffz-ct--literal,
.ffz-ct--param {
	@apply dark:text-yellow-200 text-yellow-800;
}

.ffz-ct--string,
.ffz-ct--tag-value {
	@apply dark:text-orange-400 text-orange-600;
}

.ffz-ct--tags,
.ffz-ct--params {
	overflow-wrap: anywhere;
}
</style>
