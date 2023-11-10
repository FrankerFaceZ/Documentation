# Class: TranslationCore

[utilities/translation-core](../modules/utilities_translation_core.md).TranslationCore

## Constructors

### constructor

• **new TranslationCore**(`options?`): [`TranslationCore`](utilities_translation_core.TranslationCore.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`TranslationOptions`\> |

#### Returns

[`TranslationCore`](utilities_translation_core.TranslationCore.md)

#### Defined in

src/utilities/translation-core.ts:291

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
| `settings` | `ParseTranslationSettings` |

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
| `settings?` | `ParseTranslationSettings` |

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
| `settings?` | `ParseTranslationSettings` |

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
