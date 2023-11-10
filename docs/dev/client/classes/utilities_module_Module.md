# Class: Module\<TPath, TEventMap\>

[utilities/module](../modules/utilities_module.md).Module

A Module represents a distinct logical component of FrankerFaceZ. Modules
can be loaded or unloaded at runtime, and they have a robust event system.
Every add-on consists of one or more Module. There are separate modules
for every system in FrankerFaceZ, such as localization, emotes, badges,
chat rendering, etc.

If you are creating an add-on, you might use Module directly if you're
using more than one module. If your add-on only has one module, then it
should use the [Addon](utilities_addon_Addon.md) subclass.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TPath` | extends `string` = ``""`` | The absolute path where this module will be mounted in the module tree. Providing this string allows relative events to be used. |
| `TEventMap` | extends `ModuleEvents` = `ModuleEvents` | A map of all event types that you're expecting to use. This may include events from other modules that you plan to use. You should import the type objects used by those other modules. |

## Hierarchy

- [`HierarchicalEventEmitter`](utilities_events_HierarchicalEventEmitter.md)\<`TPath`, `TEventMap`\>

  ↳ **`Module`**

  ↳↳ [`LoadTracker`](load_tracker_LoadTracker.md)

  ↳↳ [`Addon`](utilities_addon_Addon.md)

  ↳↳ [`CSSTweaks`](utilities_css_tweaks_CSSTweaks.md)

  ↳↳ [`Metadata`](modules_metadata_Metadata.md)

## Constructors

### constructor

• **new Module**\<`TPath`, `TEventMap`\>(`name?`, `parent?`, `addon?`): [`Module`](utilities_module_Module.md)\<`TPath`, `TEventMap`\>

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
| `addon?` | `boolean` |

#### Returns

[`Module`](utilities_module_Module.md)\<`TPath`, `TEventMap`\>

#### Overrides

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[constructor](utilities_events_HierarchicalEventEmitter.md#constructor)

#### Defined in

[src/utilities/module.ts:146](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L146)

## Properties

### should\_enable

• `Optional` **should\_enable**: `boolean`

For use in modules that are direct children of "core" or "site". If this
is set to true, the module will be enabled when FrankerFaceZ
is initialized.

#### Defined in

[src/utilities/module.ts:116](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L116)

## Accessors

### addon\_id

• `get` **addon_id**(): `undefined` \| `string`

If this module is part of an add-on, the add-on's ID.

#### Returns

`undefined` \| `string`

#### Defined in

[src/utilities/module.ts:209](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L209)

___

### addon\_root

• `get` **addon_root**(): `undefined` \| `GenericModule`

If this module is part of an add-on, the add-on's root module.

#### Returns

`undefined` \| `GenericModule`

#### Defined in

[src/utilities/module.ts:211](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L211)

___

### enabled

• `get` **enabled**(): `boolean`

Whether or not the module is [State.Enabled](../enums/utilities_module_State.md#enabled).

#### Returns

`boolean`

#### Defined in

[src/utilities/module.ts:204](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L204)

___

### enabling

• `get` **enabling**(): `boolean`

Whether or not the module is [State.Enabling](../enums/utilities_module_State.md#enabling).

#### Returns

`boolean`

#### Defined in

[src/utilities/module.ts:206](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L206)

___

### load\_state

• `get` **load_state**(): [`LoadState`](../enums/utilities_module_LoadState.md)

The current [LoadState](../enums/utilities_module_LoadState.md) of this module.

#### Returns

[`LoadState`](../enums/utilities_module_LoadState.md)

#### Defined in

[src/utilities/module.ts:196](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L196)

___

### loaded

• `get` **loaded**(): `boolean`

Whether or not the module is [LoadState.Loaded](../enums/utilities_module_LoadState.md#loaded).

#### Returns

`boolean`

#### Defined in

[src/utilities/module.ts:199](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L199)

___

### loading

• `get` **loading**(): `boolean`

Whether or not the module is [LoadState.Loading](../enums/utilities_module_LoadState.md#loading).

#### Returns

`boolean`

#### Defined in

[src/utilities/module.ts:201](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L201)

___

### log

• `get` **log**(): [`Logger`](utilities_logging_Logger.md)

A Logger instance for this module.

#### Returns

[`Logger`](utilities_logging_Logger.md)

#### Defined in

[src/utilities/module.ts:214](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L214)

• `set` **log**(`log`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logger`](utilities_logging_Logger.md) |

#### Returns

`void`

#### Defined in

[src/utilities/module.ts:224](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L224)

___

### path

• `get` **path**(): `TPath`

#### Returns

`TPath`

#### Inherited from

EventEmitter.path

#### Defined in

[src/utilities/events.ts:507](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L507)

___

### state

• `get` **state**(): [`State`](../enums/utilities_module_State.md)

The current [State](../enums/utilities_module_State.md) of this module.

