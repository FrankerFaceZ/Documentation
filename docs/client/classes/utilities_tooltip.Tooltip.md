# Class: Tooltip

[utilities/tooltip](../modules/utilities_tooltip.md).Tooltip

## Constructors

### constructor

• **new Tooltip**(`parent`, `cls`, `options`): [`Tooltip`](utilities_tooltip.Tooltip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | ``null`` \| `string` \| `HTMLElement` |
| `cls` | `string` \| `HTMLElement` \| `HTMLElement`[] |
| `options` | `Partial`\<`TooltipOptions`\> |

#### Returns

[`Tooltip`](utilities_tooltip.Tooltip.md)

#### Defined in

src/utilities/tooltip.ts:153

## Methods

### \_enter

▸ **_enter**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLElement` |

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:322

___

### \_exit

▸ **_exit**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLElement` |

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:350

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:307

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:233

___

### hide

▸ **hide**(`tip`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tip` | `TooltipInstance` |

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:571

___

### installModifiers

▸ **installModifiers**(): `void`

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:266

___

### removeModifiers

▸ **removeModifiers**(): `void`

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:275

___

### show

▸ **show**(`tip`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tip` | `TooltipInstance` |

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:380

___

### updateShift

▸ **updateShift**(`state`, `ctrl_state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |
| `ctrl_state` | `boolean` |

#### Returns

`void`

#### Defined in

src/utilities/tooltip.ts:284
