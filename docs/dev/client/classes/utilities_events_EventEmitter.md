# Class: EventEmitter\<TEventMap\>

[utilities/events](../modules/utilities_events.md).EventEmitter

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEventMap` | extends `EventMap` = {} |

## Hierarchy

- **`EventEmitter`**

  ↳ [`HierarchicalEventEmitter`](utilities_events_HierarchicalEventEmitter.md)

## Constructors

### constructor

• **new EventEmitter**\<`TEventMap`\>(): [`EventEmitter`](utilities_events_EventEmitter.md)\<`TEventMap`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventMap` | extends `EventMap` = {} |

#### Returns

[`EventEmitter`](utilities_events_EventEmitter.md)\<`TEventMap`\>

#### Defined in

[src/utilities/events.ts:75](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L75)

## Methods

### emit

▸ **emit**\<`K`\>(`event`, `...args`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...args` | `TEventMap`[`K`] |

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:292](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L292)

___

### events

▸ **events**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/utilities/events.ts:278](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L278)

___

### hasListeners

▸ **hasListeners**\<`K`\>(`event`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |

#### Returns

`boolean`

#### Defined in

[src/utilities/events.ts:288](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L288)

___

### listeners

▸ **listeners**\<`K`\>(`event`): `ListenerInfo`\<`any`[]\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |

#### Returns

`ListenerInfo`\<`any`[]\>[]

#### Defined in

[src/utilities/events.ts:283](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L283)

___

### makeEvent

▸ **makeEvent**\<`TData`\>(`data`): `TypedFFZEvent`\<`TData`\>

Create a new [FFZEvent](utilities_events_FFZEvent.md) instance. This is a convenience method that
wraps [()](utilities_events_FFZEvent.md#makeevent)

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

[src/utilities/events.ts:118](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L118)

___

### makeWaitableEvent

▸ **makeWaitableEvent**\<`TData`, `TReturn`\>(`data`): `TypedFFZWaitableEvent`\<`TData`, `TReturn`\>

Create a new [FFZWaitableEvent](utilities_events_FFZWaitableEvent.md) instance. This is a convenience
method that wraps [()](utilities_events_FFZWaitableEvent.md#makeevent)

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

#### Defined in

[src/utilities/events.ts:128](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L128)

___

### many

▸ **many**\<`K`\>(`event`, `ttl`, `fn`, `ctx?`, `priority?`, `prepend?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `K` | `undefined` |
| `ttl` | `number` | `undefined` |
| `fn` | `EventListener`\<`TEventMap`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:170](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L170)

___

### off

▸ **off**\<`K`\>(`event?`, `fn?`, `ctx?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `K` |
| `fn?` | `EventListener`\<`any`[]\> |
| `ctx?` | `any` |

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:228](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L228)

___

### offContext

▸ **offContext**\<`K`\>(`event`, `ctx?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `ctx?` | `any` |

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:274](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L274)

___

### on

▸ **on**\<`K`\>(`event`, `fn`, `ctx?`, `priority?`, `prepend?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `K` | `undefined` |
| `fn` | `EventListener`\<`TEventMap`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:132](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L132)

___

### once

▸ **once**\<`K`\>(`event`, `fn`, `ctx?`, `priority?`, `prepend?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `K` | `undefined` |
| `fn` | `EventListener`\<`TEventMap`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/utilities/events.ts:160](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L160)

___

### waitFor

▸ **waitFor**\<`K`\>(`event`, `ctx?`, `priority?`, `prepend?`): `Promise`\<`TEventMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `K` | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`Promise`\<`TEventMap`[`K`]\>

#### Defined in

[src/utilities/events.ts:202](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L202)
