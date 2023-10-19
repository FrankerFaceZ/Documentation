import { RenderResult, RichTokenContext } from "../context";
import { RichToken, Token } from "../types";
import { createElement } from "../utilities";

export type IconToken = RichToken & {
    type: 'icon';
    name: string;
}


export function isIconToken(token: Token | undefined): token is IconToken {
    return (token as RichToken)?.type === 'icon';
}

const BRANDS = [
    'twitter', 'facebook', 'tiktok', 'github', 'discord', 'youtube', 'mastodon'
];

export default function IconTokenHandler<T extends RichTokenContext>(
    token: IconToken,
    ctx: T,
    tag: string = 'span'
): RenderResult<T> {

    const name = token.name;
    if ( ! name?.length )
        return null as RenderResult<T>;

    if ( token.name === 'youtube-play' )
        token.name = 'youtube';

    if ( token.name === 'verified' )
        token.name = 'check';

    // TODO: Function to translate icon names to classes.
    const is_brand = BRANDS.includes(token.name);

    return createElement(ctx, tag, {
        class: `${is_brand ? 'fa-brands' : 'fa'} fa-${token.name} mr-1`
    });

}