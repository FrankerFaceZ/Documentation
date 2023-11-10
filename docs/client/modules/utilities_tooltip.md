# Module: utilities/tooltip

## Classes

- [Tooltip](../classes/utilities_tooltip.Tooltip.md)

## References

### tooltip

Renames and re-exports [Tooltip](../classes/utilities_tooltip.Tooltip.md)

## Variables

### DefaultOptions

• `Const` **DefaultOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `arrowClass` | `string` |
| `delayHide` | `number` |
| `delayShow` | `number` |
| `html` | `boolean` |
| `innerClass` | `string` |
| `live` | `boolean` |
| `tooltipClass` | `string` |

#### Defined in

src/utilities/tooltip.ts:32

___

### NoContent

• `Const` **NoContent**: typeof [`NoContent`](utilities_tooltip.md#nocontent)

#### Defined in

src/utilities/tooltip.ts:30

## Functions

### makeReference

▸ **makeReference**(`x`, `y?`, `height?`, `width?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` \| `HTMLElement` | `undefined` |
| `y?` | `number` | `undefined` |
| `height` | `number` | `0` |
| `width` | `number` | `0` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clientHeight` | `number` |
| `clientWidth` | `number` |
| `getBoundingClientRect` | () => \{ `bottom`: `number` ; `height`: `number` ; `left`: `number` = \_x; `right`: `number` ; `top`: `undefined` \| `number` = y; `width`: `number` ; `x`: `number` \| `HTMLElement` ; `y`: `undefined` \| `number`  } |

#### Defined in

src/utilities/tooltip.ts:639

___

### normalizeModifiers

▸ **normalizeModifiers**(`input`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`any`[]

#### Defined in

src/utilities/tooltip.ts:615
