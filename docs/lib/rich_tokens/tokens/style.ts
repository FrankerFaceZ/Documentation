import { RenderResult, RichTokenContext } from "../context";
import { render, renderWithCapture } from "../render";
import { ColorToken, ContentToken, RichToken, SpacingToken, SpacingType, Token } from "../types";
import { applyColors, applySpacing, createElement } from "../utilities";

export type StyleToken = ContentToken & SpacingToken & ColorToken & {
    type: 'style';

    weight?: keyof typeof VALID_WEIGHTS;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
    tabular?: boolean;
    size?: keyof typeof VALID_SIZES | number;

    wrap?: string;
    ellipsis?: boolean;
    markdown?: boolean;
}

export function isStyleToken(token: Token | undefined): token is StyleToken {
    return (token as RichToken)?.type === 'style';
}

const VALID_WEIGHTS = {
    regular: 'normal',
    bold: 'bold',
    semibold: 'semibold'
};

const VALID_SIZES = {
        1: '8xl',
        2: '6xl',
        3: '4xl',
        4: '2xl',
        5: 'lg',
        6: 'base',
        7: 'sm',
        8: 'xs'
    },
    VALID_WRAPS = ['nowrap', 'pre-wrap'];

// Used Tailwind Classes:
// font-normal font-bold font-semibold
// italic underline tabular-nums line-through
// text-xs text-sm text-base text-lg text-2xl text-4xl text-6xl text-8xl

export default function StyleTokenHandler<T extends RichTokenContext>(
    token: StyleToken,
    ctx: T
): RenderResult<T> {

    const classes = [],
        style: Record<string, string> = {};

    if ( token.weight ) {
        if ( VALID_WEIGHTS[token.weight] )
            classes.push(`font-${VALID_WEIGHTS[token.weight]}`);
        else
            style.weight = token.weight;
    }

    if ( token.italic )
		classes.push('italic');

	if ( token.strike )
		classes.push('line-through');

	if ( token.underline )
		classes.push('underline');

	if ( token.tabular )
		classes.push('tabular-nums');

	if ( token.size ) {
		if ( typeof token.size === 'string' ) {
            if ( VALID_SIZES[token.size] )
                classes.push(`text-${VALID_SIZES[token.size]}`);
			else
				style.fontSize = token.size;
		} else
			style.fontSize = `${token.size}px`;
	}

	if ( token.wrap && VALID_WRAPS.includes(token.wrap) )
		classes.push(`whitespace-${token.wrap}`);

	if ( token.ellipsis ) {
		classes.push('text-ellipsis');
        classes.push('overflow-hidden');
        classes.push('whitespace-nowrap');
    }

    applyColors(ctx, token, classes, style);
    applySpacing(SpacingType.Margin, token, classes, style);
    applySpacing(SpacingType.Padding, token, classes, style);

    const capture = token.ellipsis;
    let content, title = null;

    if ( capture ) {
        const out = renderWithCapture(token.content, ctx, token.markdown);
        content = out.content;
        title = out.title;
    } else
        content = render(token.content, ctx, token.markdown);

    return createElement(ctx, 'span', {
        class: classes,
        style,
        attrs: {title}
    }, content);

}