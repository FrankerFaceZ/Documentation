# Class: CSSTweaks\<TPath\>

[utilities/css-tweaks](../modules/utilities_css_tweaks.md).CSSTweaks

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
| `TPath` | extends `string` = ``"site.css_tweaks"`` | The absolute path where this module will be mounted in the module tree. Providing this string allows relative events to be used. |

## Hierarchy

- [`Module`](utilities_module_Module.md)\<`TPath`\>

  ↳ **`CSSTweaks`**

## Constructors

### constructor

• **new CSSTweaks**\<`TPath`\>(`name?`, `parent?`, `loader?`): [`CSSTweaks`](utilities_css_tweaks_CSSTweaks.md)\<`TPath`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` = ``"site.css_tweaks"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `parent?` | `GenericModule` |
| `loader?` | `RequireContext` |

#### Returns

[`CSSTweaks`](utilities_css_tweaks_CSSTweaks.md)\<`TPath`\>

#### Overrides

[Module](utilities_module_Module.md).[constructor](utilities_module_Module.md#constructor)

#### Defined in

[src/utilities/css-tweaks.ts:25](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L25)

## Properties

### chunks

• **chunks**: `Record`\<`string`, `string`\> = `{}`

Stores CSS chunks loaded by the provided loader, and used with the [toggle](utilities_css_tweaks_CSSTweaks.md#toggle) method.

#### Defined in

[src/utilities/css-tweaks.ts:18](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L18)

___

### rules

• **rules**: `Record`\<`string`, `string`\> = `{}`

Stores CSS rules used with the [toggleHide](utilities_css_tweaks_CSSTweaks.md#togglehide) method.

#### Defined in

[src/utilities/css-tweaks.ts:15](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L15)

___

### should\_enable

• `Optional` **should\_enable**: `boolean`

For use in modules that are direct children of "core" or "site". If this
is set to true, the module will be enabled when FrankerFaceZ
is initialized.

#### Inherited from

[Module](utilities_module_Module.md).[should_enable](utilities_module_Module.md#should_enable)

#### Defined in

[src/utilities/module.ts:116](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L116)

## Accessors

### addon\_id

• `get` **addon_id**(): `undefined` \| `string`

If this module is part of an add-on, the add-on's ID.

#### Returns

`undefined` \| `string`

#### Inherited from

Module.addon\_id

#### Defined in

[src/utilities/module.ts:209](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L209)

___

### addon\_root

• `get` **addon_root**(): `undefined` \| `GenericModule`

If this module is part of an add-on, the add-on's root module.

#### Returns

`undefined` \| `GenericModule`

#### Inherited from

Module.addon\_root

#### Defined in

[src/utilities/module.ts:211](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L211)

___

### chunks\_loaded

• `get` **chunks_loaded**(): `boolean`

Whether or not chunks have been loaded using the [()](utilities_css_tweaks_CSSTweaks.md#loader).

#### Returns

`boolean`

#### Defined in

[src/utilities/css-tweaks.ts:35](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L35)

___

### enabled

• `get` **enabled**(): `boolean`

Whether or not the module is [State.Enabled](../enums/utilities_module_State.md#enabled).

#### Returns

`boolean`

#### Inherited from

Module.enabled

#### Defined in

[src/utilities/module.ts:204](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L204)

___

### enabling

• `get` **enabling**(): `boolean`

Whether or not the module is [State.Enabling](../enums/utilities_module_State.md#enabling).

#### Returns

`boolean`

#### Inherited from

Module.enabling

#### Defined in

[src/utilities/module.ts:206](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L206)

___

### load\_state

• `get` **load_state**(): [`LoadState`](../enums/utilities_module_LoadState.md)

The current [LoadState](../enums/utilities_module_LoadState.md) of this module.

#### Returns

[`LoadState`](../enums/utilities_module_LoadState.md)

#### Inherited from

Module.load\_state

#### Defined in

[src/utilities/module.ts:196](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L196)

___

### loaded

• `get` **loaded**(): `boolean`

Whether or not the module is [LoadState.Loaded](../enums/utilities_module_LoadState.md#loaded).

#### Returns

`boolean`

#### Inherited from

Module.loaded

#### Defined in

[src/utilities/module.ts:199](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L199)

___

### loader

• `get` **loader**(): `undefined` \| ``null`` \| `RequireContext`

An optional require context that can be used for loading arbitrary, named CSS chunks.

#### Returns

`undefined` \| ``null`` \| `RequireContext`

#### Defined in

[src/utilities/css-tweaks.ts:40](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L40)

• `set` **loader**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `RequireContext` |

#### Returns

`void`

#### Defined in

[src/utilities/css-tweaks.ts:44](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L44)

___

### loading

• `get` **loading**(): `boolean`

Whether or not the module is [LoadState.Loading](../enums/utilities_module_LoadState.md#loading).

#### Returns

`boolean`

#### Inherited from

Module.loading

#### Defined in

[src/utilities/module.ts:201](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L201)

___

### log

• `get` **log**(): [`Logger`](utilities_logging_Logger.md)

A Logger instance for this module.

#### Returns

[`Logger`](utilities_logging_Logger.md)

#### Inherited from

Module.log

#### Defined in

[src/utilities/module.ts:214](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L214)

• `set` **log**(`log`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logger`](utilities_logging_Logger.md) |

