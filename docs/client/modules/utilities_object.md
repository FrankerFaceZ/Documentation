# Module: utilities/object

## Classes

- [Mutex](../classes/utilities_object.Mutex.md)
- [SourcedSet](../classes/utilities_object.SourcedSet.md)

## Functions

### addWordSeparators

▸ **addWordSeparators**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/object.ts:706

___

### array\_equals

▸ **array_equals**(`a`, `b`): `boolean`

Check that two arrays are the same length and that each array has the same
items in the same indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any`[] | The first array |
| `b` | `any`[] | The second array |

#### Returns

`boolean`

Whether or not they match

#### Defined in

src/utilities/object.ts:300

___

### b64ToArrayBuffer

▸ **b64ToArrayBuffer**(`input`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`ArrayBuffer`

#### Defined in

src/utilities/object.ts:981

___

### debounce

▸ **debounce**\<`TFunc`\>(`fn`, `delay`, `immediate?`): (`this`: `ThisParameterType`\<`TFunc`\>, ...`args`: `Parameters`\<`TFunc`\>) => `void`

Return a wrapper for a function that will only execute the function
a period of time after it has stopped being called.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunc` | extends `AnyFunction` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | `TFunc` | `undefined` | The function to wrap. |
| `delay` | `number` | `undefined` | The time to wait, in milliseconds |
| `immediate` | `boolean` \| ``2`` | `false` | If immediate is true, trigger the function immediately rather than eventually. |

#### Returns

`fn`

The wrapped function

