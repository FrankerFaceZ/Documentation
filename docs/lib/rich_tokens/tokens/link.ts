import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { ContentToken, RichToken, Token } from "../types";
import { createElement } from "../utilities";

export type LinkToken = ContentToken & {
    type: 'link';

    url: string;

    interactive?: boolean;
    tooltip?: boolean;
    embed?: boolean;
    no_color?: boolean;
}


export function isLinkToken(token: Token | undefined): token is LinkToken {
    return (token as RichToken)?.type === 'link';
}


export default function LinkTokenHandler<T extends RichTokenContext>(
    token: LinkToken,
    ctx: T
): RenderResult<T> {

    if ( token.content === undefined )
        token.content = token.url;

    const content = render(token.content, ctx),
        classes = [];

    if ( token.interactive )
        classes.push(`hover:no-underline text-inherit hover:text-inherit ffz-interactable ffz-interactable--hover-enabled ffz-interactable--default tw-interactive`);

	if ( token.tooltip !== false )
        classes.push('ffz-tooltip');

	if ( token.embed )
        classes.push(`block border rounded-lg my-2 p-2`);

	if ( token.no_color )
        classes.push(`text-inherit`);

    const listeners: Record<string, any> = {};
    if ( ctx.onClickLink )
        listeners.click = ctx.onClickLink;

    return createElement(ctx, 'a', {
        class: classes,
        attrs: {
            rel: 'noopener noreferrer',
            target: '_blank',
            'data-tooltip-type': 'link',
            href: token.url
        },
        on: listeners
    }, content);

}