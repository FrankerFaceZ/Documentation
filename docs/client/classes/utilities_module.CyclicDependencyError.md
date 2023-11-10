# Class: CyclicDependencyError

[utilities/module](../modules/utilities_module.md).CyclicDependencyError

## Hierarchy

- [`ModuleError`](utilities_module.ModuleError.md)

  ↳ **`CyclicDependencyError`**

## Constructors

### constructor

• **new CyclicDependencyError**(`message`, `modules`): [`CyclicDependencyError`](utilities_module.CyclicDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `modules` | `GenericModule`[] |

#### Returns

[`CyclicDependencyError`](utilities_module.CyclicDependencyError.md)

#### Overrides

[ModuleError](utilities_module.ModuleError.md).[constructor](utilities_module.ModuleError.md#constructor)

#### Defined in

src/utilities/module.ts:978

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

[ModuleError](utilities_module.ModuleError.md).[prepareStackTrace](utilities_module.ModuleError.md#preparestacktrace)

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

[ModuleError](utilities_module.ModuleError.md).[captureStackTrace](utilities_module.ModuleError.md#capturestacktrace)

#### Defined in

node_modules/.pnpm/@types+node@20.5.7/node_modules/@types/node/globals.d.ts:4
