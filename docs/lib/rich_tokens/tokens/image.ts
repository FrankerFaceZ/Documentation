import { RenderResult, RichTokenContext } from "../context";
import { RichToken, Token } from "../types";
import { canShowImage, createElement, getRoundClass } from "../utilities";

export type ImageToken = RichToken & {
    type: 'image';

    aspect?: number | string;
    class?: string;
    contain?: boolean;
    rounding?: number | string;

    height?: number | string;
    width?: number | string;

    url: string;
    title?: string;
}


export function isImageToken(token: Token | undefined): token is ImageToken {
    return (token as RichToken)?.type === 'image';
}


export default function ImageTokenHandler<T extends RichTokenContext>(
    token: ImageToken,
    ctx: T
): RenderResult<T> {

    if ( ! token.url?.length || ! canShowImage(token, ctx) )
        return null as RenderResult<T>;

    const round = getRoundClass(token.rounding, ctx),
        style: Record<string, string> = {},
        listeners: Record<string, any> = {};

    let aspect;
    if ( token.aspect )
        aspect = token.aspect;

    if ( ! aspect && typeof token.height === 'number' && typeof token.width === 'number' )
        aspect = token.width / token.height;

    if ( token.width )
        style.width = typeof token.width === 'string'
            ? token.width
            : `${token.width}px`;

    if ( token.height )
        style.height = typeof token.height === 'string'
            ? token.height
            : `${token.height}px`;

    if ( token.contain )
        style.objectFit = 'contain';

    else if ( token.contain != null )
        style.objectFit = 'unset';

    if ( ctx.onLoad )
        listeners.load = ctx.onLoad;

    const image = createElement(ctx, 'img', {
        class: [token.class, round],
        style,
        attrs: {
            src: token.url,
            title: token.title
        },
        on: listeners
    });

    if ( ! aspect )
        return image as RenderResult<T>;

    return createElement(ctx, 'div', {
        class: 'ffz-aspect ffz-aspect--align-center'
    }, [
        createElement(ctx, 'div', {
            class: 'ffz-aspect__spacer',
            style: {
                paddingTop: `${100 * (1 / (aspect as number || 1))}%`
            }
        }),
        image
    ] as any);
}