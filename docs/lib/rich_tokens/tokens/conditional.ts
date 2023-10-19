import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { ContentToken, RichToken, Token } from "../types";

export type ConditionalToken = ContentToken & {
    type: 'conditional',

    alternative?: Token,

    media?: boolean,
    nsfw?: boolean
}


export function isConditionalToken(token: Token | undefined): token is ConditionalToken {
    return (token as RichToken)?.type === 'conditional';
}


export default function ConditionalTokenHandler<T extends RichTokenContext>(token: ConditionalToken, ctx: T): RenderResult<T> {

    let passed = true;

    if ( token.media != null && token.media != ctx.allowMedia )
        passed = false;

    if ( token.nsfw && ! ctx.allowUnsafe )
        passed = false;

    const content = passed ? token.content : token.alternative;

    if ( content )
        return render(content, ctx) as RenderResult<T>;

    return null as RenderResult<T>;

}