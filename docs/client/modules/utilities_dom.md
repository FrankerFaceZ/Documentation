# Module: utilities/dom

## Classes

- [ClickOutside](../classes/utilities_dom.ClickOutside.md)
- [ManagedStyle](../classes/utilities_dom.ManagedStyle.md)

## Functions

### createElement

▸ **createElement**\<`K`\>(`tag`, `props?`, `...children`): `HTMLElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `K` |
| `props?` | `any` |
| `...children` | `any`[] |

#### Returns

`HTMLElementTagNameMap`[`K`]

#### Defined in

src/utilities/dom.ts:105

▸ **createElement**\<`K`\>(`tag`, `props?`, `...children`): `HTMLElementDeprecatedTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `K` |
| `props?` | `any` |
| `...children` | `any`[] |

#### Returns

`HTMLElementDeprecatedTagNameMap`[`K`]

#### Defined in

src/utilities/dom.ts:106

___

### findReactFragment

▸ **findReactFragment**\<`TNode`\>(`frag`, `criteria`, `depth?`, `current?`, `visited?`): `TNode` \| ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNode` | extends `SimpleNodeLike` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `frag` | `TNode` | `undefined` |
| `criteria` | (`node`: `TNode`) => `boolean` | `undefined` |
| `depth` | `number` | `25` |
| `current` | `number` | `0` |
| `visited?` | `Set`\<`any`\> | `undefined` |

#### Returns

`TNode` \| ``null``

#### Defined in

src/utilities/dom.ts:54

___

### findSharedParent

▸ **findSharedParent**(`element`, `other`, `selector?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| `HTMLElement` |
| `other` | `Node` |
| `selector?` | `string` |

#### Returns

`boolean`

#### Defined in

src/utilities/dom.ts:206

___

### highlightJson

▸ **highlightJson**(`object`, `pretty?`, `depth?`, `max_depth?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `any` | `undefined` |
| `pretty` | `boolean` | `false` |
| `depth` | `number` | `1` |
| `max_depth` | `number` | `30` |

#### Returns

`string`

#### Defined in

src/utilities/dom.ts:376

___

### off

▸ **off**(`obj`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `EventTarget` |
| `type` | `string` |
| `listener` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Defined in

src/utilities/dom.ts:41

___

### on

▸ **on**(`obj`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `EventTarget` |
| `type` | `string` |
| `listener` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Defined in

src/utilities/dom.ts:36

___

### openFile

▸ **openFile**(`contentType`, `multiple`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contentType` | `string` |
| `multiple` | `boolean` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

src/utilities/dom.ts:220

___

### readFile

▸ **readFile**(`file`, `encoding?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `file` | `Blob` | `undefined` |
| `encoding` | `string` | `'utf-8'` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

src/utilities/dom.ts:257

___

### sanitize

▸ **sanitize**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/dom.ts:269

___

### setChildren

▸ **setChildren**(`el`, `children`, `no_sanitize?`, `no_empty?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | `undefined` |
| `children` | `any` | `undefined` |
| `no_sanitize` | `boolean` | `false` |
| `no_empty` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

src/utilities/dom.ts:169
