# Module: utilities/types

## Type Aliases

### AddonInfo

Ƭ **AddonInfo**: `Object`

AddonInfo represents the data contained in an add-on's manifest.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `author` | `string` | The name of the add-on's author. |
| `created` | `Date` | The date when the add-on was first created. |
| `description` | `string` | A description of the add-on. This can be multiple lines and supports Markdown. |
| `dev` | `boolean` | Whether or not the add-on has been loaded from a development center. |
| `external` | `boolean` | Whether or not the add-on has been loaded externally (outside of FFZ's control). |
| `id` | `string` | The add-on's ID. This is used to identify content, including settings, modules, emotes, etc. that are associated with the add-on. |
| `maintainer?` | `string` | The name of the person or persons maintaining the add-on, if different than the author. |
| `name` | `string` | The human-readable name of the add-on, in English. |
| `required_by` | `string`[] | A list of add-ons, by ID, that require this add-on to be enabled to function. |
| `requires` | `string`[] | A list of add-ons, by ID, that this add-on requires to be enabled to function. |
| `settings?` | `string` | Optional. A settings UI key. If set, a Settings button will be displayed for this add-on that takes the user to this add-on's settings. |
| `short_name?` | `string` | Optional. A human-readable shortened name for the add-on, in English. |
| `targets` | `string`[] | List of FrankerFaceZ flavors ("main", "clips", "player") that this add-on supports. |
| `updated?` | `Date` | The date when the add-on was last updated. |
| `version` | `string` | The add-on's version number. This should be a semantic version, but this is not enforced. |
| `website?` | `string` | Optional. This add-on's website. If set, a Website button will be displayed that functions as a link. |

#### Defined in

[src/utilities/types.ts:5](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/types.ts#L5)