▸ (`this`, `...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ThisParameterType`\<`TFunc`\> |
| `...args` | `Parameters`\<`TFunc`\> |

##### Returns

`void`

#### Defined in

src/utilities/object.ts:227

___

### deep\_copy

▸ **deep_copy**\<`T`\>(`object`, `seen?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |
| `seen?` | `Set`\<`any`\> |

#### Returns

`T`

#### Defined in

src/utilities/object.ts:598

___

### deep\_equals

▸ **deep_equals**(`object`, `other`, `ignore_undefined?`, `seen?`, `other_seen?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `any` | `undefined` |
| `other` | `any` | `undefined` |
| `ignore_undefined` | `boolean` | `false` |
| `seen?` | `Set`\<`PropertyKey`\> | `undefined` |
| `other_seen?` | `Set`\<`PropertyKey`\> | `undefined` |

#### Returns

`boolean`

#### Defined in

src/utilities/object.ts:313

___

### escape\_regex

▸ **escape_regex**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/object.ts:701

___

### generateHex

▸ **generateHex**(`length?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `40` |

#### Returns

`string`

#### Defined in

src/utilities/object.ts:845

___

### generateUUID

▸ **generateUUID**(): \`$\{string}-$\{string}-$\{string}-$\{string}-$\{string}\`

#### Returns

\`$\{string}-$\{string}-$\{string}-$\{string}-$\{string}\`

#### Defined in

src/utilities/object.ts:35

___

### get

▸ **get**\<`TPath`, `TValue`, `TReturn`\>(`path`, `object`): `TReturn`

Get a value from an object at a path.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPath` | extends `string` |
| `TValue` | `any` |
| `TReturn` | `ExtractType`\<`TValue`, `ExtractSegments`\<`TPath`\>, `ExtractSegments`\<`TPath`\>[``0``], `ArrayShift`\<`ExtractSegments`\<`TPath`\>\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `TPath` | The path to follow, using periods to go down a level. |
| `object` | `TValue` | The starting object. |

#### Returns

`TReturn`

The value at that point in the path, or undefined if part of the path doesn't exist.

#### Defined in

src/utilities/object.ts:506

___

### getTwitchEmoteSrcSet

▸ **getTwitchEmoteSrcSet**(`id`, `animated?`, `dark?`, `big?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `animated` | `boolean` | `false` |
| `dark` | `boolean` | `true` |
| `big` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

src/utilities/object.ts:15

___

### getTwitchEmoteURL

▸ **getTwitchEmoteURL**(`id`, `scale`, `animated?`, `dark?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `scale` | `number` | `undefined` |
| `animated` | `boolean` | `false` |
| `dark` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

src/utilities/object.ts:6

___

### glob\_to\_regex

▸ **glob_to_regex**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/object.ts:713

___

### has

▸ **has**\<`T`\>(`object`, `key`): key is keyof T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |
| `key` | `PropertyKey` |

#### Returns

key is keyof T

#### Defined in

src/utilities/object.ts:104

___

### importRsaKey

▸ **importRsaKey**(`pem`, `uses?`): `Promise`\<`CryptoKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pem` | `string` |
| `uses` | `KeyUsage`[] |

#### Returns

`Promise`\<`CryptoKey`\>

#### Defined in

src/utilities/object.ts:997

___

### isValidShortcut

▸ **isValidShortcut**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

src/utilities/object.ts:27

___

### makeAddonIdChecker

▸ **makeAddonIdChecker**(`input`): `RegExp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`RegExp`

#### Defined in

src/utilities/object.ts:642

___

### make\_enum

▸ **make_enum**\<`T`\>(`...input`): `FakeEnum`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...input` | `T`[] |

#### Returns

`FakeEnum`\<`T`\>

#### Defined in

src/utilities/object.ts:118

___

### make\_enum\_flags

▸ **make_enum_flags**\<`T`\>(`...input`): `FakeEnumFlags`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...input` | `T`[] |

#### Returns

`FakeEnumFlags`\<`T`\>

#### Defined in

src/utilities/object.ts:134

___

### map\_equals

▸ **map_equals**(`first`, `second`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `Map`\<`any`, `any`\> |
| `second` | `Map`\<`any`, `any`\> |

#### Returns

`boolean`

#### Defined in

src/utilities/object.ts:378

___

### matchScreen

▸ **matchScreen**(`screens`, `options`): `undefined` \| `ScreenDimensions`

#### Parameters

| Name | Type |
| :------ | :------ |
| `screens` | `ScreenDimensions`[] |
| `options` | `ScreenOptions` |

#### Returns

`undefined` \| `ScreenDimensions`

#### Defined in

src/utilities/object.ts:70

___

### maybe\_call

▸ **maybe_call**\<`T`\>(`input`, `ctx`, `...args`): `MaybeReturn`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |
| `ctx` | `any` |
| `...args` | `MaybeParameters`\<`T`\> |

#### Returns

`MaybeReturn`\<`T`\>

#### Defined in

src/utilities/object.ts:662

___

### normalizeAddonIdForComparison

▸ **normalizeAddonIdForComparison**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

src/utilities/object.ts:638

___

### once

▸ **once**\<`TFunc`, `TReturn`\>(`fn`): (`this`: `ThisParameterType`\<`TFunc`\>, ...`args`: `Parameters`\<`TFunc`\>) => `Promise`\<`TReturn`\>

Make sure that a given asynchronous function is only called once
at a time.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunc` | extends `AnyFunction` |
| `TReturn` | `Awaited`\<`ReturnType`\<`TFunc`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TFunc` |

#### Returns

`fn`

▸ (`this`, `...args`): `Promise`\<`TReturn`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ThisParameterType`\<`TFunc`\> |
| `...args` | `Parameters`\<`TFunc`\> |

##### Returns

`Promise`\<`TReturn`\>

#### Defined in

src/utilities/object.ts:275

___

### pick\_random

▸ **pick_random**\<`T`\>(`obj`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T`[] |

#### Returns

`T`

#### Defined in

src/utilities/object.ts:686

▸ **pick_random**\<`T`, `K`\>(`obj`): `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`T`[`K`]

#### Defined in

src/utilities/object.ts:687

___

### set\_equals

▸ **set_equals**(`first`, `second`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `Set`\<`any`\> |
| `second` | `Set`\<`any`\> |

#### Returns

`boolean`

#### Defined in

src/utilities/object.ts:390

___

### sha256

▸ **sha256**(`message`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

src/utilities/object.ts:37

___

### shallow\_copy

▸ **shallow_copy**\<`T`\>(`object`, `depth?`, `seen?`): `T`

Copy an object so that it can be safely serialized. If an object
is not serializable, such as a promise, returns null.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object` | `T` | `undefined` | The thing to copy. |
| `depth?` | `number` | `2` | The maximum depth to explore the object. |
| `seen?` | `Set`\<`any`\> | `undefined` | A Set of seen objects. Internal use only. |

#### Returns

`T`

The copy to safely store or use.

**`Export`**

#### Defined in

src/utilities/object.ts:556

___

### shallow\_object\_equals

▸ **shallow_object_equals**(`first`, `second`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `any` |
| `second` | `any` |

#### Returns

`boolean`

#### Defined in

src/utilities/object.ts:362

___

### sleep

▸ **sleep**(`delay`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utilities/object.ts:109

___

### split\_chars

▸ **split_chars**(`str`): ``null`` \| `RegExpMatchArray` \| `never`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

``null`` \| `RegExpMatchArray` \| `never`[]

#### Defined in

src/utilities/object.ts:679

___

### substr\_count

▸ **substr_count**(`str`, `needle`): `number`

Return the number of times a substring is found within a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to search within. |
| `needle` | `string` | The substring to search for. |

#### Returns

`number`

The number of matches found.

#### Defined in

src/utilities/object.ts:449

___

### timeout

▸ **timeout**\<`TReturn`\>(`promise`, `delay`): `Promise`\<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReturn` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`\<`TReturn`\> |
| `delay` | `number` |

#### Returns

`Promise`\<`TReturn`\>

#### Defined in

src/utilities/object.ts:151

___

### truncate

▸ **truncate**(`input`, `target?`, `overage?`, `ellipsis?`, `break_line?`, `trim?`): `string`

Truncate a string. Tries to intelligently break the string in white-space
if possible, without back-tracking. The returned string can be up to
`ellipsis.length + target + overage` characters long.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` | `undefined` | The string to truncate. |
| `target` | `number` | `100` | The target length for the result |
| `overage` | `number` | `15` | Accept up to this many additional characters for a better result |
| `ellipsis` | `string` | `'…'` | The string to append when truncating |
| `break_line` | `boolean` | `true` | If true, attempt to break at the first LF |
| `trim` | `boolean` | `true` | If true, runs trim() on the string before truncating |

#### Returns

`string`

The truncated string

#### Defined in

src/utilities/object.ts:800
