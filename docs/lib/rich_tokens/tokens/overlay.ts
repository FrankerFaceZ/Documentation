import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { ColorToken, ContentToken, RichToken, Token } from "../types";
import { applyColors, createElement, pluckColor } from "../utilities";

const CORNERS = [
    'top-left', 'top', 'top-right',
    'left', 'center', 'right',
    'bottom-left', 'bottom', 'bottom-right'
] as const;

type ValidCorner = typeof CORNERS[number];

export type OverlayToken = ContentToken & ColorToken & {
    type: 'overlay';
    markdown?: boolean;
} & {
    [K in ValidCorner]?: Token;
};


export function isOverlayToken(token: Token | undefined): token is OverlayToken {
    return (token as RichToken)?.type === 'overlay';
}


export default function OverlayTokenHandler<T extends RichTokenContext>(
    token: OverlayToken,
    ctx: T
): RenderResult<T> {

    const content = render(token.content, ctx, token.markdown);
    if ( ! content )
        return null as RenderResult<T>;

    const corners: RenderResult<T>[] = [];
    for(const corner of CORNERS) {
        const value = token[corner];
        if ( value ) {
            const result = render(value, ctx);
            if ( result )
                corners.push(createElement(ctx, 'div', {
                    class: 'ffz--overlay__bit',
                    attrs: {
                        'data-side': corner
                    }
                }, result));
        }
    }

    const classes = ['ffz--overlay'];
    const style: Record<string, string> = {};

    applyColors(ctx, token, classes, style);

    return createElement(ctx, 'div', {
        class: classes,
        style
    }, [
        createElement(ctx, 'div', {
            class: 'ffz--overlay__content'
        }, content),
        ...corners
    ]);

}