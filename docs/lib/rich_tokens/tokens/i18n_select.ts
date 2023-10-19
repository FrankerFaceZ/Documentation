import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { RichToken, Token } from "../types";

export type I18nSelectToken = RichToken & {
    type: 'i18n_select';

    default: string;
    choices: {
        [key: string]: Token;
    };

    markdown?: boolean;
};


export function isI18nSelectToken(token: Token | undefined): token is I18nSelectToken {
    return (token as RichToken)?.type === 'i18n_select';
}


function findMatchingLocale(locale: string, choices: string[]): string | null {

    	// Is the locale present exactly?
	for(const item of choices) {
		if ( item.localeCompare(locale, undefined, {sensitivity: 'accent'}) === 0 )
			return locale;
	}

	// What about partials?
	let prefixed = `${locale.toLowerCase()}-`;
	for(const item of choices) {
		if ( item.toLowerCase().startsWith(prefixed) )
			return item;
	}

	// Last resort, do we have a - in the locale?
	const idx = locale.indexOf('-');
	if ( idx !== -1 )
		return findMatchingLocale(locale.slice(0, idx), choices);

    return null;
}


export default function I18nSelectTokenHandler<T extends RichTokenContext>(
    token: I18nSelectToken,
    ctx: T
): RenderResult<T> {

    // What locale and choices do we have.
    const choices = token.choices || {};
    let locale: string = ctx.i18n?.locale ?? 'en';

    // Try to find a valid match, or use the default.
    let selected = findMatchingLocale(locale, Object.keys(choices)) ?? token.default;

    // Render it.
    return render(choices[selected], ctx, token.markdown) as RenderResult<T>;

}