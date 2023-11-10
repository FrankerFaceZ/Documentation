# Class: CSSTweaks\<TPath\>

[utilities/css-tweaks](../modules/utilities_css_tweaks.md).CSSTweaks

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` = ``"site.css_tweaks"`` |

## Hierarchy

- [`Module`](utilities_module.Module.md)\<`TPath`\>

  ↳ **`CSSTweaks`**

## Constructors

### constructor

• **new CSSTweaks**\<`TPath`\>(`name?`, `parent?`, `loader?`): [`CSSTweaks`](utilities_css_tweaks.CSSTweaks.md)\<`TPath`\>

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

[`CSSTweaks`](utilities_css_tweaks.CSSTweaks.md)\<`TPath`\>

#### Overrides

[Module](utilities_module.Module.md).[constructor](utilities_module.Module.md#constructor)

#### Defined in

src/utilities/css-tweaks.ts:25

## Properties

### chunks

• **chunks**: `Record`\<`string`, `string`\> = `{}`

Stores CSS chunks loaded by the provided loader, and used with the [toggle](utilities_css_tweaks.CSSTweaks.md#toggle) method.

#### Defined in

src/utilities/css-tweaks.ts:18

___

### rules

• **rules**: `Record`\<`string`, `string`\> = `{}`

Stores CSS rules used with the [toggleHide](utilities_css_tweaks.CSSTweaks.md#togglehide) method.

#### Defined in

src/utilities/css-tweaks.ts:15

___

### should\_enable

• `Optional` **should\_enable**: `boolean`

For use in modules that are direct children of "core" or "site". If this is set to true, the module will be enabled when FFZ is initialized.

#### Inherited from

[Module](utilities_module.Module.md).[should_enable](utilities_module.Module.md#should_enable)

#### Defined in

src/utilities/module.ts:75

## Accessors

### chunks\_loaded

• `get` **chunks_loaded**(): `boolean`

Whether or not chunks have been loaded using the [()](utilities_css_tweaks.CSSTweaks.md#loader).

#### Returns

`boolean`

#### Defined in

src/utilities/css-tweaks.ts:35

___

### enabled

• `get` **enabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Module.enabled

#### Defined in

src/utilities/module.ts:145

___

### enabling

• `get` **enabling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Module.enabling

#### Defined in

src/utilities/module.ts:146

___

### load\_state

• `get` **load_state**(): [`LoadState`](../enums/utilities_module.LoadState.md)

#### Returns

[`LoadState`](../enums/utilities_module.LoadState.md)

#### Inherited from

Module.load\_state

#### Defined in

src/utilities/module.ts:140

___

### loaded

• `get` **loaded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Module.loaded

#### Defined in

src/utilities/module.ts:142

___

### loader

• `get` **loader**(): `undefined` \| ``null`` \| `RequireContext`

An optional require context that can be used for loading arbitrary, named CSS chunks.

#### Returns

`undefined` \| ``null`` \| `RequireContext`

#### Defined in

src/utilities/css-tweaks.ts:40

• `set` **loader**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `RequireContext` |

#### Returns

`void`

#### Defined in

src/utilities/css-tweaks.ts:44

___

### loading

• `get` **loading**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Module.loading

#### Defined in

src/utilities/module.ts:143

___

### log

• `get` **log**(): [`Logger`](utilities_logging.Logger.md)

#### Returns

[`Logger`](utilities_logging.Logger.md)

#### Inherited from

Module.log

#### Defined in

src/utilities/module.ts:149

• `set` **log**(`log`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logger`](utilities_logging.Logger.md) |

#### Returns

`void`

#### Inherited from

Module.log

#### Defined in

src/utilities/module.ts:159

___

### path

• `get` **path**(): `TPath`

#### Returns

`TPath`

#### Inherited from

Module.path

#### Defined in

src/utilities/events.ts:507

___

### state

• `get` **state**(): [`State`](../enums/utilities_module.State.md)

#### Returns

[`State`](../enums/utilities_module.State.md)

#### Inherited from

Module.state

#### Defined in

src/utilities/module.ts:139

___

### style

• `get` **style**(): [`ManagedStyle`](utilities_dom.ManagedStyle.md)

The [ManagedStyle](utilities_dom.ManagedStyle.md) instance used internally by this [CSSTweaks](utilities_css_tweaks.CSSTweaks.md) instance.

#### Returns

[`ManagedStyle`](utilities_dom.ManagedStyle.md)

#### Defined in

src/utilities/css-tweaks.ts:53

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

