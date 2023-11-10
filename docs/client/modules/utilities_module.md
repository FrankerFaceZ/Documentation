# Module: utilities/module

## Enumerations

- [LoadState](../enums/utilities_module.LoadState.md)
- [State](../enums/utilities_module.State.md)

## Classes

- [CyclicDependencyError](../classes/utilities_module.CyclicDependencyError.md)
- [Module](../classes/utilities_module.Module.md)
- [ModuleError](../classes/utilities_module.ModuleError.md)

## References

### module

Renames and re-exports [Module](../classes/utilities_module.Module.md)

## Functions

### buildAddonProxy

▸ **buildAddonProxy**\<`TObj`, `TNoProxy`\>(`accessor`, `thing`, `name`, `overrides`, `access_warnings?`, `no_proxy?`): `TNoProxy` extends ``true`` ? `ProxyHandler`\<`TObj`\> : `TObj`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObj` | extends `object` |
| `TNoProxy` | extends `boolean` = ``false`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessor` | ``null`` \| [`Module`](../classes/utilities_module.Module.md)\<``""``, `ModuleEvents`\> |
| `thing` | `TObj` |
| `name` | `string` |
| `overrides` | `Record`\<`string`, `any`\> |
| `access_warnings?` | `Record`\<`string`, `string` \| `boolean`\> |
| `no_proxy?` | `TNoProxy` |

#### Returns

`TNoProxy` extends ``true`` ? `ProxyHandler`\<`TObj`\> : `TObj`

#### Defined in

src/utilities/module.ts:924
