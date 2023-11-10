# Class: CyclicDependencyError

[utilities/module](../modules/utilities_module.md).CyclicDependencyError

## Hierarchy

- [`ModuleError`](utilities_module_ModuleError.md)

  ↳ **`CyclicDependencyError`**

## Constructors

### constructor

• **new CyclicDependencyError**(`message`, `modules`): [`CyclicDependencyError`](utilities_module_CyclicDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `modules` | `GenericModule`[] |

#### Returns

[`CyclicDependencyError`](utilities_module_CyclicDependencyError.md)

#### Overrides

[ModuleError](utilities_module_ModuleError.md).[constructor](utilities_module_ModuleError.md#constructor)

#### Defined in

[src/utilities/module.ts:1139](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/module.ts#L1139)

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

[ModuleError](utilities_module_ModuleError.md).[prepareStackTrace](utilities_module_ModuleError.md#preparestacktrace)

#### Defined in

[node_modules/.pnpm/@types+node@20.5.7/node_modules/@types/node/globals.d.ts:11](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/node_modules/.pnpm/@types+node@20.5.7/node_modules/@types/node/globals.d.ts#L11)

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

[ModuleError](utilities_module_ModuleError.md).[captureStackTrace](utilities_module_ModuleError.md#capturestacktrace)

#### Defined in

[node_modules/.pnpm/@types+node@20.5.7/node_modules/@types/node/globals.d.ts:4](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/node_modules/.pnpm/@types+node@20.5.7/node_modules/@types/node/globals.d.ts#L4)
