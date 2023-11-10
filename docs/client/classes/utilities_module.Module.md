# Class: Module\<TPath, TEventMap\>

[utilities/module](../modules/utilities_module.md).Module

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` = ``""`` |
| `TEventMap` | extends `ModuleEvents` = `ModuleEvents` |

## Hierarchy

- [`HierarchicalEventEmitter`](utilities_events.HierarchicalEventEmitter.md)\<`TPath`, `TEventMap`\>

  ↳ **`Module`**

  ↳↳ [`LoadTracker`](load_tracker.LoadTracker.md)

  ↳↳ [`Addon`](utilities_addon.Addon.md)

  ↳↳ [`CSSTweaks`](utilities_css_tweaks.CSSTweaks.md)

  ↳↳ [`Metadata`](modules_metadata.Metadata.md)

## Constructors

### constructor

• **new Module**\<`TPath`, `TEventMap`\>(`name?`, `parent?`): [`Module`](utilities_module.Module.md)\<`TPath`, `TEventMap`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` = ``""`` |
| `TEventMap` | extends `ModuleEvents` = `ModuleEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `parent?` | `GenericModule` |

#### Returns

[`Module`](utilities_module.Module.md)\<`TPath`, `TEventMap`\>

#### Overrides

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[constructor](utilities_events.HierarchicalEventEmitter.md#constructor)

#### Defined in

src/utilities/module.ts:105

## Properties

### should\_enable

• `Optional` **should\_enable**: `boolean`

For use in modules that are direct children of "core" or "site". If this is set to true, the module will be enabled when FFZ is initialized.

#### Defined in

src/utilities/module.ts:75

## Accessors

### enabled

• `get` **enabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/utilities/module.ts:145

___

### enabling

• `get` **enabling**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/utilities/module.ts:146

___

### load\_state

• `get` **load_state**(): [`LoadState`](../enums/utilities_module.LoadState.md)

#### Returns

[`LoadState`](../enums/utilities_module.LoadState.md)

#### Defined in

src/utilities/module.ts:140

___

### loaded

• `get` **loaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/utilities/module.ts:142

___

### loading

• `get` **loading**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/utilities/module.ts:143

___

### log

• `get` **log**(): [`Logger`](utilities_logging.Logger.md)

#### Returns

[`Logger`](utilities_logging.Logger.md)

#### Defined in

src/utilities/module.ts:149

• `set` **log**(`log`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logger`](utilities_logging.Logger.md) |

#### Returns

`void`

#### Defined in

src/utilities/module.ts:159

___

### path

• `get` **path**(): `TPath`

#### Returns

`TPath`

#### Inherited from

EventEmitter.path

#### Defined in

src/utilities/events.ts:507

___

### state

• `get` **state**(): [`State`](../enums/utilities_module.State.md)

#### Returns

[`State`](../enums/utilities_module.State.md)

#### Defined in

src/utilities/module.ts:139

## Methods

### abs\_path

