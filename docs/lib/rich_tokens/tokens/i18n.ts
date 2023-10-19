import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { RichToken, Token } from "../types";

export type I18nToken = RichToken & {
    type: 'i18n';

    key: string;
    phrase: string;

    content: {
        [key: string]: Token
    };

    markdown?: boolean;
};


export function isI18nToken(token: Token | undefined): token is I18nToken {
    return (token as RichToken)?.type === 'i18n';
}


export default function I18nTokenHandler<T extends RichTokenContext>(
    token: I18nToken,
    ctx: T
): RenderResult<T> {

    if ( ! token.phrase ) {
        console.warn(`Skipping i18n tag with no phrase`, token);
        return null as RenderResult<T>;
    }

    let key = token.key;
    if ( ctx.i18nPrefix )
        key = `${ctx.i18nPrefix}.${key}`;

    return render(
        ctx.i18n.tList(key, token.phrase, token.content),
        ctx,
        token.markdown
    ) as RenderResult<T>;

}