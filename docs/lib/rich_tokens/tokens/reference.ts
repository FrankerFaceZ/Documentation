import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { RichToken, Token } from "../types";

export type ReferenceToken = RichToken & {
    type: 'ref',
    name: string;
};


export function isReferenceToken(token: Token | undefined): token is ReferenceToken {
    return (token as RichToken)?.type === 'ref';
}


export default function ReferenceTokenHandler<T extends RichTokenContext>(token: ReferenceToken, ctx: T): RenderResult<T> {
    const fragment = ctx.fragments?.[token.name];
    if ( fragment )
        return render(fragment, ctx) as RenderResult<T>;
    return null as RenderResult<T>;
}