import { Fragment, h } from "vue";
import { RenderResult, RichTokenContext, RichTokenContextReact, RichTokenContextVue2, RichTokenContextVue3 } from "./context";
import { ColorToken, RichToken, RichTokenDocument, SPACING_SIDES, SpacingKey, SpacingToken, SpacingType, Token } from "./types";
import { type ReactNode } from "react";

export function pluckColor(ctx: RichTokenContext, target: 'text' | 'background', key: string): string {
    return (ctx?.theme?.[target] as any)?.[key] ?? '';
}


/**
 * Determine if the provided token is a reference token, and if it is,
 * resolve the reference using the context's fragments. Otherwise, return
 * the existing token.
 *
 * @param token The {@link Token} to resolve.
 * @param ctx The {@link RichTokenContext} to resolve it within.
 * @returns The resolved {@link Token}
 */
export function resolveToken(token: Token | null | undefined, ctx: RichTokenContext) {
    // TODO: Infinite loop detection.

    if ( (token as any)?.type === 'ref' )
        return ctx.fragments?.[(token as any).name] ?? null;

    return token ?? null;
}


export function canShowImage(token: Token | undefined, ctx: RichTokenContext) {
    const sfw = (token as any)?.sfw;
    if ( sfw == null )
        return true;

    return sfw || ctx.allowUnsafe;
}


// Used Tailwind Classes:
// rounded-full rounded-sm rounded-md rounded-lg
export function getRoundClass(value: number | string | undefined, ctx: RichTokenContext) {
    let klass;
    if ( typeof value === 'string' )
        klass = value;
    else if ( value === -1 )
        klass = 'full';
    else if ( value === 1 )
        klass = 'sm';
    else if ( value === 2 )
        klass = 'md';
    else if ( value === 3 )
        klass = 'lg';
    else
        return null;

    return `rounded-${klass}`;
}


// Used Tailwind Classes
// p-2  pl-2  pt-2  pr-2  pb-2  px-2  py-2
// p-4  pl-4  pt-4  pr-4  pb-4  px-4  py-4
// p-8  pl-8  pt-8  pr-8  pb-8  px-8  py-8
// p-12 pl-12 pt-12 pr-12 pb-12 px-12 py-12
// m-2  ml-2  mt-2  mr-2  mb-2  mx-2  my-2
// m-4  ml-4  mt-4  mr-4  mb-4  mx-4  my-4
// m-8  ml-8  mt-8  mr-8  mb-8  mx-8  my-8
// m-12 ml-12 mt-12 mr-12 mb-12 mx-12 my-12
export const VALID_PADDING: Record<string, string> = {
    small: '2', // '05', // 0.5rem
    normal: '4', // '1', //   1rem
    large: '8', // '2',  //   2rem
    huge: '12', // '3'   //   3rem
};


export function applyColors(
    ctx: RichTokenContext,
    token: ColorToken,
    classes: string[],
    styles: Record<string, string>
) {

    if ( token.background ) {
        let key = token.background;
        if ( key === 'text' )
            key = 'text-base';

        const val = pluckColor(ctx, 'background', key);
        if ( val?.length )
            classes.push(val);
        else
            styles.backgroundColor = token.background;
    }

    if ( token.color ) {
        let key = token.color;
        if ( key === 'background' )
            key = 'background-base';

        const val = pluckColor(ctx, 'text', key);
        if ( val?.length )
            classes.push(val);
        else
            styles.color = token.color;
    }

}


export function applySpacing(
    type: SpacingType,
    token: SpacingToken,
    classes: string[],
    styles: Record<string, string>
) {
    for(const mode of SPACING_SIDES) {
        const key = `${type}${mode}` as SpacingKey,
            value = String(token[key]);

        if ( value ) {
            if ( value in VALID_PADDING )
                classes.push(`${type === 'pd' ? 'p' : 'm'}${mode.slice(1)}-${VALID_PADDING[value]}`);
            else if ( styles ) {

                const thing = type === 'pd' ? 'padding' : 'margin';
                if ( mode === '' )
                    styles[thing] = value;
                if ( mode === '-x' || mode === '-l' )
                    styles[`${thing}Left`] = value;

                if ( mode === '-x' || mode === '-r' )
                    styles[`${thing}Right`] = value;

                if ( mode === '-y' || mode === '-t' )
                    styles[`${thing}Top`] = value;

                if ( mode === '-y' || mode === '-b' )
                    styles[`${thing}Bottom`] = value;
            }
        }
    }
}



export function isVue3(ctx: RichTokenContext): ctx is RichTokenContextVue3 {
    return ctx.type === 'vue3' || ctx.type === 'vue';
}


export function isVue2(ctx: RichTokenContext): ctx is RichTokenContextVue2 {
    return ctx.type === 'vue2';
}


export function isReact(ctx: RichTokenContext): ctx is RichTokenContextReact {
    return ctx.type === 'react';
}


export function isRichToken(token: Token | undefined): token is RichToken {
    return typeof (token as RichToken)?.type === 'string';
}


