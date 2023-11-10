# Class: Mutex

[utilities/object](../modules/utilities_object.md).Mutex

## Constructors

### constructor

• **new Mutex**(`limit?`): [`Mutex`](utilities_object.Mutex.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `1` |

#### Returns

[`Mutex`](utilities_object.Mutex.md)

#### Defined in

src/utilities/object.ts:185

## Accessors

### available

• `get` **available**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/utilities/object.ts:193

## Methods

### wait

▸ **wait**(): `Promise`\<() => `void`\>

#### Returns

`Promise`\<() => `void`\>

#### Defined in

src/utilities/object.ts:206
