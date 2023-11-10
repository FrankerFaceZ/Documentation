[frankerfacez](../README.md) / [Exports](../modules.md) / [utilities/translation-core](../modules/utilities_translation_core.md) / default

# Class: default

[utilities/translation-core](../modules/utilities_translation_core.md).default

## Table of contents

### Constructors

- [constructor](utilities_translation_core.default.md#constructor)

### Properties

- [cache](utilities_translation_core.default.md#cache)
- [currencyFormats](utilities_translation_core.default.md#currencyformats)
- [defaultDateFormat](utilities_translation_core.default.md#defaultdateformat)
- [defaultDateTimeFormat](utilities_translation_core.default.md#defaultdatetimeformat)
- [defaultLocale](utilities_translation_core.default.md#defaultlocale)
- [defaultTimeFormat](utilities_translation_core.default.md#defaulttimeformat)
- [formats](utilities_translation_core.default.md#formats)
- [numberFormats](utilities_translation_core.default.md#numberformats)
- [parser](utilities_translation_core.default.md#parser)
- [phrases](utilities_translation_core.default.md#phrases)
- [transformation](utilities_translation_core.default.md#transformation)
- [types](utilities_translation_core.default.md#types)
- [warn](utilities_translation_core.default.md#warn)

### Accessors

- [locale](utilities_translation_core.default.md#locale)

### Methods

- [\_preTransform](utilities_translation_core.default.md#_pretransform)
- [\_processAST](utilities_translation_core.default.md#_processast)
- [clear](utilities_translation_core.default.md#clear)
- [extend](utilities_translation_core.default.md#extend)
- [formatCurrency](utilities_translation_core.default.md#formatcurrency)
- [formatDate](utilities_translation_core.default.md#formatdate)
- [formatDateTime](utilities_translation_core.default.md#formatdatetime)
- [formatDuration](utilities_translation_core.default.md#formatduration)
- [formatNode](utilities_translation_core.default.md#formatnode)
- [formatNumber](utilities_translation_core.default.md#formatnumber)
- [formatRelativeTime](utilities_translation_core.default.md#formatrelativetime)
- [formatTime](utilities_translation_core.default.md#formattime)
- [has](utilities_translation_core.default.md#has)
- [replace](utilities_translation_core.default.md#replace)
- [set](utilities_translation_core.default.md#set)
- [t](utilities_translation_core.default.md#t)
- [tList](utilities_translation_core.default.md#tlist)
- [toLocaleString](utilities_translation_core.default.md#tolocalestring)
- [unset](utilities_translation_core.default.md#unset)

## Constructors

### constructor

• **new default**(`options?`): [`default`](utilities_translation_core.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`TranslationOptions`](../modules/utilities_translation_core.md#translationoptions)\> |

#### Returns

[`default`](utilities_translation_core.default.md)

#### Defined in

src/utilities/translation-core.ts:291

## Properties

### cache

• **cache**: `Map`\<`string`, `MessageAST`\>

#### Defined in

src/utilities/translation-core.ts:273

___

### currencyFormats

• **currencyFormats**: `Map`\<`string`, `NumberFormat`\>

#### Defined in

src/utilities/translation-core.ts:289

___

### defaultDateFormat

• **defaultDateFormat**: `string`

#### Defined in

src/utilities/translation-core.ts:284

___

### defaultDateTimeFormat

• **defaultDateTimeFormat**: `string`

#### Defined in

src/utilities/translation-core.ts:286

___

### defaultLocale

• **defaultLocale**: `string`

#### Defined in

src/utilities/translation-core.ts:283

___

### defaultTimeFormat

• **defaultTimeFormat**: `string`

#### Defined in

src/utilities/translation-core.ts:285

___

### formats

• **formats**: [`FormattingOptions`](../modules/utilities_translation_core.md#formattingoptions)

#### Defined in

src/utilities/translation-core.ts:278

___

### numberFormats

• **numberFormats**: `Map`\<`string`, `NumberFormat`\>

#### Defined in

src/utilities/translation-core.ts:288

___

### parser

• **parser**: `default`

#### Defined in

src/utilities/translation-core.ts:271

___

### phrases

• **phrases**: `Map`\<`string`, `string`\>

#### Defined in

src/utilities/translation-core.ts:272

___

### transformation

• **transformation**: ``null`` \| (`key`: `string`, `ast`: `MessageAST`) => `MessageAST`

#### Defined in

src/utilities/translation-core.ts:275

___

### types

• **types**: `Record`\<`string`, [`TypeFormatter`](../modules/utilities_translation_core.md#typeformatter)\>

#### Defined in

src/utilities/translation-core.ts:277

___

### warn

• `Optional` **warn**: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void`

#### Type declaration

▸ (`...data`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

▸ (`message?`, `...optionalParams`): `void`

The `console.warn()` function is an alias for error.

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

##### Returns

`void`

**`Since`**

v0.1.100

#### Defined in

src/utilities/translation-core.ts:269

## Accessors

### locale

• `get` **locale**(): `string`

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:325

• `set` **locale**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Defined in

src/utilities/translation-core.ts:329

## Methods

### \_preTransform

▸ **_preTransform**(`key`, `phrase`, `options`, `settings?`): [`MessageAST`, `any`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `phrase` | `string` |
| `options` | `any` |
| `settings` | [`ParseTranslationSettings`](../modules/utilities_translation_core.md#parsetranslationsettings) |

#### Returns

[`MessageAST`, `any`, `string`]

#### Defined in

src/utilities/translation-core.ts:517

___

### \_processAST

▸ **_processAST**(`ast`, `data`, `locale`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ast` | `MessageAST` |
| `data` | `any` |
| `locale` | `string` |

#### Returns

`any`[]

#### Defined in

src/utilities/translation-core.ts:612

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

src/utilities/translation-core.ts:507

___

### extend

▸ **extend**(`phrases`, `prefix?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `phrases` | `RecursivePhraseMap` |
| `prefix?` | `string` |

#### Returns

`string`[]

#### Defined in

src/utilities/translation-core.ts:448

___

### formatCurrency

▸ **formatCurrency**(`value`, `currency`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |
| `currency` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:354

___

### formatDate

▸ **formatDate**(`value`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:391

___

### formatDateTime

▸ **formatDateTime**(`value`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:429

___

### formatDuration

▸ **formatDuration**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:387

___

### formatNode

▸ **formatNode**(`node`, `data`, `locale`, `out`, `ast`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `MessageNode` |
| `data` | `any` |
| `locale` | ``null`` \| `string` |
| `out` | `any`[] |
| `ast` | `MessageAST` |

#### Returns

`any`

#### Defined in

src/utilities/translation-core.ts:584

___

### formatNumber

▸ **formatNumber**(`value`, `format`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |
| `format` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:368

___

### formatRelativeTime

▸ **formatRelativeTime**(`value`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:343

___

### formatTime

▸ **formatTime**(`value`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:410

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

src/utilities/translation-core.ts:497

___

### replace

▸ **replace**(`phrases`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `phrases` | `RecursivePhraseMap` |

#### Returns

`void`

#### Defined in

src/utilities/translation-core.ts:512

___

### set

▸ **set**(`key`, `phrase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `phrase` | `string` |

#### Returns

`void`

#### Defined in

src/utilities/translation-core.ts:501

___

### t

▸ **t**(`key`, `phrase`, `data`, `settings?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `phrase` | `string` |
| `data` | `any` |
| `settings?` | [`ParseTranslationSettings`](../modules/utilities_translation_core.md#parsetranslationsettings) |

#### Returns

`string`

#### Defined in

src/utilities/translation-core.ts:576

___

### tList

▸ **tList**(`key`, `phrase`, `data`, `settings?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `phrase` | `string` |
| `data` | `any` |
| `settings?` | [`ParseTranslationSettings`](../modules/utilities_translation_core.md#parsetranslationsettings) |

#### Returns

`any`[]

#### Defined in

src/utilities/translation-core.ts:580

___

### toLocaleString

▸ **toLocaleString**(`thing`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thing` | `any` |

#### Returns

`any`

#### Defined in

src/utilities/translation-core.ts:337

___

### unset

▸ **unset**(`phrases`, `prefix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `phrases` | `string` \| `string`[] |
| `prefix` | `string` |

#### Returns

`void`

#### Defined in

src/utilities/translation-core.ts:479
