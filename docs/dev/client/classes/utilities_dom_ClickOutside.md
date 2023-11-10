# Class: ClickOutside\<TFunc\>

[utilities/dom](../modules/utilities_dom.md).ClickOutside

## Type parameters

| Name | Type |
| :------ | :------ |
| `TFunc` | extends (`event`: `MouseEvent`) => `void` |

## Constructors

### constructor

• **new ClickOutside**\<`TFunc`\>(`element`, `callback`): [`ClickOutside`](utilities_dom_ClickOutside.md)\<`TFunc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunc` | extends (`event`: `MouseEvent`) => `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `callback` | `TFunc` |

#### Returns

[`ClickOutside`](utilities_dom_ClickOutside.md)\<`TFunc`\>

#### Defined in

[src/utilities/dom.ts:351](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/dom.ts#L351)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/utilities/dom.ts:359](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/dom.ts#L359)

___

### handleClick

▸ **handleClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[src/utilities/dom.ts:366](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/dom.ts#L366)
