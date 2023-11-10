# Class: TranslationCore

[utilities/translation-core](../modules/utilities_translation_core.md).TranslationCore

## Constructors

### constructor

• **new TranslationCore**(`options?`): [`TranslationCore`](utilities_translation_core_TranslationCore.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`TranslationOptions`\> |

#### Returns

[`TranslationCore`](utilities_translation_core_TranslationCore.md)

#### Defined in

[src/utilities/translation-core.ts:291](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L291)

## Accessors

### locale

• `get` **locale**(): `string`

#### Returns

`string`

#### Defined in

[src/utilities/translation-core.ts:325](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L325)

• `set` **locale**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Defined in

[src/utilities/translation-core.ts:329](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L329)

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

[src/utilities/translation-core.ts:517](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L517)

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

[src/utilities/translation-core.ts:612](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L612)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/utilities/translation-core.ts:507](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L507)

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

[src/utilities/translation-core.ts:448](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L448)

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

[src/utilities/translation-core.ts:354](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L354)

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

[src/utilities/translation-core.ts:391](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L391)

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

[src/utilities/translation-core.ts:429](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L429)

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

[src/utilities/translation-core.ts:387](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L387)

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

[src/utilities/translation-core.ts:584](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L584)

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

[src/utilities/translation-core.ts:368](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L368)

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

[src/utilities/translation-core.ts:343](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L343)

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

[src/utilities/translation-core.ts:410](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L410)

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

[src/utilities/translation-core.ts:497](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L497)

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

[src/utilities/translation-core.ts:512](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L512)

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

[src/utilities/translation-core.ts:501](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L501)

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

[src/utilities/translation-core.ts:576](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L576)

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

[src/utilities/translation-core.ts:580](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L580)

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

[src/utilities/translation-core.ts:337](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L337)

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

[src/utilities/translation-core.ts:479](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/translation-core.ts#L479)
