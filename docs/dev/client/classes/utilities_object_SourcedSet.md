# Class: SourcedSet\<T\>

[utilities/object](../modules/utilities_object.md).SourcedSet

## Type parameters

| Name |
| :------ |
| `T` |

## Constructors

### constructor

• **new SourcedSet**\<`T`\>(`use_set?`): [`SourcedSet`](utilities_object_SourcedSet.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `use_set` | `boolean` | `false` |

#### Returns

[`SourcedSet`](utilities_object_SourcedSet.md)\<`T`\>

#### Defined in

[src/utilities/object.ts:859](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L859)

## Methods

### \_rebuild

▸ **_rebuild**(): `void`

#### Returns

`void`

#### Defined in

[src/utilities/object.ts:864](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L864)

___

### delete

▸ **delete**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[src/utilities/object.ts:892](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L892)

___

### extend

▸ **extend**(`key`, `...items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `...items` | `T`[] |

#### Returns

`void`

#### Defined in

[src/utilities/object.ts:899](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L899)

___

### get

▸ **get**(`key`): `undefined` \| `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `T`[]

#### Defined in

[src/utilities/object.ts:878](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L878)

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

[src/utilities/object.ts:879](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L879)

___

### includes

▸ **includes**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`boolean`

#### Defined in

[src/utilities/object.ts:886](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L886)

___

### push

▸ **push**(`key`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `item` | `T` |

#### Returns

`void`

#### Defined in

[src/utilities/object.ts:947](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L947)

___

### remove

▸ **remove**(`key`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `item` | `T` |

#### Returns

`void`

#### Defined in

[src/utilities/object.ts:965](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L965)

___

### set

▸ **set**(`key`, `items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `items` | `T` \| `T`[] |

#### Returns

`void`

#### Defined in

[src/utilities/object.ts:923](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L923)

___

### sourceIncludes

▸ **sourceIncludes**(`key`, `value`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/utilities/object.ts:881](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/object.ts#L881)
