# Module: utilities/constants

## Enumerations

- [EmoteTypes](../enums/utilities_constants_EmoteTypes.md)

## Variables

### API\_SERVER

• `Const` **API\_SERVER**: ``"https://api.frankerfacez.com"``

The base URL of the FrankerFaceZ API.

#### Defined in

[src/utilities/constants.ts:26](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L26)

___

### BAD\_HOTKEYS

• `Const` **BAD\_HOTKEYS**: `string`[]

A list of hotkey combinations that are not valid for one reason or another.

#### Defined in

[src/utilities/constants.ts:108](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L108)

___

### DEBUG

• `Const` **DEBUG**: `boolean`

Whether or not FrankerFaceZ was loaded from a development server.

#### Defined in

[src/utilities/constants.ts:6](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L6)

___

### EXTENSION

• `Const` **EXTENSION**: `boolean` = `!!__extension__`

Whether or not FrankerFaceZ was loaded as a packed web extension.

#### Defined in

[src/utilities/constants.ts:9](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L9)

___

### IS\_FIREFOX

• `Const` **IS\_FIREFOX**: `boolean`

Whether or not we're running on a Firefox-based browser.

#### Defined in

[src/utilities/constants.ts:322](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L322)

___

### IS\_OSX

• `Const` **IS\_OSX**: `boolean`

Whether or not we're running on macOS

#### Defined in

[src/utilities/constants.ts:313](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L313)

___

### IS\_WEBKIT

• `Const` **IS\_WEBKIT**: `boolean`

Whether or not we're running on a Webkit-based browser.

#### Defined in

[src/utilities/constants.ts:319](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L319)

___

### IS\_WIN

• `Const` **IS\_WIN**: `boolean`

Whether or not we're running on Windows

#### Defined in

[src/utilities/constants.ts:316](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L316)

___

### KEYS

• `Const` **KEYS**: `Object`

A list of keycodes for specific keys, for use with
KeyboardEvent events.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Alt` | ``18`` |
| `ArrowDown` | ``40`` |
| `ArrowLeft` | ``37`` |
| `ArrowRight` | ``39`` |
| `ArrowUp` | ``38`` |
| `Context` | ``93`` |
| `Control` | ``17`` |
| `End` | ``35`` |
| `Enter` | ``13`` |
| `Escape` | ``27`` |
| `Home` | ``36`` |
| `Meta` | ``91`` |
| `PageDown` | ``34`` |
| `PageUp` | ``33`` |
| `Shift` | ``16`` |
| `Space` | ``32`` |
| `Tab` | ``9`` |

#### Defined in

[src/utilities/constants.ts:183](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L183)

___

### KNOWN\_CODES

• `Const` **KNOWN\_CODES**: `Record`\<`string`, `string`\>

A map of regex-style Twitch emote codes into normal,
human-readable strings for display in UI.

#### Defined in

[src/utilities/constants.ts:210](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L210)

___

### LINK\_DATA\_HOSTS

• `Const` **LINK\_DATA\_HOSTS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Production` | \{ `title`: `string` = 'Production'; `value`: `string` = 'https://api.frankerfacez.com/v2/link' } |
| `Production.title` | `string` |
| `Production.value` | `string` |
| `localhost` | \{ `has_sse`: `boolean` = true; `title`: `string` = 'Local Dev Server (Port 8002)'; `value`: `string` = 'https://localhost:8002' } |
| `localhost.has_sse` | `boolean` |
| `localhost.title` | `string` |
| `localhost.value` | `string` |
| `localhost-cf` | \{ `title`: `string` = 'Local Dev Worker (Wrangler, Port 8787)'; `value`: `string` = 'https://localhost:8787' } |
| `localhost-cf.title` | `string` |
| `localhost-cf.value` | `string` |
| `socket` | \{ `title`: `string` = 'Socket Cluster (Deprecated)'; `value`: `string` = 'special:socket' } |
| `socket.title` | `string` |
| `socket.value` | `string` |
| `test` | \{ `title`: `string` = 'API Test Server'; `value`: `string` = 'https://api-test.frankerfacez.com/v2/link' } |
| `test.title` | `string` |
| `test.value` | `string` |
| `test-cf` | \{ `title`: `string` = 'Cloudflare Test Worker'; `value`: `string` = 'https://link-service.workers.frankerfacez.com' } |
| `test-cf.title` | `string` |
| `test-cf.value` | `string` |

