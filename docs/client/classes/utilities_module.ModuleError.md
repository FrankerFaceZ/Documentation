# Class: ModuleError

[utilities/module](../modules/utilities_module.md).ModuleError

## Hierarchy

- `Error`

  ↳ **`ModuleError`**

  ↳↳ [`CyclicDependencyError`](utilities_module.CyclicDependencyError.md)

## Constructors

### constructor

• **new ModuleError**(`message?`): [`ModuleError`](utilities_module.ModuleError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`ModuleError`](utilities_module.ModuleError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts:1073

## Properties

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.5.7/node_modules/@types/node/globals.d.ts:11

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.5.7/node_modules/@types/node/globals.d.ts:4
