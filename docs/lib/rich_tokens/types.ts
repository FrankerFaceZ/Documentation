import { BoxToken } from "./tokens/box";
import { ConditionalToken } from "./tokens/conditional";
import { FieldSetToken } from "./tokens/fieldset";
import { FormatToken } from "./tokens/format";
import { GalleryToken } from "./tokens/gallery";
import { HeaderToken } from "./tokens/header";
import { I18nToken } from "./tokens/i18n";
import { I18nSelectToken } from "./tokens/i18n_select";
import { IconToken } from "./tokens/icon";
import { ImageToken } from "./tokens/image";
import { LinkToken } from "./tokens/link";
import { OverlayToken } from "./tokens/overlay";
import { PlayerToken } from "./tokens/player";
import { ReferenceToken } from "./tokens/reference";
import { StyleToken } from "./tokens/style";
import { TagToken } from "./tokens/tag";

export type RichTokenTypes = BoxToken | ConditionalToken | FieldSetToken | FormatToken | GalleryToken | HeaderToken | I18nSelectToken | I18nToken | IconToken | ImageToken | LinkToken | OverlayToken | PlayerToken | ReferenceToken | StyleToken | TagToken;

export type Token = Token[] | RichTokenTypes | RichToken | PrimitiveToken | null;

export type PrimitiveToken = string | number | boolean;

export type RichToken = {
    type: string
};

export type ContentToken = RichToken & {
    content: Token;
};


export type RichTokenErrorDocument = {
    error: Token | boolean;
    message: Token;
};

export type RichTokenDocument = {
    v: number;

    accent?: string | null;
    i18n_prefix?: string | null;
    fragments?: Record<string, Token>;
    actions?: any[],
    special?: any,

    short: Token;
    mid?: Token;
    full?: Token;

    unsafe: boolean;
    urls: UrlInfo[]
};

export type UrlInfo = {
    url: string;
    resolver: string | null;
    unsafe: boolean;
    shortened: boolean;
    flags: string[]
};

export enum SpacingType {
    Padding = 'pd',
    Margin = 'mg'
};

export const SPACING_SIDES = ['', '-x', '-y', '-t', '-l', '-r', '-b'] as const;

export type PaddingKey = `pd${typeof SPACING_SIDES[number]}`;

export type MarginKey = `mg${typeof SPACING_SIDES[number]}`;

export type SpacingKey = PaddingKey | MarginKey;

export type SpacingToken = {
    [K in SpacingKey]?: string | number;
};


export const VALID_COLORS = ['base', 'alt', 'alt-2'] as const;
export const VALID_TEXT_COLORS = [...VALID_COLORS, 'link'] as const;

export type ValidColor = typeof VALID_COLORS[number];
export type ValidTextColor = typeof VALID_TEXT_COLORS[number];

export type ColorToken = {
    background?: ValidColor | string;
    color?: ValidColor | string;
};
