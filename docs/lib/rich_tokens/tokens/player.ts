import { RenderResult, RichTokenContext } from "../context";
import { render } from "../render";
import { ContentToken, RichToken, Token } from "../types";
import { createElement } from "../utilities";

export type PlayerSource = {
    type: string;
    src: string;
}

export type PlayerToken = ContentToken & {
    type: 'player';

    iframe?: string;
    sources?: PlayerSource[];

    audio?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    silent?: boolean;
    poster?: string;

    aspect?: number | string;
    active_aspect?: number | string;

    markdown?: boolean;
};

export function isPlayerToken(token: Token | undefined): token is PlayerToken {
    return (token as RichToken)?.type === 'player';
}


function handlePlayerClick(token: PlayerToken, id: number, ctx: RichTokenContext, event: PointerEvent) {
    const target = event.currentTarget,
        is_av = target instanceof HTMLVideoElement || target instanceof HTMLAudioElement;

    if ( is_av || ctx.togglePlayer ) {
        event.preventDefault();
        event.stopPropagation();
    }

    if ( is_av ) {
        if ( target.paused )
            target.play();
        else
            target.pause();

    } else if ( ctx.togglePlayer )
        ctx.togglePlayer(id);
}


export default function PlayerTokenHandler<T extends RichTokenContext>(
    token: PlayerToken,
    ctx: T
): RenderResult<T> {

    // Make a unique ID for this player, within the context.
	const id = ctx._last_player = (ctx._last_player || 0) + 1,
        active = ctx.player_state?.[id];

    const handler = handlePlayerClick.bind(null, token, id, ctx);

    if ( ! active && (token.content || token.iframe) )
        return renderPlayerContent(handler, token, ctx);

    if ( token.iframe )
        return renderPlayerIframe(token, ctx);

    // Render an old fahsioned player.
    if ( ! token.sources )
        return null as RenderResult<T>;

    const autoplay = token.autoplay ?? false,
		loop = token.loop ?? false,
		playing = active ?? autoplay,
		controls = ! token.silent || ! autoplay,

        muted = token.silent ? true : (active == null && autoplay),
        style: Record<string, string> = {},
	
        aspect = token.active_aspect ?? token.aspect;

    if ( aspect )
        style.aspectRatio = String(aspect);

    return createElement(ctx, token.audio ? 'audio' : 'video', {
        style,
        attrs: {
            autoplay: playing,
            loop,
            controls,
            poster: token.poster
        },
        domProps: {
            muted
        },
        on: {
            click: handler
        }
    }, token.sources.map(source => createElement(ctx, 'source', {
        attrs: {
            type: source.type,
            src: source.src
        }
    }) as any));

}


function renderPlayerContent<T extends RichTokenContext>(
    handler: any,
    token: PlayerToken,
    ctx: T
): RenderResult<T> {

    const content = render(token.content, ctx, token.markdown),
        classes = ['ffz--rich-player'],
        style: Record<string, string> = {};

    if ( token.aspect )
        style.aspectRatio = String(token.aspect);

    return createElement(ctx, 'div', {
        class: classes,
        style,
        on: {
            click: handler
        }
    }, content);

}


function renderPlayerIframe<T extends RichTokenContext>(
    token: PlayerToken,
    ctx: T
): RenderResult<T> {

    const style: Record<string, string> = {},
        attrs = {
            src: token.iframe,
			frameborder: 0,
			allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
			allowfullscreen: true
        };

    const aspect = token.active_aspect ?? token.aspect;
    if ( aspect )
        style.aspectRatio = String(aspect);

    return createElement(ctx, 'iframe', {
        style,
        attrs
    });

}