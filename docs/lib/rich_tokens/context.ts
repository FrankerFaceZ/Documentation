import type { VNode, VNodeArrayChildren } from "vue";
import type { ReactNode } from 'react';
import type React from "react";
import { Token } from "./types";



export type OnLoadEvent = (event: Event) => void;

export type OnClickLinkEvent = (event: MouseEvent) => boolean;

export type TogglePlayerDelegate = (playerId: number) => void;


export type ThemeColors = {
    base: string;
    alt: string;
    'alt-2': string;
    link: string;
};


export type BaseRichTokenContext = {

    // Rich Token Document Specifics

    /**
     * A prefix string to be prepended to all i18n keys used in i18n tokens.
     * This is optional. If present, this will be combined with existing
     * i18n keys using a period (`.`) as a separator.
     */
    i18nPrefix?: string | null,

    /**
     * A map of fragments to be used when rendering a rich token document.
     */
    fragments?: Record<string, Token>;


    // Environment

    theme: {
        text: ThemeColors & {
            link: string;
        };
        background?: ThemeColors & {
            [K in keyof ThemeColors as `text-${K}`]: ThemeColors[K];
        };
    };

    /**
     * When encountering a ConditionToken, whether or not the token should be
     * skipped if its media flag is true.
     */
    allowMedia?: boolean;

    /**
     * When encountering a ConditionToken, or an image token, whether or not
     * the token should be skipped if its sfw flag is false.
     */
    allowUnsafe?: boolean;

    /**
     * If this is set, the provided function will be attached to certain
     * rendered tokens, including `<img>`, `<video>`, and `<audio>` elements
     * and called whenever the elements fire their `onload` events.
     */
    onLoad?: OnLoadEvent | null;

    /**
     * If this is set, the provided function will be attached to created link
     * elements' `click` event.
     */
    onClickLink?: OnClickLinkEvent | null;


    // Things

    /**
     * The markdown renderer is used for rendering a string of markdown into
     * DOM / virtualdom for inclusion in a render.
     */
    markdownRenderer?: MarkdownRenderer<any>;

    /**
     * The i18n provider that should be used for translating and
     * formatting values.
     */
    i18n: any;

    /**
     * A map of custom token renderers, if you need to add support for
     * custom types or override the default behavior.
     */
    customTypes?: Record<string, TokenRenderer<any,any>>;

    /**
     * A special token renderer that is invoked whenever an unknown token
     * type is encountered. If this isn't set, a message will be logged
     * to the console instead.
     */
    unknownTypeHandler?: TokenRenderer<any,any>;


    togglePlayer?: (id: number) => void;

    player_state?: Record<number, boolean>;


    // Protected / Set Internally

    /**
     * The ID number of the last player token, or null if no player token
     * has been encountered yet.
     */
    _last_player?: number | null;

    /**
     * An array of strings. When this is not null, and a
     * token renders text out, the text should be added
     * to this array.
     */
    _text_capture?: string[] | null;

    /**
     * Whether or not markdown rendering for simple text
     * is enabled.
     */
    _is_markdown?: boolean;


};


export type RichTokenContextVue3 = BaseRichTokenContext & {

    type: 'vue' | 'vue3';

    markdownRenderer?: MarkdownRenderer<RichTokenContextVue3>;
}

export type RichTokenContextVue2 = BaseRichTokenContext & {

    type: 'vue2';

    createElement: any;
    markdownRenderer?: MarkdownRenderer<RichTokenContextVue2>;
}

export type RichTokenContextReact = BaseRichTokenContext & {

    type: 'react';

    createElement: typeof React.createElement;
    Fragment?: typeof React.Fragment;
    markdownRenderer?: MarkdownRenderer<RichTokenContextReact>;
}


export type MarkdownRenderer<T extends RichTokenContext> = (input: string, ctx: T) => RenderResult<T>;


export type RichTokenContext = RichTokenContextVue3 | RichTokenContextVue2 | RichTokenContextReact;

// Taken from Vue
type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void

export type RenderResult<T extends RichTokenContext> =
    T extends RichTokenContextVue3 ? VNodeChildAtom | VNodeArrayChildren :
    T extends RichTokenContextReact ? ReactNode :
    never | never[];


export type TokenRenderer<T extends RichTokenContext, U extends Token> =
    (token: U, ctx: T) => RenderResult<T>;
