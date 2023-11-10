# Class: Metadata

[modules/metadata](../modules/modules_metadata.md).Metadata

## Hierarchy

- [`Module`](utilities_module_Module.md)

  ↳ **`Metadata`**

## Accessors

### keys

• `get` **keys**(): `string`[]

Return an array of all metadata definition keys.

#### Returns

`string`[]

#### Defined in

[src/modules/metadata.tsx:833](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/modules/metadata.tsx#L833)

## Methods

### define

▸ **define**\<`TData`\>(`key`, `definition?`): `void`

Add or update a metadata definition. This method updates the entry
in definitions, and then it updates every live metadata
display to reflect the updated definition.

#### Type parameters

| Name |
| :------ |
| `TData` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A unique key for the metadata. |
| `definition?` | ``null`` \| [`MetadataDefinition`](../modules/modules_metadata.md#metadatadefinition)\<`TData`\> | Your metadata's definition, or `null` to remove it. |

#### Returns

`void`

**`Example`**

Adding a simple metadata definition that displays when the channel went live.
```typescript
metadata.define('when-live', {
    setup(data) {
        return data.channel?.live && data.channel.live_since;
    },

    label(live_since) {
        return live_since;
    }
});
```

#### Defined in

[src/modules/metadata.tsx:858](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/modules/metadata.tsx#L858)

___

### renderLegacy

▸ **renderLegacy**(`key`, `data`, `container`, `timers`, `refresh_fn`): `Promise`\<`void`\>

Render a metadata definition into a container. This is used
internally to render metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The metadata's unique key. |
| `data` | `MetadataState` | The initial state |
| `container` | `HTMLElement` | The container to render into |
| `timers` | `Record`\<`string`, `Timeout`\> | An object to store timers for re-rendering |
| `refresh_fn` | (`key`: `string`) => `void` | A method to call when the metadata should be re-rendered. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/modules/metadata.tsx:893](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/modules/metadata.tsx#L893)

___

### updateMetadata

▸ **updateMetadata**(`keys?`): `void`

Update the rendered metadata elements for a key or keys. If keys
is not provided, this will update every metadata element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys?` | `string` \| `string`[] | Optional. The key or keys that should be updated. |

#### Returns

`void`

#### Defined in

[src/modules/metadata.tsx:869](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/modules/metadata.tsx#L869)