[Module](utilities_module.Module.md).[abs_path](utilities_module.Module.md#abs_path)

#### Defined in

src/utilities/events.ts:516

___

### canDisable

▸ **canDisable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Module](utilities_module.Module.md).[canDisable](utilities_module.Module.md#candisable)

#### Defined in

src/utilities/module.ts:211

___

### canUnload

▸ **canUnload**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Module](utilities_module.Module.md).[canUnload](utilities_module.Module.md#canunload)

#### Defined in

src/utilities/module.ts:207

___

### delete

▸ **delete**(`key`): `void`

Delete a CSS block from this CSSTweak instance's [ManagedStyle](utilities_dom.ManagedStyle.md)
instance. This can be used to delete managed blocks including
those set by [()](utilities_css_tweaks.CSSTweaks.md#toggle), [()](utilities_css_tweaks.CSSTweaks.md#togglehide), and
[setVariable](utilities_css_tweaks.CSSTweaks.md#setvariable) to please use caution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to be deleted. |

#### Returns

`void`

**`See`**

[ManagedStyle.delete](utilities_dom.ManagedStyle.md#delete)

#### Defined in

src/utilities/css-tweaks.ts:157

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

src/utilities/css-tweaks.ts:178

___

### disable

▸ **disable**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[disable](utilities_module.Module.md#disable)

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
| `...args` | `ModuleEvents`[`K`] |

#### Returns

`void`

#### Inherited from

[Module](utilities_module.Module.md).[emit](utilities_module.Module.md#emit)

#### Defined in

src/utilities/events.ts:609

___

### enable

▸ **enable**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[enable](utilities_module.Module.md#enable)

#### Defined in

src/utilities/module.ts:195

___

### events

▸ **events**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Module](utilities_module.Module.md).[events](utilities_module.Module.md#events)

#### Defined in

src/utilities/events.ts:627

___

### eventsWithChildren

▸ **eventsWithChildren**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Module](utilities_module.Module.md).[eventsWithChildren](utilities_module.Module.md#eventswithchildren)

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

#### Inherited from

[Module](utilities_module.Module.md).[getAddonProxy](utilities_module.Module.md#getaddonproxy)

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

[Module](utilities_module.Module.md).[hasListeners](utilities_module.Module.md#haslisteners)

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

#### Inherited from

[Module](utilities_module.Module.md).[hasModule](utilities_module.Module.md#hasmodule)

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

#### Inherited from

[Module](utilities_module.Module.md).[inject](utilities_module.Module.md#inject)

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

#### Inherited from

[Module](utilities_module.Module.md).[injectAs](utilities_module.Module.md#injectas)

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

[Module](utilities_module.Module.md).[listeners](utilities_module.Module.md#listeners)

#### Defined in

src/utilities/events.ts:601

___

### load

▸ **load**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[load](utilities_module.Module.md#load)

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

#### Inherited from

[Module](utilities_module.Module.md).[loadFromContext](utilities_module.Module.md#loadfromcontext)

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

[Module](utilities_module.Module.md).[makeEvent](utilities_module.Module.md#makeevent)

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

[Module](utilities_module.Module.md).[makeWaitableEvent](utilities_module.Module.md#makewaitableevent)

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
| `fn` | `EventListener`\<`ModuleEvents`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[Module](utilities_module.Module.md).[many](utilities_module.Module.md#many)

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

#### Inherited from

[Module](utilities_module.Module.md).[off](utilities_module.Module.md#off)

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

[Module](utilities_module.Module.md).[offContext](utilities_module.Module.md#offcontext)

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
| `fn` | `EventListener`\<`ModuleEvents`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[Module](utilities_module.Module.md).[on](utilities_module.Module.md#on)

#### Defined in

src/utilities/module.ts:559

___

### onDisable

▸ **onDisable**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[onDisable](utilities_module.Module.md#ondisable)

#### Defined in

src/utilities/module.ts:205

___

### onEnable

▸ **onEnable**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[onEnable](utilities_module.Module.md#onenable)

#### Defined in

src/utilities/module.ts:199

___

### onLoad

▸ **onLoad**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[onLoad](utilities_module.Module.md#onload)

#### Defined in

src/utilities/module.ts:186

___

### onUnload

▸ **onUnload**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[onUnload](utilities_module.Module.md#onunload)

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
| `fn` | `EventListener`\<`ModuleEvents`[`K`]\> | `undefined` |
| `ctx?` | `any` | `undefined` |
| `priority?` | `number` | `undefined` |
| `prepend` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[Module](utilities_module.Module.md).[once](utilities_module.Module.md#once)

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

#### Inherited from

[Module](utilities_module.Module.md).[register](utilities_module.Module.md#register)

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

#### Inherited from

[Module](utilities_module.Module.md).[resolve](utilities_module.Module.md#resolve)

#### Defined in

src/utilities/module.ts:641

___

### set

▸ **set**(`key`, `value`): `void`

Include an arbitrary string of CSS using this CSSTweak instance's
[ManagedStyle](utilities_dom.ManagedStyle.md) instance. This will override any existing
CSS block using the same key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for the CSS block. |
| `value` | `string` | The text content of the CSS block. |

#### Returns

`void`

**`See`**

[ManagedStyle.set](utilities_dom.ManagedStyle.md#set)

#### Defined in

src/utilities/css-tweaks.ts:146

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

src/utilities/css-tweaks.ts:170

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
| `key` | `string` | The key for the CSS block in [chunks](utilities_css_tweaks.CSSTweaks.md#chunks). |
| `force?` | `boolean` | Optional. The desired state. |

#### Returns

`void`

#### Defined in

src/utilities/css-tweaks.ts:99

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
| `key` | `string` | The key for the element hiding rule in [rules](utilities_css_tweaks.CSSTweaks.md#rules). |
| `force?` | `boolean` | Optional. The desired state. |

#### Returns

`void`

**`Throws`**

If the provided key is not within [rules](utilities_css_tweaks.CSSTweaks.md#rules).

#### Defined in

src/utilities/css-tweaks.ts:70

___

### unload

▸ **unload**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[unload](utilities_module.Module.md#unload)

#### Defined in

src/utilities/module.ts:189

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

[Module](utilities_module.Module.md).[waitFor](utilities_module.Module.md#waitfor)

#### Defined in

src/utilities/module.ts:609
