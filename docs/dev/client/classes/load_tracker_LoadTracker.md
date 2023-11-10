# Class: LoadTracker

[load\_tracker](../modules/load_tracker.md).LoadTracker

LoadTracker is a module used for coordinating loading events between
the core of FrankerFaceZ and any present add-ons. This allows for
enhanced performance by, for example, only refreshing chat messages
once emote data has been loaded by all of a user's add-ons.

**`Example`**

How to use load tracker if you're loading emotes.
```typescript
// Inform the load tracker that we're trying to load data.
this.load_tracker.schedule('chat-data', 'my-addon--emotes-global');

// Load our data.
let emotes;
try {
    emotes = await loadEmotesFromSomewhere();
} catch(err) {
    // Notify that we failed to load, so it stops waiting.
    this.load_tracker.notify('chat-data', 'my-addon--emotes-global', false);
    return;
}

// Load the emote data.
this.emotes.addDefaultSet('my-addon', 'my-addon--global-emotes', emotes);

// Notify that we succeeded.
this.load_tracker.notify('chat-data', 'my-addon--emotes-global', true);
```

## Hierarchy

- [`Module`](utilities_module_Module.md)\<``"load_tracker"``, `LoadEvents`\>

  ↳ **`LoadTracker`**

## Methods

### notify

▸ **notify**(`type`, `key`, `success?`): `void`

Notify the load tracker that your load has completed. If all loads
for the given type have been completed, and any of the loads were
a success, then a `:complete:${type}` event will be fired.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | The load type. |
| `key` | `string` | `undefined` | A unique key for your load. The same that you use with [()](load_tracker_LoadTracker.md#schedule). |
| `success` | `boolean` | `true` | Whether or not your load was a success. |

#### Returns

`void`

#### Defined in

[src/load_tracker.ts:126](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/load_tracker.ts#L126)

___

### schedule

▸ **schedule**(`type`, `key`): `void`

Register our intent to perform a load. This lets the system know that
a load of type is pending, and it starts a wait of 15 seconds
for the load to complete.

You must, after using this, call [()](load_tracker_LoadTracker.md#notify) when your load
completes or fails. That ensures that the system does not wait
needlessly after your load process has finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The load type. |
| `key` | `string` | A unique key for your load, on this load type. If you are loading multiple times (for example, global emotes and channel-specific emotes), you should use two distinct keys. |

#### Returns

`void`

#### Defined in

[src/load_tracker.ts:99](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/load_tracker.ts#L99)
