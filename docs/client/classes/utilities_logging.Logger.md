# Class: Logger

[utilities/logging](../modules/utilities_logging.md).Logger

## Constructors

### constructor

• **new Logger**(`parent`, `name`, `level?`, `raven?`): [`Logger`](utilities_logging.Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | ``null`` \| [`Logger`](utilities_logging.Logger.md) |
| `name` | `string` |
| `level?` | ``null`` \| [`LogLevel`](../enums/utilities_logging.LogLevel.md) |
| `raven?` | `any` |

#### Returns

[`Logger`](utilities_logging.Logger.md)

#### Defined in

src/utilities/logging.ts:86

## Methods

### capture

▸ **capture**(`exc`, `opts?`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exc` | `Error` |
| `opts?` | `any` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:177

___

### crumb

▸ **crumb**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

src/utilities/logging.ts:172

___

### debug

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:132

___

### debugColor

▸ **debugColor**(`message`, `colors`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `colors` | `string`[] |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:136

___

### error

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:164

___

### errorColor

▸ **errorColor**(`message`, `colors`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `colors` | `string`[] |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:168

___

### get

▸ **get**(`name`, `level?`): [`Logger`](utilities_logging.Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `level?` | [`LogLevel`](../enums/utilities_logging.LogLevel.md) |

#### Returns

[`Logger`](utilities_logging.Logger.md)

#### Defined in

src/utilities/logging.ts:117

___

### hi

▸ **hi**(`core`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `core` | `Core` |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:104

___

### info

▸ **info**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:140

___

### infoColor

▸ **infoColor**(`message`, `colors`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `colors` | `string`[] |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:144

___

### invoke

▸ **invoke**(`level`, `message`, `optionalParams?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `message` | `string` |
| `optionalParams?` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:259

___

### invokeColor

▸ **invokeColor**(`level`, `message`, `colors`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `message` | `any` |
| `colors` | `string` \| `string`[] |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:192

___

### verbose

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:124

___

### verboseColor

▸ **verboseColor**(`message`, `colors`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `colors` | `string`[] |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:128

___

### warn

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:148

___

### warnColor

▸ **warnColor**(`message`, `colors`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `colors` | `string`[] |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:152

___

### warning

▸ **warning**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:156

___

### warningColor

▸ **warningColor**(`message`, `colors`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `colors` | `string`[] |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

src/utilities/logging.ts:160
