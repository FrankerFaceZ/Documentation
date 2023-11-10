# Class: HierarchicalEventEmitter\<TPath, TEventMap\>

[utilities/events](../modules/utilities_events.md).HierarchicalEventEmitter

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` = ``""`` |
| `TEventMap` | extends `EventMap` = {} |

## Hierarchy

- [`EventEmitter`](utilities_events_EventEmitter.md)\<`TEventMap`\>

  ↳ **`HierarchicalEventEmitter`**

  ↳↳ [`Module`](utilities_module_Module.md)

## Constructors

### constructor

• **new HierarchicalEventEmitter**\<`TPath`, `TEventMap`\>(`name?`, `parent?`): [`HierarchicalEventEmitter`](utilities_events_HierarchicalEventEmitter.md)\<`TPath`, `TEventMap`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` = ``""`` |
| `TEventMap` | extends `EventMap` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `parent?` | [`HierarchicalEventEmitter`](utilities_events_HierarchicalEventEmitter.md)\<``""``, {}\> |

#### Returns

[`HierarchicalEventEmitter`](utilities_events_HierarchicalEventEmitter.md)\<`TPath`, `TEventMap`\>

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[constructor](utilities_events_EventEmitter.md#constructor)

#### Defined in

[src/utilities/events.ts:483](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L483)

## Accessors

### path

• `get` **path**(): `TPath`

#### Returns

`TPath`

#### Defined in

[src/utilities/events.ts:507](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L507)

## Methods

### abs\_path

▸ **abs_path**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[src/utilities/events.ts:516](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L516)

___

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

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[emit](utilities_events_EventEmitter.md#emit)

#### Defined in

[src/utilities/events.ts:609](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L609)

___

### events

▸ **events**(): `string`[]

#### Returns

`string`[]

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[events](utilities_events_EventEmitter.md#events)

#### Defined in

[src/utilities/events.ts:627](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L627)

___

### eventsWithChildren

▸ **eventsWithChildren**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/utilities/events.ts:616](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L616)

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

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[hasListeners](utilities_events_EventEmitter.md#haslisteners)

#### Defined in

[src/utilities/events.ts:605](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L605)

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

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[listeners](utilities_events_EventEmitter.md#listeners)

#### Defined in

[src/utilities/events.ts:601](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L601)

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

#### Inherited from

[EventEmitter](utilities_events_EventEmitter.md).[makeEvent](utilities_events_EventEmitter.md#makeevent)

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

#### Inherited from

[EventEmitter](utilities_events_EventEmitter.md).[makeWaitableEvent](utilities_events_EventEmitter.md#makewaitableevent)

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

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[many](utilities_events_EventEmitter.md#many)

#### Defined in

[src/utilities/events.ts:575](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L575)

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

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[off](utilities_events_EventEmitter.md#off)

#### Defined in

[src/utilities/events.ts:595](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L595)

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

#### Inherited from

[EventEmitter](utilities_events_EventEmitter.md).[offContext](utilities_events_EventEmitter.md#offcontext)

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

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[on](utilities_events_EventEmitter.md#on)

#### Defined in

[src/utilities/events.ts:555](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L555)

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

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[once](utilities_events_EventEmitter.md#once)

#### Defined in

[src/utilities/events.ts:565](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L565)

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

#### Overrides

[EventEmitter](utilities_events_EventEmitter.md).[waitFor](utilities_events_EventEmitter.md#waitfor)

#### Defined in

[src/utilities/events.ts:586](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L586)
