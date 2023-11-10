# Module: modules/metadata

## Classes

- [Metadata](../classes/modules_metadata_Metadata.md)

## Type Aliases

### MetadataDefinition

Ƭ **MetadataDefinition**\<`TData`\>: `Object`

A metadata definition contains all the information that FrankerFaceZ
needs in order to render a player metadata element. This includes special
data processing, how often to refresh, behavior when interacted with,
and various appearance options.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `MetadataState` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__source?` | `string` | The source that added this metadata definition. This will be unset if the metadata was added by FrankerFaceZ, or contain the add-on ID of an add-on. |
| `border?` | `OptionallyCallable`\<`TData`, `boolean`\> | - |
| `button?` | `boolean` | Optional. Whether or not this metadata element should be displayed with a button style. By default, elements are displayed with a button style if they have a [popup](modules_metadata.md#popup) or [click](modules_metadata.md#click) behavior defined. You can override the appearance using this value. |
| `click?` | (`this`: [`Metadata`](../classes/modules_metadata_Metadata.md), `data`: `TData`, `event`: `MouseEvent`, `refresh`: () => `void`) => `void` | Optional. A click handler for the metadata element. |
| `color?` | `OptionallyCallable`\<`TData`, `string` \| ``null`` \| `undefined`\> | Optional. The color that the metadata element's label should be. If this is not set, the default text color will be used. |
| `disabled?` | `OptionallyCallable`\<`TData`, `boolean`\> | Optional. If this returns true, interactions with your metadata element will be disabled and the element may appear with a visual disabled state. |
| `icon?` | `OptionallyCallable`\<`TData`, `DomFragment`\> | Optional. An icon to be displayed |
| `inherit?` | `OptionallyCallable`\<`TData`, `boolean`\> | - |
| `label` | `OptionallyCallable`\<`TData`, `DomFragment` \| ``null`` \| `undefined`\> | The label for this metadata element. If no label is returned, the metadata element will not be displayed. This should be a human-readable string. |
| `modview?` | `boolean` | - |
| `no_arrow?` | `boolean` | Optional. When this is true, an arrow element will not be created when building a popup for this metadata element. |
| `order?` | `OptionallyCallable`\<`TData`, `number`\> | Optional. What order this metadata element should be displayed in. This uses CSS's flexbox's order property to adjust the visible position of each metadata element. |
| `player?` | `boolean` | - |
| `popup?` | (`this`: [`Metadata`](../classes/modules_metadata_Metadata.md), `data`: `TData`, `tip`: `TooltipInstance`, `refresh`: () => `void`, `addCloseListener`: (`callback`: () => `void`) => `void`) => `void` | - |
| `refresh?` | `OptionallyCallable`\<`TData`, `boolean` \| `number`\> | Optional. Whether or not this metadata element should refresh itself periodically. This can be a specific amount of time, in milliseconds, after which the element should be refreshed or `true` to refresh after 1 second. Note: Your metadata might not refresh after the exact length, as the metadata manager will attempt to optimize rendering performance by using animation frames and batching. |
| `setup?` | (`this`: [`Metadata`](../classes/modules_metadata_Metadata.md), `data`: `MetadataState`) => `OptionalPromise`\<`TData`\> | Optional. If present, this setup method will be called whenever processing this metadata element in order to transform its data into a prefered format. |
| `tooltip?` | `OptionallyCallable`\<`TData`, `DomFragment` \| ``null`` \| `undefined`\> | - |

#### Defined in

[src/modules/metadata.tsx:92](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/modules/metadata.tsx#L92)
