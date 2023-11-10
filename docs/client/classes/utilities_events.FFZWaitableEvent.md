# Class: FFZWaitableEvent\<TData, TReturn\>

[utilities/events](../modules/utilities_events.md).FFZWaitableEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `TData` |
| `TReturn` | `void` |

## Hierarchy

- [`FFZEvent`](utilities_events.FFZEvent.md)\<`TData`\>

  ↳ **`FFZWaitableEvent`**

## Constructors

### constructor

• **new FFZWaitableEvent**\<`TData`, `TReturn`\>(`data`): [`FFZWaitableEvent`](utilities_events.FFZWaitableEvent.md)\<`TData`, `TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `TData` |
| `TReturn` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TData` |

#### Returns

[`FFZWaitableEvent`](utilities_events.FFZWaitableEvent.md)\<`TData`, `TReturn`\>

#### Inherited from

[FFZEvent](utilities_events.FFZEvent.md).[constructor](utilities_events.FFZEvent.md#constructor)

#### Defined in

src/utilities/events.ts:397

## Methods

### \_reset

▸ **_reset**(): `void`

#### Returns

`void`

#### Overrides

[FFZEvent](utilities_events.FFZEvent.md).[_reset](utilities_events.FFZEvent.md#_reset)

#### Defined in

src/utilities/events.ts:457

___

### \_wait

▸ **_wait**(): `void` \| `Promise`\<`TReturn`[]\>

#### Returns

`void` \| `Promise`\<`TReturn`[]\>

#### Defined in

src/utilities/events.ts:441

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[FFZEvent](utilities_events.FFZEvent.md).[preventDefault](utilities_events.FFZEvent.md#preventdefault)

#### Defined in

src/utilities/events.ts:413

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[FFZEvent](utilities_events.FFZEvent.md).[stopPropagation](utilities_events.FFZEvent.md#stoppropagation)

#### Defined in

src/utilities/events.ts:409

___

### waitFor

▸ **waitFor**(`promise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`\<`TReturn`\> |

#### Returns

`void`

#### Defined in

src/utilities/events.ts:463

___

### makeEvent

▸ **makeEvent**\<`TData`, `TReturn`\>(`data`): `TypedFFZWaitableEvent`\<`TData`, `TReturn`\>

Create a new [FFZWaitableEvent](utilities_events.FFZWaitableEvent.md) with proper type inheritence from the
supplied data. This should always be used to construct an event
instance, rather than creating the event manually.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | extends `Record`\<`string`, `any`\> = {} |
| `TReturn` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TData` |

#### Returns

`TypedFFZWaitableEvent`\<`TData`, `TReturn`\>

#### Overrides

[FFZEvent](utilities_events.FFZEvent.md).[makeEvent](utilities_events.FFZEvent.md#makeevent)

#### Defined in

src/utilities/events.ts:434
