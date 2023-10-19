import { h } from "vue";
import TranslationCore from "../lib/translation-core";

export function pick_random(obj) {
	if ( ! obj )
		return null;

	if ( ! Array.isArray(obj) )
		return obj[pick_random(Object.keys(obj))]

	return obj[Math.floor(Math.random() * obj.length)];
}

const FACES = ['(・`ω´・)', ';;w;;', 'owo', 'ono', 'oAo', 'oxo', 'ovo;', 'UwU', '>w<', '^w^', '> w >', 'v.v'],

	transformText = (ast, fn) => ast.map(node => {
		if ( typeof node === 'string' )
			return fn(node);

		else if ( typeof node === 'object' && node.o ) {
			const out = Object.assign(node, {o: {}});
			for(const key of Object.keys(node.o))
				out.o[key] = transformText(node.o[key], fn)
		}

		return node;
	}),

	owo = text => text
		.replace(/(?:r|l)/g, 'w')
		.replace(/(?:R|L)/g, 'W')
		.replace(/n([aeiou])/g, 'ny$1')
		.replace(/N([aeiou])/g, 'Ny$1')
		.replace(/N([AEIOU])/g, 'NY$1')
		.replace(/ove/g, 'uv')
		.replace(/!+/g, ` ${pick_random(FACES)} `),

	TRANSFORMATIONS = {
		double: (key, ast) => [...ast, ' ', ...ast],
		upper: (key, ast) => transformText(ast, n => n.toUpperCase()),
		lower: (key, ast) => transformText(ast, n => n.toLowerCase()),
		append_key: (key, ast) => [...ast, ` (${key})`],
		set_key: key => [key],
		owo: (key, ast) => transformText(ast, owo)
	};

export default {
    install: (app, options) => {
        const core = new TranslationCore();

        //core.transformation = TRANSFORMATIONS.upper;

        app.config.globalProperties.i18n = core;

        app.config.globalProperties.$t = (key, phrase, options, settings) =>
            core.t(key, phrase, options, settings);

        app.config.globalProperties.$tList = (key, phrase, options, settings) =>
            core.tList(key, phrase, options, settings);

        app.config.globalProperties.$formatNumber = (val, format) =>
            core.formatNumber(val, format);

        app.config.globalProperties.$formatDate = (val, format) =>
            core.formatDate(val, format);

        app.config.globalProperties.$formatRelative = (val, format) =>
            core.formatRelativeTime(val, format);

        app.config.globalProperties.$formatDuration = (val, include_days) =>
            core.formatDuration(val, include_days);

        app.component('t-list', {
            props: {
                tag: {
                    required: false,
                    default: 'span'
                },
                phrase: {
                    type: String,
                    required: true
                },
                default: {
                    type: String,
                    required: true
                },
                data: {
                    type: Object,
                    required: false
                },
                options: {
                    type: Object,
                    required: false
                }
            },

            render() {
                return h(
                    this.tag || 'span',
                    this.$tList(
                        this.phrase,
                        this.default,
                        Object.assign({}, this.data, this.$slots),
                        this.options
                    ).map(out => {
                        if ( typeof out === 'function' )
                            return out();
                        return out;
                    })
                );
            }
        })
    }
};
