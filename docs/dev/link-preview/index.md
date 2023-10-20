<script setup>
import { ref } from 'vue';
import { Toggle } from 'flowbite-vue';

const showFull = ref(false);
const url = ref('https://www.youtube.com/watch?v=CAL4WMpBNs0');

</script>

# What is Link Preview?

FrankerFaceZ provides a link preview service for its users. But what does
that mean?

Whenever a FrankerFaceZ user encounters a link in Twitch chat, assuming they
have the relevant settings enabled, their client will send a request to the
FrankerFaceZ Link Preview service asking for more details.

The service will visit the URL and do its best to return helpful information
about the page it found. In some cases, the service will use a website's API
to get the information it wants. In other cases, the service will request a
page normally and attempt to read things like [`<meta>` tags](https://en.wikipedia.org/wiki/Meta_element)
using the [Open Graph protocol](https://ogp.me/).

You're probably familiar with how this works from other software.
[Slack](https://api.slack.com/robots) and Discord, to give two popular
examples, both have their own link preview systems that work in similar ways.


In summary, the user provides a URL like:

<input
	type="text"
	class="m-px p-2 focus:border-2 focus:m-0 rounded-lg w-full border border-solid bg-transparent focus:bg-gray-200 dark:focus:bg-gray-700 border-neutral-300 hover:border-indigo-600 focus:border-indigo-600 dark:border-neutral-500 dark:hover:border-indigo-300 dark:focus:border-indigo-300"
	v-model.lazy="url"
/>


In return, the service returns the data the client needs to build a preview like:

<div class="text-right mb-2">
    <Toggle
        color="indigo"
        v-model="showFull"
        label="Show Full Preview"
    />
</div>

<LinkPreview
	:forceShort="! showFull"
    :link="true"
	:href="url"
/>

If you use FrankerFaceZ, [check the client guide](/guide/links) for help
setting up your client to use previews. If you want to play around, wander over
to the [Testing Tool](tester).

Want to know more details? Continue on to [Meet Our Robot](robot).