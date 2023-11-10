# Module: utilities/blobs

## Functions

### deserializeBlob

▸ **deserializeBlob**(`data`): `BlobLike` \| ``null``

Deserialize the provided SerializedBlobLike object into a copy of
the original BlobLike.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `SerializedBlobLike` |

#### Returns

`BlobLike` \| ``null``

#### Defined in

src/utilities/blobs.ts:81

___

### isValidBlob

▸ **isValidBlob**(`blob`): blob is BlobLike

Determine if the provided object is a valid Blob that can be serialized
for transmission via a messaging API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `any` |

#### Returns

blob is BlobLike

#### Defined in

src/utilities/blobs.ts:34

___

### serializeBlob

▸ **serializeBlob**(`blob?`): `Promise`\<`SerializedBlobLike` \| ``null``\>

Serialize the provided BlobLike object into a format that can be
transmitted via a messaging API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob?` | `BlobLike` |

#### Returns

`Promise`\<`SerializedBlobLike` \| ``null``\>

#### Defined in

src/utilities/blobs.ts:42
