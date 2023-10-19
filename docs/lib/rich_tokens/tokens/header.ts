import { RenderResult, RichTokenContext } from "../context";
import { render, renderWithCapture } from "../render";
import { RichToken, Token } from "../types";
import { canShowImage, createElement, pluckColor, resolveToken } from "../utilities";
import ImageTokenHandler, { ImageToken, isImageToken } from "./image";
import IconTokenHandler, { isIconToken } from "./icon";

export type HeaderToken = RichToken & {
    type: 'header';

    markdown?: boolean;
    compact?: boolean;

    title?: Token;
    subtitle?: Token;
    extra?: Token;

    sfw_background?: Token;
    background?: Token;

    sfw_image?: Token;
    image?: Token;
    image_side?: 'left' | 'right';
};


export function isHeaderToken(token: Token | undefined): token is HeaderToken {
    return (token as RichToken)?.type === 'header';
}


export default function HeaderTokenHandler<T extends RichTokenContext>(
    token: HeaderToken,
    ctx: T
): RenderResult<T> {

    let content: RenderResult<T>[] = [];
    let background;


    // Background image
    let bg_token = resolveToken(token.sfw_background, ctx);
    const nsfw_bg_token = resolveToken(token.background, ctx);
    if ( nsfw_bg_token && canShowImage(nsfw_bg_token, ctx) )
        bg_token = nsfw_bg_token;

    if ( isImageToken(bg_token) ) {
        background = ImageTokenHandler({
            ...bg_token,
            aspect: undefined
        }, ctx);

    } else if ( isIconToken(bg_token) ) {
        if ( bg_token.name )
            background = createElement(ctx, 'figure', {
                class: `ffz-i-${bg_token.name}`
            });

    } else if ( bg_token )
        background = render(bg_token, ctx, token.markdown);

    // Title
    if ( token.title ) {
        const out = renderWithCapture(token.title, ctx, token.markdown);
        if ( out.content ) {
            content.push(createElement(ctx, 'div', {
                class: [
                    'overflow-hidden whitespace-nowrap text-ellipsis font-semibold',
                    token.compact && (token.subtitle || token.extra) ? 'mr-2' : null
                ],
                attrs: {
                    title: out.title
                }
            }, out.content));
        }
    }


    // Subtitle
    if ( token.subtitle ) {
        const out = renderWithCapture(token.subtitle, ctx, token.markdown);
        if ( out.content ) {
            content.push(createElement(ctx, 'div', {
                class: [
                    `overflow-hidden whitespace-nowrap text-ellipsis ${pluckColor(ctx, 'text', 'alt-2')}`,
                    token.compact && token.extra ? 'mr-2' : null
                ],
                attrs: {
                    title: out.title
                }
            }, out.content));
        }
    }


    // Extra
    if ( token.extra ) {
        const out = renderWithCapture(token.extra, ctx, token.markdown);
        if ( out.content ) {
            content.push(createElement(ctx, 'div', {
                class: `overflow-hidden whitespace-nowrap text-ellipsis ${pluckColor(ctx, 'text', 'alt-2')}`,
                attrs: {
                    title: out.title
                }
            }, out.content));
        }
    }


    // Logo / Preview image
    let image: RenderResult<T> | null = null, aspect;
    let im_token = resolveToken(token.sfw_image, ctx);
    const nsfw_im_token = resolveToken(token.image, ctx);
    if ( nsfw_im_token && canShowImage(nsfw_im_token, ctx) )
        im_token = nsfw_im_token;

    if ( im_token ) {
        aspect = (im_token as ImageToken)?.aspect;

        if ( isImageToken(im_token) ) {
            image = ImageTokenHandler({
                ...im_token,
                aspect: undefined
            }, ctx);

        } else if ( isIconToken(im_token) ) {
            if ( im_token.name )
                image = IconTokenHandler(im_token, ctx, 'figure');

        } else
            image = render(im_token, ctx) as RenderResult<T>;
    }


    // Putting it all together now.
    let out: RenderResult<T>;

    if ( image ) {
        const right = token.image_side === 'right';

        image = createElement(ctx, 'div', {
            class: [
                'ffz--header-image shrink-0 mr-2',
                aspect ? 'ffz--header-aspect' : null
            ],
            style: {
                aspectRatio: aspect
                /*width: aspect
                    ? `${aspect as number * (token.compact ? 2.4 : 4.8)}rem`
                    : null*/
            }
        }, [image] as any) as RenderResult<T>;

        if ( token.compact ) {
            if ( right )
                content.push(image);
            else
                content.unshift(image);
        }

        out = createElement(ctx, 'div', {
            class: [
                'flex w-full overflow-hidden',
                token.compact
                    ? 'ffz--rich-header ffz--compact-header items-center'
                    : 'justify-center flex-col grow'
            ]
        }, content);
        
        if ( ! token.compact ) {
            out = createElement(ctx, 'div', {
                class: 'flex ffz--rich-header items-center'
            }, [
                right ? out : null,
                image,
                right ? null : out
            ] as any);
        }

    } else {
        out = createElement(ctx, 'div', {
            class: [
                'flex w-full overflow-hidden',
                token.compact
                    ? 'ffz--rich-header ffz--compact-header items-center'
                    : 'justify-center flex-col grow'
            ]
        }, content);

        if ( ! token.compact )
            out = createElement(ctx, 'div', {
                class: 'flex ffz--rich-header'
            }, [
                createElement(ctx, 'div', {class: 'ffz--header-image mr-2'}),
                out
            ] as any);
    }

    if ( background )
        out = createElement(ctx, 'div', {
            class: 'ffz--rich-header--background dark bg-black'
        }, [
            createElement(ctx, 'div', {
                class: 'ffz--rich-header__background'
            }, [background] as any),
            out
        ] as any);

    return out;

}