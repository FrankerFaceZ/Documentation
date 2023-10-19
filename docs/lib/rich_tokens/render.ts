import { RenderResult, RichTokenContext, TokenRenderer } from "./context";
import { Token } from "./types";

import BoxTokenHandler from "./tokens/box";
import ConditionalTokenHandler from "./tokens/conditional";
import ReferenceTokenHandler from "./tokens/reference";
import FormatTokenHandler from "./tokens/format";
import HeaderTokenHandler from "./tokens/header";
import IconTokenHandler from "./tokens/icon";
import ImageTokenHandler from "./tokens/image";
import I18nSelectTokenHandler from "./tokens/i18n_select";
import LinkTokenHandler from "./tokens/link";
import I18nTokenHandler from "./tokens/i18n";
import GalleryTokenHandler from "./tokens/gallery";
import OverlayTokenHandler from "./tokens/overlay";
import StyleTokenHandler from "./tokens/style";
import TagTokenHandler from "./tokens/tag";
import PlayerTokenHandler from "./tokens/player";
import FieldSetTokenHandler from "./tokens/fieldset";

// TODO: More elegant way to handle this.
const TOKEN_HANDLERS: Record<string, TokenRenderer<any,any>> = {
    box: BoxTokenHandler,
    conditional: ConditionalTokenHandler,
    fieldset: FieldSetTokenHandler,
    flex: BoxTokenHandler,
    format: FormatTokenHandler,
    gallery: GalleryTokenHandler,
    header: HeaderTokenHandler,
    icon: IconTokenHandler,
    image: ImageTokenHandler,
    i18n: I18nTokenHandler,
    i18n_select: I18nSelectTokenHandler,
    link: LinkTokenHandler,
    overlay: OverlayTokenHandler,
    player: PlayerTokenHandler,
    ref: ReferenceTokenHandler,
    style: StyleTokenHandler,
    tag: TagTokenHandler
};


/**
 * Render a {@link Token} and return a {@link RenderResult} along with a string
 * of captured text.
 * @param token The {@link Token} to render.
 * @param ctx The {@link RichTokenContext} to render it within.
 * @param markdown If set to a boolean, override the markdown rendering
 * behavior of text segments within this token.
 * @returns A {@link RenderResult} and string of captured text.
 */
export function renderWithCapture<T extends RichTokenContext>(token: Token, ctx: T, markdown: boolean | null = null) {

    const old_capture = ctx._text_capture;
    ctx._text_capture = [];

    const content = render(token, ctx, markdown);

    let title = ctx._text_capture.length > 0
        ? ctx._text_capture.join('').trim()
        : null;

    if ( ! title?.length )
        title = null;

    ctx._text_capture = old_capture;

    return {
        content,
        title
    };

}


/**
 * Render a {@link Token} and return a {@link RenderResult}.
 * 
 * Depending on the provided {@link RichTokenContext}, this can return a
 * DOM node for inserting directly into a page, or a virtual dom snippet
 * for use with Vue or React.
 * 
 * @param token The {@link Token} to render.
 * @param ctx The {@link RichTokenContext} to render it within.
 * @param markdown If set to a boolean, overrides the markdown rendering
 * behavior of text segments within this token.
 * @returns The {@link RenderResult}.
 */
export function render<T extends RichTokenContext>(
    token: Token,
    ctx: T,
    markdown: boolean | null = null
): RenderResult<T>[] | null {

    if ( token == null )
        return null;

    const old_markdown = ctx._is_markdown;
    if ( markdown != null )
        ctx._is_markdown = markdown;

    let out: RenderResult<T>[] = [];

    const is_array = Array.isArray(token),
        length = is_array ? token.length : 1;

    for(let i = 0; i < length; i++) {
        const entry = is_array ? token[i] : token;
        if ( entry == null )
            continue;

        else if ( Array.isArray(entry) ) {
            const result = render(entry, ctx);
            if ( result )
                out = out.concat(result as RenderResult<T>[]);

        } else if ( typeof entry !== 'object' ) {
            const val = String(entry);
            if ( ctx._text_capture )
                ctx._text_capture.push(val);

            if ( ctx._is_markdown && ctx.markdownRenderer ) {
                const result = ctx.markdownRenderer(val, ctx);
                if ( result )
                    out.push(result as RenderResult<T>);

            } else
                out.push(val as RenderResult<T>);

        } else {
            const type = entry.type;
            let handler = ctx.customTypes?.[type];
            if ( ! handler )
                handler = TOKEN_HANDLERS[type] ?? ctx.unknownTypeHandler;

            if ( ! handler ) {
                console.warn(`Skipping unknown token type`, type, entry);
                continue;
            }

            const result = handler(entry, ctx);
            if ( Array.isArray(result) )
                out = out.concat(result as RenderResult<T>[]);
            else if ( result != null )
                out.push(result as RenderResult<T>);
        }

    }

    ctx._is_markdown = old_markdown;

    if ( ! out.length )
        return null;

    return out;

}
