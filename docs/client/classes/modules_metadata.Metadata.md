# Class: Metadata

[modules/metadata](../modules/modules_metadata.md).Metadata

## Hierarchy

- [`Module`](utilities_module.Module.md)

  ↳ **`Metadata`**

## Constructors

### constructor

• **new Metadata**(`name?`, `parent?`): [`Metadata`](modules_metadata.Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `parent?` | `GenericModule` |

#### Returns

[`Metadata`](modules_metadata.Metadata.md)

#### Overrides

[Module](utilities_module.Module.md).[constructor](utilities_module.Module.md#constructor)

#### Defined in

src/modules/metadata.tsx:208

## Properties

### should\_enable

• `Optional` **should\_enable**: `boolean`

For use in modules that are direct children of "core" or "site". If this is set to true, the module will be enabled when FFZ is initialized.

#### Inherited from

[Module](utilities_module.Module.md).[should_enable](utilities_module.Module.md#should_enable)

#### Defined in

src/utilities/module.ts:75

## Accessors

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

### keys

• `get` **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

src/modules/metadata.tsx:825

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

### define

▸ **define**\<`TData`\>(`key`, `definition`): `void`

#### Type parameters

| Name |
| :------ |
| `TData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `definition` | `undefined` \| [`MetadataDefinition`](../modules/modules_metadata.md#metadatadefinition)\<`TData`\> |

#### Returns

`void`

#### Defined in

src/modules/metadata.tsx:829

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

▸ **getAddonProxy**(`addon_id`, `addon`, `module`): `GenericModule`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addon_id` | `string` |
| `addon` | [`AddonInfo`](../modules/utilities_types.md#addoninfo) |
| `module` | `GenericModule` |

#### Returns

`GenericModule`

#### Overrides

[Module](utilities_module.Module.md).[getAddonProxy](utilities_module.Module.md#getaddonproxy)

#### Defined in

src/modules/metadata.tsx:754

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

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Module](utilities_module.Module.md).[onEnable](utilities_module.Module.md#onenable)

#### Defined in

src/modules/metadata.tsx:772

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

### renderLegacy

▸ **renderLegacy**(`key`, `data`, `container`, `timers`, `refresh_fn`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `data` | `MetadataState` |
| `container` | `HTMLElement` |
| `timers` | `Record`\<`string`, `Timeout`\> |
| `refresh_fn` | (`key`: `string`) => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/modules/metadata.tsx:848

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

### unload

▸ **unload**(): `undefined` \| ``null`` \| `Promise`\<`void`\>

#### Returns

`undefined` \| ``null`` \| `Promise`\<`void`\>

#### Inherited from

[Module](utilities_module.Module.md).[unload](utilities_module.Module.md#unload)

#### Defined in

src/utilities/module.ts:189

___

### updateMetadata

▸ **updateMetadata**(`keys`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

src/modules/metadata.tsx:834

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