▸ **abs_path**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Inherited from

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[abs_path](utilities_events.HierarchicalEventEmitter.md#abs_path)

#### Defined in

src/utilities/events.ts:516

___

### canDisable

▸ **canDisable**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/utilities/module.ts:211

___

### canUnload

▸ **canUnload**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/utilities/module.ts:207

___

### disable

▸ **disable**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Defined in

src/utilities/module.ts:201

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

#### Inherited from

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[emit](utilities_events.HierarchicalEventEmitter.md#emit)

#### Defined in

src/utilities/events.ts:609

___

### enable

▸ **enable**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Defined in

src/utilities/module.ts:195

___

### events

▸ **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[events](utilities_events.HierarchicalEventEmitter.md#events)

#### Defined in

src/utilities/events.ts:627

___

### eventsWithChildren

▸ **eventsWithChildren**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[eventsWithChildren](utilities_events.HierarchicalEventEmitter.md#eventswithchildren)

#### Defined in

src/utilities/events.ts:616

___

### getAddonProxy

▸ **getAddonProxy**(`addon_id`, `addon`, `root`, `caller`): [`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addon_id` | `string` |
| `addon` | `any` |
| `root` | `GenericModule` |
| `caller` | `GenericModule` |

#### Returns

[`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\>

#### Defined in

src/utilities/module.ts:71

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

#### Inherited from

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[hasListeners](utilities_events.HierarchicalEventEmitter.md#haslisteners)

#### Defined in

src/utilities/events.ts:605

___

### hasModule

▸ **hasModule**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

src/utilities/module.ts:653

___

### inject

▸ **inject**(`name`, `module?`, `require?`): ``null`` \| `GenericModule`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | ``null`` \| `string` \| [`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\> | `undefined` |
| `module?` | ``null`` \| `GenericModule` \| typeof [`Module`](utilities_module.Module.md) | `undefined` |
| `require` | `boolean` | `true` |

#### Returns

``null`` \| `GenericModule`

#### Defined in

src/utilities/module.ts:700

___

### injectAs

▸ **injectAs**(`variable`, `name`, `module?`, `require?`): ``null`` \| `GenericModule`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variable` | `string` | `undefined` |
| `name` | ``null`` \| `string` \| [`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\> | `undefined` |
| `module?` | ``null`` \| `GenericModule` \| typeof [`Module`](utilities_module.Module.md) | `undefined` |
| `require` | `boolean` | `true` |

#### Returns

``null`` \| `GenericModule`

#### Defined in

src/utilities/module.ts:761

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

#### Inherited from

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[listeners](utilities_events.HierarchicalEventEmitter.md#listeners)

#### Defined in

src/utilities/events.ts:601

___

### load

▸ **load**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Defined in

src/utilities/module.ts:182

___

### loadFromContext

▸ **loadFromContext**(`ctx`, `log?`): `Promise`\<`Record`\<`string`, [`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `RequireContext` |
| `log?` | [`Logger`](utilities_logging.Logger.md) |

#### Returns

`Promise`\<`Record`\<`string`, [`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\>\>\>

#### Defined in

src/utilities/module.ts:891

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

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[makeEvent](utilities_events.HierarchicalEventEmitter.md#makeevent)

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

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[makeWaitableEvent](utilities_events.HierarchicalEventEmitter.md#makewaitableevent)

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

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[many](utilities_events.HierarchicalEventEmitter.md#many)

#### Defined in

src/utilities/module.ts:591

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
| `fn?` | `EventListener` |
| `ctx?` | `any` |

#### Returns

`void`

#### Overrides

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[off](utilities_events.HierarchicalEventEmitter.md#off)

#### Defined in

src/utilities/module.ts:623

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

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[offContext](utilities_events.HierarchicalEventEmitter.md#offcontext)

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

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[on](utilities_events.HierarchicalEventEmitter.md#on)

#### Defined in

src/utilities/module.ts:559

___

### onDisable

▸ **onDisable**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

src/utilities/module.ts:205

___

### onEnable

▸ **onEnable**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

src/utilities/module.ts:199

___

### onLoad

▸ **onLoad**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

src/utilities/module.ts:186

___

### onUnload

▸ **onUnload**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

src/utilities/module.ts:193

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

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[once](utilities_events.HierarchicalEventEmitter.md#once)

#### Defined in

src/utilities/module.ts:575

___

### register

▸ **register**(`name`, `module`, `inject_reference?`): [`Module`](utilities_module.Module.md)\<`any`, `ModuleEvents`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `module` | typeof [`Module`](utilities_module.Module.md) | `undefined` |
| `inject_reference` | `boolean` | `false` |

#### Returns

[`Module`](utilities_module.Module.md)\<`any`, `ModuleEvents`\>

#### Defined in

src/utilities/module.ts:823

___

### resolve

▸ **resolve**(`name`): ``null`` \| [`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| [`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\> |

#### Returns

``null`` \| [`Module`](utilities_module.Module.md)\<``""``, `ModuleEvents`\>

#### Defined in

src/utilities/module.ts:641

___

### unload

▸ **unload**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Defined in

src/utilities/module.ts:189

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

[HierarchicalEventEmitter](utilities_events.HierarchicalEventEmitter.md).[waitFor](utilities_events.HierarchicalEventEmitter.md#waitfor)

#### Defined in

src/utilities/module.ts:609