#### Returns

[`State`](../enums/utilities_module_State.md)

#### Defined in

[src/utilities/module.ts:193](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L193)

## Methods

### \_time

▸ **_time**(`event`): `void`

Record a timing event. The timing system is not yet finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `any` | The timing event to record. |

#### Returns

`void`

#### Defined in

[src/utilities/module.ts:237](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L237)

___

### abs\_path

▸ **abs_path**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Inherited from

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[abs_path](utilities_events_HierarchicalEventEmitter.md#abs_path)

#### Defined in

[src/utilities/events.ts:516](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L516)

___

### canDisable

▸ **canDisable**(): `boolean`

Determine whether or not this module can be disabled. This checks
not only this module's state, but the state of all modules that
depend on this module.

#### Returns

`boolean`

#### Defined in

[src/utilities/module.ts:361](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L361)

___

### canUnload

▸ **canUnload**(): `boolean`

Determine whether or not this module can be unloaded. This checks
not only this module's state, but the state of all modules that
depend on this module.

#### Returns

`boolean`

#### Defined in

[src/utilities/module.ts:352](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L352)

___

### disable

▸ **disable**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

Disable this module. If the module has no [onDisable](utilities_module_Module.md#ondisable) method,
but it has an [onEnable](utilities_addon_Addon.md#onenable) method, then this will throw an error.

As part of disabling this module, all modules that depend on this
module will be disabled first. All modules that depend on this module
as a load dependency will be unloaded first.

Please note that, if any of those dependencies cannot be unloaded or
disabled, this will fail.

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Defined in

[src/utilities/module.ts:336](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L336)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[emit](utilities_events_HierarchicalEventEmitter.md#emit)

#### Defined in

[src/utilities/events.ts:609](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L609)

___

### enable

▸ **enable**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

Enable this module. If the module has no [onEnable](utilities_addon_Addon.md#onenable) method
and the module is considered [LoadState.Loaded](../enums/utilities_module_LoadState.md#loaded) immediately,
then the module will be considered [State.Enabled](../enums/utilities_module_State.md#enabled) immediately.

All of the module's requires dependencies will be
enabled before the state updates and this returns.

Modules are automatically loaded before being enabled.

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Defined in

[src/utilities/module.ts:311](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L311)

___

### events

▸ **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[events](utilities_events_HierarchicalEventEmitter.md#events)

#### Defined in

[src/utilities/events.ts:627](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L627)

___

### eventsWithChildren

▸ **eventsWithChildren**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[eventsWithChildren](utilities_events_HierarchicalEventEmitter.md#eventswithchildren)

#### Defined in

[src/utilities/events.ts:616](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L616)

___

### getAddonProxy

▸ **getAddonProxy**(`addon_id`, `addon`, `root`, `caller`): [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\>

Optional. This method is called when a module belonging to an
[Addon](utilities_addon_Addon.md) attempts to [()](utilities_module_Module.md#resolve) or [()](utilities_module_Module.md#inject) this
module. This can be used to return a Proxy for the purpose
of adjusting API responses or record keeping.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addon_id` | `string` | The ID of the add-on requesting the module. |
| `addon` | [`AddonInfo`](../modules/utilities_types.md#addoninfo) | The manifest of the add-on requesting the module. |
| `root` | `GenericModule` | The root [Addon](utilities_addon_Addon.md) module. |
| `caller` | `GenericModule` | The specific [Module](utilities_module_Module.md) making the request. |

#### Returns

[`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\>

#### Defined in

[src/utilities/module.ts:108](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L108)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[hasListeners](utilities_events_HierarchicalEventEmitter.md#haslisteners)

#### Defined in

[src/utilities/events.ts:605](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L605)

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

[src/utilities/module.ts:803](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L803)

___

### inject

▸ **inject**(`name`, `module?`, `require?`): ``null`` \| `GenericModule`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | ``null`` \| `string` \| [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\> | `undefined` |
| `module?` | ``null`` \| typeof [`Module`](utilities_module_Module.md) \| `GenericModule` | `undefined` |
| `require` | `boolean` | `true` |

#### Returns

``null`` \| `GenericModule`

#### Defined in

[src/utilities/module.ts:850](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L850)

___

### injectAs

▸ **injectAs**(`variable`, `name`, `module?`, `require?`): ``null`` \| `GenericModule`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variable` | `string` | `undefined` |
| `name` | ``null`` \| `string` \| [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\> | `undefined` |
| `module?` | ``null`` \| typeof [`Module`](utilities_module_Module.md) \| `GenericModule` | `undefined` |
| `require` | `boolean` | `true` |

#### Returns

``null`` \| `GenericModule`

#### Defined in

[src/utilities/module.ts:911](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L911)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[listeners](utilities_events_HierarchicalEventEmitter.md#listeners)

#### Defined in

[src/utilities/events.ts:601](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L601)

___

### load

▸ **load**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

Load this module. If the module has no [onLoad](utilities_module_Module.md#onload) method and no
load_requires modules listed, then it will be considered
[LoadState.Loaded](../enums/utilities_module_LoadState.md#loaded) immediately.

All of the module's load_requires dependencies will be
enabled before the load state updates and this returns.

Modules are automatically loaded before being enabled.

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Defined in

[src/utilities/module.ts:261](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L261)

___

### loadFromContext

▸ **loadFromContext**(`ctx`, `log?`): `Promise`\<`Record`\<`string`, [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\>\>\>

Attempt to load a set of child modules from a require.context
object. This searches the default exports, as well as exports named
`module` specifically. Each discovered module will be registered
and injected onto this module.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `RequireContext` | The context to load from. |
| `log?` | [`Logger`](utilities_logging_Logger.md) | A logger to use for logging errors. If not provided, this will default to this module's default logger. |

#### Returns

`Promise`\<`Record`\<`string`, [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\>\>\>

A map of all loaded modules.

#### Defined in

[src/utilities/module.ts:1052](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L1052)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[makeEvent](utilities_events_HierarchicalEventEmitter.md#makeevent)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[makeWaitableEvent](utilities_events_HierarchicalEventEmitter.md#makewaitableevent)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[many](utilities_events_HierarchicalEventEmitter.md#many)

#### Defined in

[src/utilities/module.ts:741](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L741)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[off](utilities_events_HierarchicalEventEmitter.md#off)

#### Defined in

[src/utilities/module.ts:773](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L773)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[offContext](utilities_events_HierarchicalEventEmitter.md#offcontext)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[on](utilities_events_HierarchicalEventEmitter.md#on)

#### Defined in

[src/utilities/module.ts:709](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L709)

___

### onDisable

▸ **onDisable**(): `void` \| `Promise`\<`void`\>

Optional. If this method is defined, it will be called when the
module is being disabled. The module will not be set to [State.Disabled](../enums/utilities_module_State.md#disabled)
until after this method returns. Promises are supported.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/utilities/module.ts:345](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L345)

___

### onEnable

▸ **onEnable**(): `void` \| `Promise`\<`void`\>

Optional. If this method is defined, it will be called when the
module is being enabled. The module will not be set to [State.Enabled](../enums/utilities_module_State.md#enabled)
until after this method returns. Promises are supported.

When this is called, all modules that this module requires
will already be enabled and injected modules will have been injected.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/utilities/module.ts:323](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L323)

___

### onLoad

▸ **onLoad**(): `void` \| `Promise`\<`void`\>

Optional. If this method is defined, it will be called when the
module is being loaded. The module will not be set to [LoadState.Loaded](../enums/utilities_module_LoadState.md#loaded)
until after this method returns. Promises are supported.

When this is called, all modules that this module load_requires
will already be enabled and injected modules will have been injected.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/utilities/module.ts:273](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L273)

___

### onUnload

▸ **onUnload**(): `void` \| `Promise`\<`void`\>

Optional. If this method is defined, it will be called when the
module is being unloaded. The module will not be set to [LoadState.Unloaded](../enums/utilities_module_LoadState.md#unloaded)
until after this method returns. Promises are supported.

When this is called, all modules that depend on this module will
already have been disabled.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/utilities/module.ts:299](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L299)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[once](utilities_events_HierarchicalEventEmitter.md#once)

#### Defined in

[src/utilities/module.ts:725](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L725)

___

### register

▸ **register**(`name`, `module`, `inject_reference?`): [`Module`](utilities_module_Module.md)\<`any`, `ModuleEvents`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `module` | typeof [`Module`](utilities_module_Module.md) | `undefined` |
| `inject_reference` | `boolean` | `false` |

#### Returns

[`Module`](utilities_module_Module.md)\<`any`, `ModuleEvents`\>

#### Defined in

[src/utilities/module.ts:973](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L973)

___

### resolve

▸ **resolve**(`name`): ``null`` \| [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\> |

#### Returns

``null`` \| [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\>

#### Defined in

[src/utilities/module.ts:791](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L791)

___

### unload

▸ **unload**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

Unload this module. If the module has no [onUnload](utilities_module_Module.md#onunload) method,
but it has an [onLoad](utilities_module_Module.md#onload) method, then this will throw an error.

When this is called, if this module is currently enabled, it will
be disabled first. As part of that, all modules that depend on
this module will also be disabled first. All modules that depend
on this module as a load dependency will be unloaded first.

Please note that, if any of those dependencies cannot be unloaded or
disabled, this will fail.

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Defined in

[src/utilities/module.ts:287](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L287)

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

[HierarchicalEventEmitter](utilities_events_HierarchicalEventEmitter.md).[waitFor](utilities_events_HierarchicalEventEmitter.md#waitfor)

#### Defined in

[src/utilities/module.ts:759](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L759)
