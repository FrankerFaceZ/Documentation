import { h } from "vue";

type AnyFunction = (...args: any[]) => any;

/**
 * Return a wrapper for a function that will only execute the function
 * a period of time after it has stopped being called.
 * @param {Function} fn The function to wrap.
 * @param {Integer} delay The time to wait, in milliseconds
 * @param {Boolean} immediate If immediate is true, trigger the function immediately rather than eventually.
 * @returns {Function} wrapped function
 */
export function debounce<Func extends AnyFunction>(
	fn: Func,
	delay: number,
	immediate: number | boolean = false
): ((this: ThisParameterType<Func>, ...args: Parameters<Func>) => void) {

	let timer: ReturnType<typeof setTimeout> | null;

	if ( immediate ) {
		const later = () => timer = null;
		if ( immediate === 2 )
			// Special Mode! Run immediately OR later.
			return function debouncedFunction(this: ThisParameterType<Func>, ...args) {
				if ( timer ) {
					clearTimeout(timer);
					timer = setTimeout(() => {
						timer = null;
						fn.apply(this, args);
					}, delay);
				} else {
					fn.apply(this, args);
					timer = setTimeout(later, delay);
				}
			}

		return function debouncedFunction(this: ThisParameterType<Func>, ...args) {
			if ( ! timer )
				fn.apply(this, args);
			else
				clearTimeout(timer);

			timer = setTimeout(later, delay);
		}
	}

	return function debouncedFunction(this: ThisParameterType<Func>, ...args) {
		if ( timer )
			clearTimeout(timer);

		timer = setTimeout(fn.bind(this, ...args), delay);
	}
}


export function pickRandom<T>(input: T[] | Record<string, T> | null): T | null {
	if ( ! input )
		return null;

	if ( Array.isArray(input) )
		return input[Math.floor(Math.random() * input.length)];

	const keys = Object.keys(input);
	return input[keys[Math.floor(Math.random() * keys.length)]];
}

export type Example = {
	resolver?: string;
	title?: string;
	url: string;
};

export type GroupedExamples = {
	key: string;
	items: Example[]
};

export function formatExamples(examples: Example[], url: string): [GroupedExamples[], boolean] {
	const out: GroupedExamples[] = [],
		resolvers: Record<string, Example[]> = {};

	let is_custom = true;

	for(const example of examples) {
		const resolver = example.resolver || 'Unknown';
		let prov = resolvers[resolver];
		if ( ! prov ) {
			prov = resolvers[resolver] = [];
			out.push({
				key: resolver,
				items: prov
			});
		}

		if ( url === example.url )
			is_custom = false;

		prov.push(example);
	}

	out.sort((a,b) => a.key.localeCompare(b.key));

	return [out, is_custom];
}


export function highlightJson(object: any, pretty = false, depth = 1, max_depth = 30): ReturnType<typeof h> {
	let indent = '', indent_inner = '';
	if ( pretty ) {
		indent = '    '.repeat(depth - 1);
		indent_inner = '    '.repeat(depth);
	}

	if ( depth > max_depth )
		return h('span', {
			class: 'ffz-ct--obj-literal',
			'data-depth': depth
		}, '<nested>');

	if (object == null)
		return h('span', {
			class: 'ffz-ct--literal',
			'data-depth': depth
		}, 'null');

	if ( typeof object === 'number' || typeof object === 'boolean' )
		return h('span', {
			class: 'ffz-ct--literal',
			'data-depth': depth
		}, String(object));

	if ( typeof object === 'string' ) {
		let url;
		try {
			url = new URL(object);
		} catch(err) { /* no-op */ }

		if ( url )
			return h('a', {
				class: 'ffz-ct--string',
				'data-depth': depth,
				rel: 'noopener noreferrer',
				href: object,
				target: '_blank'
			}, JSON.stringify(object));

		return h('span', {
			class: 'ffz-ct--string',
			'data-depth': depth
		}, JSON.stringify(object));
	}

	const out: (string | ReturnType<typeof h>)[] = [];

	if ( Array.isArray(object) ) {
		if ( object.length ) {
			for(const obj of object) {
				if ( out.length )
					out.push(h('span', {
						class: 'ffz-ct--obj-sep',
						'data-depth': depth
					}, ', '));
				if ( pretty )
					out.push(`\n${indent_inner}`);

				out.push(highlightJson(obj, pretty, depth+1, max_depth));
			}

			if ( pretty )
				out.push(`\n${indent}`);
		}

		out.unshift(h('span', {
			class: 'ffz-ct--obj-open',
			'data-depth': depth
		}, '['));

		out.push(h('span', {
			class: 'ffz-ct--obj-close',
			'data-depth': depth
		}, ']'));

		return out as any;
	}

	for(const [key, val] of Object.entries(object)) {
		if ( out.length )
			out.push(h('span', {
				class: 'ffz-ct--obj-sep',
				'data-depth': depth
			}, ', '));
		if ( pretty )
			out.push(`\n${indent_inner}`);

		out.push(h('span', {
			class: 'ffz-ct--obj-key',
			'data-depth': depth
		}, JSON.stringify(key)));

		out.push(h('span', {
			class: 'ffz-ct--obj-key-sep',
			'data-depth': depth
		}, ': '));

		out.push(highlightJson(val, pretty, depth+1, max_depth));
	}

	if ( out.length && pretty )
		out.push(`\n${indent}`);

	out.unshift(h('span', {
		class: 'ffz-ct--obj-open',
		'data-depth': depth
	}, '{'));

	out.push(h('span', {
		class: 'ffz-ct--obj-close',
		'data-depth': depth
	}, '}'));

	return out as any;
}
