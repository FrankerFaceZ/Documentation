# Class: FFZEvent\<TData\>

[utilities/events](../modules/utilities_events.md).FFZEvent

## Type parameters

| Name |
| :------ |
| `TData` |

## Hierarchy

- **`FFZEvent`**

  ↳ [`FFZWaitableEvent`](utilities_events_FFZWaitableEvent.md)

## Constructors

### constructor

• **new FFZEvent**\<`TData`\>(`data`): [`FFZEvent`](utilities_events_FFZEvent.md)\<`TData`\>

#### Type parameters

| Name |
| :------ |
| `TData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TData` |

#### Returns

[`FFZEvent`](utilities_events_FFZEvent.md)\<`TData`\>

#### Defined in

[src/utilities/events.ts:397](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L397)

## Methods

### \_reset

▸ **_reset**(): `void`

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:404](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L404)

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:413](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L413)

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:409](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L409)

___

### makeEvent

▸ **makeEvent**\<`TData`\>(`data`): `TypedFFZEvent`\<`TData`\>

Create a new [FFZEvent](utilities_events_FFZEvent.md) with proper type inheritence from the
supplied data. This should always be used to construct an event
instance, rather than creating the event manually.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | extends `Record`\<`string`, `any`\> = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TData` |

#### Returns

`TypedFFZEvent`\<`TData`\>

#### Defined in

[src/utilities/events.ts:390](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L390)
