# Module: utilities/filtering

## Functions

### createTester

▸ **createTester**\<`TContext`, `Types`\>(`rules`, `filter_types`, `inverted?`, `or?`, `rebuild?`): (`ctx`: `TContext`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContext` | `TContext` |
| `Types` | extends `FilterTypeMap`\<`TContext`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rules` | `any`[] | `undefined` |
| `filter_types` | `Types` | `undefined` |
| `inverted` | `boolean` | `false` |
| `or` | `boolean` | `false` |
| `rebuild?` | () => `void` | `undefined` |

#### Returns

`fn`

▸ (`ctx`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `TContext` |

##### Returns

`boolean`

#### Defined in

src/utilities/filtering.ts:18
