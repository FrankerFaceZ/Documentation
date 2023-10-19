import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { RichToken, Token } from "../types";
import { createElement } from "../utilities";

export type GalleryToken = RichToken & {
    type: 'gallery';

    items: Token[];
};

export function isGalleryToken(token: Token | undefined): token is GalleryToken {
    return (token as RichToken)?.type === 'gallery';
}


export default function GalleryTokenHandler<T extends RichTokenContext>(
    token: GalleryToken,
    ctx: T
): RenderResult<T> {

    if ( ! Array.isArray(token.items) || ! token.items.length )
        return null as RenderResult<T>;

    // We do things a little weird, but this is all so that images line up
    // the same way as they do on Twitter / Mastodon / Bluesky / whatever.
    let first_column: RenderResult<T>[][] = [],
        second_column: RenderResult<T>[][] = [],
        first = true,
        i = 0;

    for(const item of token.items) {
        const content = render(item, ctx);
        if ( content ) {
            (first ? first_column : second_column).push(content);
            first = ! first;
            i++;
            if ( i >= 4 )
                break;
        }
    }

    if ( second_column.length && first_column.length > second_column.length )
        second_column.push(first_column.pop() as any);

    if ( ! i )
        return null as RenderResult<T>;

    const columns = [];

    columns.push(createElement(ctx, 'div', {
        class: 'ffz--gallery-column',
        key: 'first-col',
        attrs: {
            'data-items': first_column.length
        }
    }, first_column as any));

    if ( second_column.length )
        columns.push(createElement(ctx, 'div', {
            class: 'ffz--gallery-column',
            key: 'second-col',
            attrs: {
                'data-items': second_column.length
            }
        }, second_column as any));

    return createElement(ctx, 'div', {
        class: 'ffz--rich-gallery',
        attrs: {
            'data-items': first_column.length + second_column.length
        }
    }, columns as any);

}