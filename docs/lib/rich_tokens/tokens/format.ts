import { RenderResult, RichTokenContext } from "../context";
import { RichToken, Token } from "../types";

export type FormatToken = RichToken & {
    type: 'format';

    format: string;
    value: string | number;
    options?: any;
}


export function isFormatToken(token: Token | undefined): token is FormatToken {
    return (token as RichToken)?.type === 'format';
}


export default function FormatTokenHandler<T extends RichTokenContext>(
    token: FormatToken,
    ctx: T
): RenderResult<T> {

    const type = token.format,
        val = token.value,
        opt = token.options;

    let out;

    if ( type === 'date' )
		out = ctx.i18n.formatDate(val, opt);
	else if ( type === 'time' )
		out = ctx.i18n.formatTime(val, opt);
	else if ( type === 'datetime' )
		out = ctx.i18n.formatDateTime(val, opt)
	else if ( type === 'relative' )
		out = ctx.i18n.formatRelativeTime(val, opt);
	else if ( type === 'duration' )
		out = ctx.i18n.formatDuration(val, opt);
	else if ( type === 'number' )
		out = ctx.i18n.formatNumber(val, opt);
    else {
        console.warn('Unknown format type:', type, val, opt);
        out = String(val);
    }

    if ( ctx._text_capture )
        ctx._text_capture.push(out);

    return out as RenderResult<T>;

}