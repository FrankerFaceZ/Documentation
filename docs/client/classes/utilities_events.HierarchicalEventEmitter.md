# Class: HierarchicalEventEmitter\<TPath, TEventMap\>

[utilities/events](../modules/utilities_events.md).HierarchicalEventEmitter

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` = ``""`` |
| `TEventMap` | extends `EventMap` = {} |

## Hierarchy

- [`EventEmitter`](utilities_events.EventEmitter.md)\<`TEventMap`\>

  ↳ **`HierarchicalEventEmitter`**

  ↳↳ [`Module`](utilities_module.Module.md)

## Constructors

### constructor

• **new HierarchicalEventEmitter**\<`TPath`, `TEventMap`\>(`name?`, `parent?`): [`HierarchicalEventEmitter`](utilities_events.HierarchicalEventEmitter.md)\<`TPath`, `TEventMap`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` = ``""`` |
| `TEventMap` | extends `EventMap` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `parent?` | [`HierarchicalEventEmitter`](utilities_events.HierarchicalEventEmitter.md)\<``""``, {}\> |

#### Returns

[`HierarchicalEventEmitter`](utilities_events.HierarchicalEventEmitter.md)\<`TPath`, `TEventMap`\>

#### Overrides

[EventEmitter](utilities_events.EventEmitter.md).[constructor](utilities_events.EventEmitter.md#constructor)

#### Defined in

src/utilities/events.ts:483

## Accessors

### path

• `get` **path**(): `TPath`

#### Returns

`TPath`

#### Defined in

src/utilities/events.ts:507

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

src/utilities/events.ts:516

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

[EventEmitter](utilities_events.EventEmitter.md).[emit](utilities_events.EventEmitter.md#emit)

#### Defined in

src/utilities/events.ts:609

___

### events

▸ **events**(): `string`[]

#### Returns

`string`[]

#### Overrides

[EventEmitter](utilities_events.EventEmitter.md).[events](utilities_events.EventEmitter.md#events)

#### Defined in

src/utilities/events.ts:627

___

### eventsWithChildren

▸ **eventsWithChildren**(): `string`[]

#### Returns

`string`[]

#### Defined in

src/utilities/events.ts:616

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

[EventEmitter](utilities_events.EventEmitter.md).[hasListeners](utilities_events.EventEmitter.md#haslisteners)

#### Defined in

src/utilities/events.ts:605

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

[EventEmitter](utilities_events.EventEmitter.md).[listeners](utilities_events.EventEmitter.md#listeners)

#### Defined in

src/utilities/events.ts:601

___

### makeEvent

▸ **makeEvent**\<`TData`\>(`data`): `TypedFFZEvent`\<`TData`\>

Create a new [FFZEvent](utilities_events.FFZEvent.md) instance. This is a convenience method that
wraps [()](utilities_events.FFZEvent.md#makeevent)

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

[EventEmitter](utilities_events.EventEmitter.md).[makeEvent](utilities_events.EventEmitter.md#makeevent)

#### Defined in

src/utilities/events.ts:118

___

### makeWaitableEvent

▸ **makeWaitableEvent**\<`TData`, `TReturn`\>(`data`): `TypedFFZWaitableEvent`\<`TData`, `TReturn`\>

Create a new [FFZWaitableEvent](utilities_events.FFZWaitableEvent.md) instance. This is a convenience
method that wraps [()](utilities_events.FFZWaitableEvent.md#makeevent)

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

[EventEmitter](utilities_events.EventEmitter.md).[makeWaitableEvent](utilities_events.EventEmitter.md#makewaitableevent)

#### Defined in

src/utilities/events.ts:128

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

[EventEmitter](utilities_events.EventEmitter.md).[many](utilities_events.EventEmitter.md#many)

#### Defined in

src/utilities/events.ts:575

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

[EventEmitter](utilities_events.EventEmitter.md).[off](utilities_events.EventEmitter.md#off)

#### Defined in

src/utilities/events.ts:595

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

[EventEmitter](utilities_events.EventEmitter.md).[offContext](utilities_events.EventEmitter.md#offcontext)

#### Defined in

src/utilities/events.ts:274

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

[EventEmitter](utilities_events.EventEmitter.md).[on](utilities_events.EventEmitter.md#on)

#### Defined in

src/utilities/events.ts:555

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

[EventEmitter](utilities_events.EventEmitter.md).[once](utilities_events.EventEmitter.md#once)

#### Defined in

src/utilities/events.ts:565

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

[EventEmitter](utilities_events.EventEmitter.md).[waitFor](utilities_events.EventEmitter.md#waitfor)

#### Defined in

src/utilities/events.ts:586