#### Returns

`void`

#### Inherited from

Module.log

#### Defined in

[src/utilities/module.ts:224](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L224)

___

### path

• `get` **path**(): `TPath`

#### Returns

`TPath`

#### Inherited from

Module.path

#### Defined in

[src/utilities/events.ts:507](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L507)

___

### state

• `get` **state**(): [`State`](../enums/utilities_module_State.md)

The current [State](../enums/utilities_module_State.md) of this module.

#### Returns

[`State`](../enums/utilities_module_State.md)

#### Inherited from

Module.state

#### Defined in

[src/utilities/module.ts:193](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L193)

___

### style

• `get` **style**(): [`ManagedStyle`](utilities_dom_ManagedStyle.md)

The [ManagedStyle](utilities_dom_ManagedStyle.md) instance used internally by this [CSSTweaks](utilities_css_tweaks_CSSTweaks.md) instance.

#### Returns

[`ManagedStyle`](utilities_dom_ManagedStyle.md)

#### Defined in

[src/utilities/css-tweaks.ts:53](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L53)

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

#### Inherited from

[Module](utilities_module_Module.md).[_time](utilities_module_Module.md#_time)

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

[Module](utilities_module_Module.md).[abs_path](utilities_module_Module.md#abs_path)

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

#### Inherited from

[Module](utilities_module_Module.md).[canDisable](utilities_module_Module.md#candisable)

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

#### Inherited from

[Module](utilities_module_Module.md).[canUnload](utilities_module_Module.md#canunload)

#### Defined in

[src/utilities/module.ts:352](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L352)

___

### delete

▸ **delete**(`key`): `void`

Delete a CSS block from this CSSTweak instance's [ManagedStyle](utilities_dom_ManagedStyle.md)
instance. This can be used to delete managed blocks including
those set by [()](utilities_css_tweaks_CSSTweaks.md#toggle), [()](utilities_css_tweaks_CSSTweaks.md#togglehide), and
[setVariable](utilities_css_tweaks_CSSTweaks.md#setvariable) to please use caution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to be deleted. |

#### Returns

`void`

**`See`**

[ManagedStyle.delete](utilities_dom_ManagedStyle.md#delete)

#### Defined in

[src/utilities/css-tweaks.ts:157](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L157)

___

### deleteVariable

▸ **deleteVariable**(`key`): `void`

Delete a CSS variable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for the variable |

#### Returns

`void`

#### Defined in

[src/utilities/css-tweaks.ts:178](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L178)

___

### disable

▸ **disable**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

Disable this module. If the module has no [onDisable](utilities_css_tweaks_CSSTweaks.md#ondisable) method,
but it has an [onEnable](utilities_addon_Addon.md#onenable) method, then this will throw an error.

As part of disabling this module, all modules that depend on this
module will be disabled first. All modules that depend on this module
as a load dependency will be unloaded first.

Please note that, if any of those dependencies cannot be unloaded or
disabled, this will fail.

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module_Module.md).[disable](utilities_module_Module.md#disable)

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
| `...args` | `ModuleEvents`[`K`] |

#### Returns

`void`

#### Inherited from

[Module](utilities_module_Module.md).[emit](utilities_module_Module.md#emit)

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

#### Inherited from

[Module](utilities_module_Module.md).[enable](utilities_module_Module.md#enable)

#### Defined in

[src/utilities/module.ts:311](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L311)

___

### events

▸ **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Module](utilities_module_Module.md).[events](utilities_module_Module.md#events)

#### Defined in

[src/utilities/events.ts:627](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L627)

___

### eventsWithChildren

▸ **eventsWithChildren**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Module](utilities_module_Module.md).[eventsWithChildren](utilities_module_Module.md#eventswithchildren)

#### Defined in

[src/utilities/events.ts:616](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L616)

___

### getAddonProxy

▸ **getAddonProxy**(`addon_id`, `addon`, `root`, `caller`): [`Module`](utilities_module_Module.md)\<``""``, `ModuleEvents`\>

Optional. This method is called when a module belonging to an
[Addon](utilities_addon_Addon.md) attempts to [()](utilities_css_tweaks_CSSTweaks.md#resolve) or [()](utilities_css_tweaks_CSSTweaks.md#inject) this
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

#### Inherited from

[Module](utilities_module_Module.md).[getAddonProxy](utilities_module_Module.md#getaddonproxy)

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

[Module](utilities_module_Module.md).[hasListeners](utilities_module_Module.md#haslisteners)

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

#### Inherited from

[Module](utilities_module_Module.md).[hasModule](utilities_module_Module.md#hasmodule)

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

#### Inherited from

[Module](utilities_module_Module.md).[inject](utilities_module_Module.md#inject)

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

#### Inherited from

[Module](utilities_module_Module.md).[injectAs](utilities_module_Module.md#injectas)

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

[Module](utilities_module_Module.md).[listeners](utilities_module_Module.md#listeners)

#### Defined in

[src/utilities/events.ts:601](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/events.ts#L601)

___

### load

▸ **load**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

Load this module. If the module has no [onLoad](utilities_css_tweaks_CSSTweaks.md#onload) method and no
load_requires modules listed, then it will be considered
[LoadState.Loaded](../enums/utilities_module_LoadState.md#loaded) immediately.

All of the module's load_requires dependencies will be
enabled before the load state updates and this returns.

Modules are automatically loaded before being enabled.

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module_Module.md).[load](utilities_module_Module.md#load)

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

#### Inherited from

[Module](utilities_module_Module.md).[loadFromContext](utilities_module_Module.md#loadfromcontext)

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

[Module](utilities_module_Module.md).[makeEvent](utilities_module_Module.md#makeevent)

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

[Module](utilities_module_Module.md).[makeWaitableEvent](utilities_module_Module.md#makewaitableevent)

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
| `fn` | `EventListener`\<`ModuleEvents`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[Module](utilities_module_Module.md).[many](utilities_module_Module.md#many)

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

#### Inherited from

[Module](utilities_module_Module.md).[off](utilities_module_Module.md#off)

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

[Module](utilities_module_Module.md).[offContext](utilities_module_Module.md#offcontext)

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
| `fn` | `EventListener`\<`ModuleEvents`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[Module](utilities_module_Module.md).[on](utilities_module_Module.md#on)

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

#### Inherited from

[Module](utilities_module_Module.md).[onDisable](utilities_module_Module.md#ondisable)

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

#### Inherited from

[Module](utilities_module_Module.md).[onEnable](utilities_module_Module.md#onenable)

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

#### Inherited from

[Module](utilities_module_Module.md).[onLoad](utilities_module_Module.md#onload)

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

#### Inherited from

[Module](utilities_module_Module.md).[onUnload](utilities_module_Module.md#onunload)

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
| `fn` | `EventListener`\<`ModuleEvents`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[Module](utilities_module_Module.md).[once](utilities_module_Module.md#once)

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

#### Inherited from

[Module](utilities_module_Module.md).[register](utilities_module_Module.md#register)

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

#### Inherited from

[Module](utilities_module_Module.md).[resolve](utilities_module_Module.md#resolve)

#### Defined in

[src/utilities/module.ts:791](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L791)

___

### set

▸ **set**(`key`, `value`): `void`

Include an arbitrary string of CSS using this CSSTweak instance's
[ManagedStyle](utilities_dom_ManagedStyle.md) instance. This will override any existing
CSS block using the same key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for the CSS block. |
| `value` | `string` | The text content of the CSS block. |

#### Returns

`void`

**`See`**

[ManagedStyle.set](utilities_dom_ManagedStyle.md#set)

#### Defined in

[src/utilities/css-tweaks.ts:146](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L146)

___

### setVariable

▸ **setVariable**(`key`, `value`, `scope?`): `void`

Set a CSS variable. The variable's name will be prefixed with `ffz-`
so, for example, if key is `"link-color"` then the resulting
CSS variable will be `--ffz-link-color` and can be used with
`var(--ffz-link-color)`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | The key for the variable. |
| `value` | `string` | `undefined` | The value of the variable. |
| `scope` | `string` | `'body'` | The scope this variable should be set on. Defaults to `"body"`. |

#### Returns

`void`

#### Defined in

[src/utilities/css-tweaks.ts:170](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L170)

___

### toggle

▸ **toggle**(`key`, `force?`): `void`

If force is not set, this toggles a specific CSS chunk,
enabling it if it was not previously enabled and vice versa. If force is
provide, it will either enable or disable the specific CSS chunk based
on the boolean value of force.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for the CSS block in [chunks](utilities_css_tweaks_CSSTweaks.md#chunks). |
| `force?` | `boolean` | Optional. The desired state. |

#### Returns

`void`

#### Defined in

[src/utilities/css-tweaks.ts:99](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L99)

___

### toggleHide

▸ **toggleHide**(`key`, `force?`): `void`

If force is not set, this toggles a specific element hiding rule,
enabling it if it was not previously enabled and vice versa. If force is
provided, it will either enable or disable the specific element hiding
rule based on the boolean value of force.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for the element hiding rule in [rules](utilities_css_tweaks_CSSTweaks.md#rules). |
| `force?` | `boolean` | Optional. The desired state. |

#### Returns

`void`

**`Throws`**

If the provided key is not within [rules](utilities_css_tweaks_CSSTweaks.md#rules).

#### Defined in

[src/utilities/css-tweaks.ts:70](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/css-tweaks.ts#L70)

___

### unload

▸ **unload**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

Unload this module. If the module has no [onUnload](utilities_css_tweaks_CSSTweaks.md#onunload) method,
but it has an [onLoad](utilities_css_tweaks_CSSTweaks.md#onload) method, then this will throw an error.

When this is called, if this module is currently enabled, it will
be disabled first. As part of that, all modules that depend on
this module will also be disabled first. All modules that depend
on this module as a load dependency will be unloaded first.

Please note that, if any of those dependencies cannot be unloaded or
disabled, this will fail.

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module_Module.md).[unload](utilities_module_Module.md#unload)

#### Defined in

[src/utilities/module.ts:287](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L287)

___

### waitFor

▸ **waitFor**\<`K`\>(`event`, `ctx?`, `priority?`, `prepend?`): `Promise`\<`ModuleEvents`[`K`]\>

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

`Promise`\<`ModuleEvents`[`K`]\>

#### Inherited from

[Module](utilities_module_Module.md).[waitFor](utilities_module_Module.md#waitfor)

#### Defined in

[src/utilities/module.ts:759](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L759)