function vue3ArrayMerge(original: any, extra: any) {
    if ( ! extra )
        return original;

    if ( Array.isArray(original) ) {
        original.push(extra);
        return original;
    } else if ( original )
        return [original, extra];
    else
        return extra;
}


type VueClass = string | Record<string, boolean> | VueClass[] | null;

function flattenVueClassForReact(original: VueClass): string | null {
    if ( ! original )
        return null;

    if ( typeof original === 'string' )
        return original;

    if ( Array.isArray(original) )
        return original
            .map(flattenVueClassForReact)
            .filter(x => x?.length)
            .join(' ');

    return Object.entries(original)
        .filter(pair => pair[1])
        .map(pair => pair[0])
        .join(' ');
}

type VueStyle = Record<string, string> | VueStyle[];

function flattenVueStyleForReact(original: VueStyle): Record<string, string> | null {
    if ( ! original )
        return null;

    if ( Array.isArray(original) )
        return Object.assign({}, ...original.map(flattenVueStyleForReact));

    return original;
}


export function normalizeResponse(data?: any, error_image: string = 'https://cdn.frankerfacez.com/emoticon/26608/4'): RichTokenDocument | null {
    if ( ! data )
        return null;

    if ( typeof data === 'string' )
        data = {
            error: data
        };

    if ( data.error && data.message )
        data.error = data.message;

    if ( data.error )
        return {
            v: 5,
            short: {
                type: 'header',
                image: {
                    type: 'image',
                    url: error_image
                },
                title: {
                    type: 'i18n',
                    key: 'card.error',
                    phrase: 'An error occurred.'
                },
                subtitle: data.error as Token
            },
			status: data.status ?? undefined,
            unsafe: data.unsafe ?? false,
            urls: Array.isArray(data.urls) ? data.urls : []
        };


    return data as RichTokenDocument;
}


const STUPID_REACT_CAPITALIZATION_MAP_BECAUSE_FACEBOOK_DEVS_WANT_TO_FEEL_SPECIAL = {
    allowfullscreen: 'allowFullScreen',
    autocapitalize: 'autoCapitalize',
    autocomplete: 'autoComplete',
    autofocus: 'autoFocus',
    autoplay: 'autoPlay',
    datetime: 'dateTime',
    enctype: 'encType',
    frameborder: 'frameBorder',
    spellcheck: 'spellCheck',
    srcset: 'srcSet'
} as const;

const STUPID_REACT_VALUES = Object.entries(STUPID_REACT_CAPITALIZATION_MAP_BECAUSE_FACEBOOK_DEVS_WANT_TO_FEEL_SPECIAL);


export function createElement<T extends RichTokenContext>(
    ctx: RichTokenContext,
    type: string,
    props?: any,
    children?: RenderResult<T>[] | RenderResult<T> | null
): RenderResult<T> {

    if ( ctx.type === 'vue2' )
        return ctx.createElement(type, props, children as any) as RenderResult<T>;

    // Vue3 and React both do similar things, mostly.
    // Transform out of the Vue 2 structure.
    if ( props?.staticClass != null ) {
        props.class = vue3ArrayMerge(props.class, props.staticClass);
        delete props.staticClass;
    }

    if ( props?.staticStyle != null ) {
        props.style = vue3ArrayMerge(props.style, props.staticStyle);
        delete props.staticStyle;
    }

    if ( props?.attrs ) {
        for(const [key,val] of Object.entries(props.attrs))
            props[key] = val;

        delete props.attrs;
    }

    if ( props?.domProps ) {
        for(const [key,val] of Object.entries(props.domProps))
            props[key] = val;

        delete props.domProps;
    }

    if ( props?.on ) {
        for(const [key, val] of Object.entries(props.on)) {
            const first = key.slice(0, 1).toUpperCase(),
                rest = key.slice(1);

            props[`on${first}${rest}`] = val;
        }

        delete props.on;
    }

    if ( ctx.type === 'vue3' || ctx.type === 'vue' )
        return h(type, props, children as any) as RenderResult<T>;

    // One last sanity check, for the road

    if ( ctx.type !== 'react' )
        throw new Error('Unsupported context type');

    // Now, sanitize things into the format React.createElement wants.
    // It's gross, I know.

    if ( props?.innerHTML != null ) {
        props.dangerouslySetInnerHTML = {
            __html: props.innerHTML
        };
        delete props.innerHTML;
    }

    if ( props?.class !== undefined ) {
        props.className = flattenVueClassForReact(props.class);
        delete props.class;
    }

    if ( props?.style )
        props.style = flattenVueStyleForReact(props.style);

    // Fix Facebook Devs
    for(const [key, newkey] of STUPID_REACT_VALUES) {
        if ( props[key] !== undefined ) {
            props[newkey] = props[key];
            delete props[key];
        }
    }

    if ( Array.isArray(children) )
        return ctx.createElement(
            type,
            props,
            ...children as ReactNode[]
        ) as RenderResult<T>;

    return ctx.createElement(
        type,
        props,
        children as ReactNode
    ) as RenderResult<T>;
}
