import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { RichToken, Token } from "../types";
import { createElement, pluckColor } from "../utilities";

export type FieldEntry = {
    name: Token;
    value: Token;
    icon?: Token;
    inline?: boolean;
}

export type FieldSetToken = RichToken & {
    type: 'fieldset';

    fields: FieldEntry[];
    markdown?: boolean;
}

export function isFieldSetToken(token: Token | undefined): token is FieldSetToken {
    return (token as RichToken)?.type === 'fieldset';
}

export default function FieldSetTokenHandler<T extends RichTokenContext>(
    token: FieldSetToken,
    ctx: T
): RenderResult<T> {

    const fields: RenderResult<T>[] = [];
    if ( Array.isArray(token.fields) )
        for(const field of token.fields) {
            if ( ! field )
                continue;

            const name = render(field.name, ctx, token.markdown),
                value = render(field.value, ctx, token.markdown),
                icon = field.icon ? render(field.icon, ctx, token.markdown) : null;

            if ( ! name || ! value )
                continue;

            fields.push(createElement(ctx, 'div', {
                class: [
                    'ffz--field',
                    field.inline ? 'ffz--field-inline' : false,
                    icon ? 'ffz--field-icon' : false
                ]
            }, [
                icon ? createElement(ctx, 'div', {class: 'ffz--field__icon'}, icon) : null,
                createElement(ctx, 'div', {class: 'ffz--field__name font-semibold'}, name),
                createElement(ctx, 'div', {class: `ffz--field__value ${pluckColor(ctx, 'text', 'alt')}`}, value)
            ] as any));
        }

    if ( ! fields.length )
        return null as RenderResult<T>;

    return createElement(ctx, 'div', {
        class: 'ffz--fields'
    }, fields);

}