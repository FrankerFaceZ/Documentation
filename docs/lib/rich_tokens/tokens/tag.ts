import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { ContentToken, RichToken, Token } from "../types";
import { createElement } from "../utilities";

export type TagToken = ContentToken & {
    type: 'tag';

    tag?: string;
    attrs?: Map<string, string>;
    class?: string;

    markdown?: boolean;
}

export function isTagToken(token: Token | undefined): token is TagToken {
    return (token as RichToken)?.type === 'tag';
}


export const ALLOWED_TAGS = [
	'a', 'abbr', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'blockquote', 'br',
	'caption', 'code', 'col', 'colgroup', 'data', 'dd', 'div', 'dl', 'dt', 'em',
	'figcaption', 'figure', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header',
	'hr', 'i', 'img', 'li', 'main', 'nav', 'ol', 'p', 'picture', 'pre', 's', 'section',
	'source', 'span', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot',
	'th', 'thead', 'time', 'tr', 'track', 'u', 'ul', 'video', 'wbr'
];

export const ALLOWED_ATTRS: Record<string, string[]> = {
	a: ['href'],
	audio: ['autoplay', 'controls', 'loop', 'muted', 'preload', 'src'],
	bdo: ['dir'],
	col: ['span'],
	colgroup: ['span'],
	data: ['value'],
	img: ['alt', 'height', 'sizes', 'src', 'srcset', 'width'],
	source: ['src', 'srcset', 'type', 'media', 'sizes'],
	td: ['colspan', 'headers', 'rowspan'],
	th: ['abbr', 'colspan', 'headers', 'rowspan', 'scope'],
	time: ['datetime'],
	track: ['default', 'kind', 'label', 'src', 'srclang'],
	video: ['autoplay', 'controls', 'height', 'loop', 'muted', 'poster', 'preload', 'src', 'width'],
};

export const PROPS = [
	'muted'
];

export const GLOBAL_ATTRS = ['style', 'title'];


export default function TagTokenHandler<T extends RichTokenContext>(
    token: TagToken,
    ctx: T
): RenderResult<T> {

    const tag = String(token.tag || 'span').toLowerCase();
    if ( ! ALLOWED_TAGS.includes(tag) ) {
        console.warn('Skipping disallowed tag:', tag);
        return null as RenderResult<T>;
    }

    const attrs: Record<string, string> = {},
        props: Record<string, string> = {};

	if ( token.attrs ) {
		const allowed = ALLOWED_ATTRS[tag] || [];
		for(const [key, val] of Object.entries(token.attrs)) {
			if ( ! allowed.includes(key) && ! key.startsWith('data-') && ! GLOBAL_ATTRS.includes(key) )
				console.warn(`Skipping disallowed attribute for tag ${tag}:`, key);
			else if ( PROPS.includes(key) )
				props[key] = val;
			else
				attrs[key] = val;
		}
	}

    // TODO: onLoad for img/picture/video/audio

    const content = render(token.content, ctx, token.markdown);

    return createElement(ctx, tag, {
        class: token.class ?? null,
        domProps: props,
        attrs
    }, content);

}