#### Defined in

[src/utilities/constants.ts:277](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L277)

___

### NEW\_API

• `Const` **NEW\_API**: ``"https://api2.frankerfacez.com"``

The base URL of the FrankerFaceZ testing API used for load testing.

#### Defined in

[src/utilities/constants.ts:35](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L35)

___

### PUBSUB\_CLUSTERS

• `Const` **PUBSUB\_CLUSTERS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Development` | `string` |
| `Production` | `string` |
| `Staging` | `string` |

#### Defined in

[src/utilities/constants.ts:306](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L306)

___

### REPLACEMENTS

• `Const` **REPLACEMENTS**: `Record`\<`string`, `string`\>

A map of specific Twitch emotes that should use replacement images.

#### Defined in

[src/utilities/constants.ts:239](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L239)

___

### REPLACEMENT\_BASE

• `Const` **REPLACEMENT\_BASE**: `string`

The base URL for replacement images used for specific Twitch emotes.

#### Defined in

[src/utilities/constants.ts:236](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L236)

___

### RERENDER\_SETTINGS

• `Const` **RERENDER\_SETTINGS**: readonly [``"chat.name-format"``, ``"chat.me-style"``, ``"chat.rituals.show"``, ``"chat.subs.show"``, ``"chat.subs.compact"``, ``"chat.actions.inline"``, ``"chat.actions.hover"``, ``"chat.timestamp-format"``, ``"chat.points.allow-highlight"``, ``"chat.filtering.display-deleted"``, ``"chat.filtering.display-mod-action"``, ``"chat.replies.style"``, ``"chat.bits.cheer-notice"``, ``"chat.filtering.hidden-tokens"``, ``"chat.hype.message-style"``]

A list of setting keys that, when changed, cause chat messages to re-render.

#### Defined in

[src/utilities/constants.ts:122](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L122)

___

### SENTRY\_ID

• `Const` **SENTRY\_ID**: ``"https://74b46b3894114f399d51949c6d237489@sentry.frankerfacez.com/2"``

The base URL provided to Sentry integrations for automatic error reporting.

#### Defined in

[src/utilities/constants.ts:38](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L38)

___

### SERVER

• `Const` **SERVER**: ``"https://localhost:8000"`` \| ``"https://cdn.frankerfacez.com"``

The base URL of the FrankerFaceZ CDN.

#### Defined in

[src/utilities/constants.ts:12](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L12)

___

### SERVER\_OR\_EXT

• `Const` **SERVER\_OR\_EXT**: `string` = `path`

Either the base URL of the FrankerFaceZ CDN or, if FFZ was loaded as a packed web extension, the base URL of the web extension's web accessible files.

#### Defined in

[src/utilities/constants.ts:23](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L23)

___

### STAGING\_API

• `Const` **STAGING\_API**: ``"https://api-staging.frankerfacez.com"``

The base URL of the FrankerFaceZ staging API.

#### Defined in

[src/utilities/constants.ts:29](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L29)

___

### STAGING\_CDN

• `Const` **STAGING\_CDN**: ``"https://cdn-staging.frankerfacez.com"``

The base URL of the FrankerFaceZ staging CDN.

#### Defined in

[src/utilities/constants.ts:32](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L32)

___

### TWITCH\_EMOTE\_V2

• `Const` **TWITCH\_EMOTE\_V2**: ``"//static-cdn.jtvnw.net/emoticons/v2"``

The base URL for Twitch emote images.

#### Defined in

[src/utilities/constants.ts:204](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L204)

___

### TWITCH\_GLOBAL\_SETS

• `Const` **TWITCH\_GLOBAL\_SETS**: readonly [``0``, ``33``, ``42``]

A list of Twitch emote sets that are globally available.

#### Defined in

[src/utilities/constants.ts:332](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L332)

___

### TWITCH\_POINTS\_SETS

• `Const` **TWITCH\_POINTS\_SETS**: readonly [``300238151``]

A list of Twitch emote sets that are for emotes unlocked with channel points.

#### Defined in

[src/utilities/constants.ts:335](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L335)

___

### TWITCH\_PRIME\_SETS

• `Const` **TWITCH\_PRIME\_SETS**: readonly [``457``, ``793``, ``19151``, ``19194``]

A list of Twitch emote sets that are for Twitch Prime subscribers.

#### Defined in

[src/utilities/constants.ts:338](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L338)

___

### UPDATE\_BADGE\_SETTINGS

• `Const` **UPDATE\_BADGE\_SETTINGS**: readonly [``"chat.badges.style"``, ``"chat.badges.hidden"``, ``"chat.badges.custom-mod"``, ``"chat.badges.custom-vip"``]

A list of setting keys that, when changed, cause chat messages to first clear
their badge caches and then re-render.

#### Defined in

[src/utilities/constants.ts:144](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L144)

___

### UPDATE\_TOKEN\_SETTINGS

• `Const` **UPDATE\_TOKEN\_SETTINGS**: readonly [``"chat.emotes.enabled"``, ``"chat.emotes.2x"``, ``"chat.emotes.animated"``, ``"chat.emoji.style"``, ``"chat.emoji.replace-joiner"``, ``"chat.bits.stack"``, ``"chat.rich.enabled"``, ``"chat.rich.want-mid"``, ``"chat.rich.hide-tokens"``, ``"chat.rich.all-links"``, ``"chat.rich.minimum-level"``, ``"chat.filtering.process-own"``, ``"chat.filtering.mention-priority"``, ``"chat.filtering.debug"``, ``"chat.fix-bad-emotes"``, ``"__filter:highlight-terms"``, ``"__filter:highlight-users"``, ``"__filter:highlight-badges"``, ``"__filter:block-terms"``, ``"__filter:block-users"``, ``"__filter:block-badges"``]

A list of setting keys that, when changed, cause chat messages to first clear
their cached token lists and then re-render.

#### Defined in

[src/utilities/constants.ts:155](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L155)

___

### WEBKIT\_CSS

• `Const` **WEBKIT\_CSS**: ``""`` \| ``"-webkit-"``

A -webkit- CSS prefix, if we're running on a Webkit-based browser.
Hopefully we don't need this anymore.

**`Deprecated`**

#### Defined in

[src/utilities/constants.ts:329](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L329)

___

### WEIRD\_EMOTE\_SIZES

• `Const` **WEIRD\_EMOTE\_SIZES**: `Record`\<`string`, [width: number, height: number]\>

A map of default Twitch emotes with non-standard sizes, so they can be displayed
more accurately in certain situations.

#### Defined in

[src/utilities/constants.ts:46](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L46)

___

### WORD\_SEPARATORS

• `Const` **WORD\_SEPARATORS**: ``"[\\s`~<>!-#%-\\x2A,-/:;\\x3F@\\x5B-\\x5D_\\x7B}\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u0AF0\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166D\\u166E\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D\\u207E\\u208D\\u208E\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E3B\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65]"``

#### Defined in

[src/utilities/constants.ts:40](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L40)

___

### WS\_CLUSTERS

• `Const` **WS\_CLUSTERS**: `Object`

A map of WebSocket servers for the original FrankerFaceZ socket
system.

**`Deprecated`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Development` | (`string` \| `number`)[][] |
| `Production` | (`string` \| `number`)[][] |

#### Defined in

[src/utilities/constants.ts:259](https://github.com/FrankerFaceZ/FrankerFaceZ/blob/master/src/utilities/constants.ts#L259)
