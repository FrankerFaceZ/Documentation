import { RenderResult, RichTokenContext } from "../context";
import { render, renderWithCapture } from "../render";
import { ColorToken, ContentToken, RichToken, SpacingToken, SpacingType, Token } from "../types";
import { applyColors, applySpacing, createElement, getRoundClass, pluckColor } from "../utilities";


const VALID_WRAPS = ['nowrap', 'pre-wrap'] as const,
    VALID_FLEX_WRAPS = ['nowrap', 'wrap', 'wrap-reverse'] as const,

    VALID_OVERFLOWS = [
        'auto', 'hidden', 'clip', 'visible', 'scroll',
        'x-auto', 'x-hidden', 'x-clip', 'x-visible', 'x-scroll',
        'y-auto', 'y-hidden', 'y-clip', 'y-visible', 'y-scroll'
    ] as const,
    VALID_DIRECTIONS = {
        column: 'col',
        'column-reverse': 'col-reverse',
        row: 'row',
        'row-reverse': 'row-reverse'
    } as const,
    VALID_ALIGNMENTS = [
        'normal', 'start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'
    ] as const,
    VALID_ALIGN_ITEMS = [
        'start', 'end', 'center', 'baseline', 'stretch'
    ] as const,
    VALID_ALIGN_SELF = [
        'auto', ...VALID_ALIGN_ITEMS
    ] as const;


type ValidWrap = typeof VALID_WRAPS[number];
type ValidFlexWrap = typeof VALID_FLEX_WRAPS[number];
type ValidOverflow = typeof VALID_OVERFLOWS[number];
type ValidDirection = keyof typeof VALID_DIRECTIONS;
type ValidAlignment = typeof VALID_ALIGNMENTS[number];
type ValidAlignItems = typeof VALID_ALIGN_ITEMS[number];
type ValidAlignSelf = typeof VALID_ALIGN_SELF[number];

export type BoxToken = ContentToken & SpacingToken & ColorToken & {
    type: 'box' | 'flex';

    border?: boolean;
    ellipsis?: boolean;
    lines?: number;
    markdown?: boolean;
    rounding?: number | string;
    wrap?: ValidWrap;
    width?: number | string;
    height?: number | string;

    // Flex Properties
    flexWrap?: ValidFlexWrap;
    inline?: boolean;
    overflow?: ValidOverflow;
    direction?: ValidDirection;
    'align-content'?: ValidAlignment;
    'justify-content'?: ValidAlignment;
    'align-items'?: ValidAlignItems;
    'align-self'?: ValidAlignSelf;
}


function validate<T>(input: string | undefined, valid: readonly T[]): T | null {
    return input && valid.includes(input as T) ? input as T : null;
}


export function isBoxToken(token: Token | undefined): token is BoxToken {
    const type = (token as RichToken)?.type;
    return type === 'box' || type === 'flex';
}


// Used Tailwind Classes:
// flex inline-flex
// flex-wrap flex-wrap-reverse flex-nowrap
// flex-row flex-row-reverse flex-col flex-col-reverse
// content-normal content-start content-end content-center content-between content-around content-evenly content-stretch
// justify-normal justify-start justify-end justify-center justify-between justify-around justify-evenly justify-stretch
// items-start items-end items-center items-baseline items-stretch
// self-auto self-start self-end self-center self-stretch self-baseline
// overflow-auto overflow-hidden overflow-clip overflow-visible overflow-scroll
// overflow-x-auto overflow-x-hidden overflow-x-clip overflow-x-visible overflow-x-scroll
// overflow-y-auto overflow-y-hidden overflow-y-clip overflow-y-visible overflow-y-scroll
// whitespace-pre-wrap whitespace-nowrap
// text-ellipsis
// border

export default function BoxTokenHandler<T extends RichTokenContext>(token: BoxToken, ctx: T): RenderResult<T> {
    const classes = [],
        style: Record<string, string> = {},
        is_flex = token.type === 'flex';

    if ( is_flex ) {
        if ( token.inline )
            classes.push(`inline-flex`);
        else
            classes.push(`flex`);

        const direction = token.direction ? VALID_DIRECTIONS[token.direction] : null;
        if ( direction )
            classes.push(`flex-${direction}`);

        let alignment = validate(token['align-content'], VALID_ALIGNMENTS);
        if ( alignment )
            classes.push(`content-${alignment}`);

        alignment = validate(token['justify-content'], VALID_ALIGNMENTS);
        if ( alignment )
            classes.push(`justify-${alignment}`);

        const items = validate(token['align-items'], VALID_ALIGN_ITEMS);
        if ( items )
            classes.push(`items-${items}`);

        const wrap = validate(token.flexWrap, VALID_FLEX_WRAPS);
        if ( wrap )
            classes.push(`flex-${wrap}`);
    }

    const alignment = validate(token['align-self'], VALID_ALIGN_SELF);
    if ( alignment )
        classes.push(`self-${alignment}`);

    const overflow = validate(token.overflow, VALID_OVERFLOWS);
    if ( overflow )
        classes.push(`overflow-${overflow}`);

    const wrap = validate(token.wrap, VALID_WRAPS);
    if ( wrap )
        classes.push(`whitespace-${wrap}`);

    if ( token.ellipsis ) {
        classes.push(`overflow-hidden`);
        classes.push(`whitespace-nowrap`);
        classes.push(`text-ellipsis`);
    }

    if ( token.lines ) {
        classes.push(`ffz--line-clamp`);
        style['--ffz-lines'] = String(token.lines);
    }

    if ( token.border ) {
        classes.push(`border`);
        classes.push(`rounded-md`);
    }

    if ( token.rounding ) {
        const round = getRoundClass(token.rounding, ctx);
        if ( round )
            classes.push(round);
    }

    if ( token.width )
        style.width = typeof token.width === 'number'
            ? `${token.width}px`
            : token.width;

    if ( token.height )
        style.height = typeof token.height === 'number'
            ? `${token.height}px`
            : token.height;

    applyColors(ctx, token, classes, style);
    applySpacing(SpacingType.Margin, token, classes, style);
    applySpacing(SpacingType.Padding, token, classes, style);

    const capture = token.ellipsis || token.lines,
        markdown = token.markdown;

    let content,
        title = null;

    if ( capture ) {
        const out = renderWithCapture(token.content, ctx, markdown);
        content = out.content;
        title = out.title;

    } else
        content = render(token.content, ctx, markdown);

    return createElement(ctx, 'div', {
        class: classes,
        style,
        attrs: {
            title
        }
    }, content);

}