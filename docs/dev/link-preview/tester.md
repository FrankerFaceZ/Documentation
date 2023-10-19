<script setup>

import { Button } from 'flowbite-vue';

import LinkTester from '../../components/LinkTester.vue';

</script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.2/css/all.css">

# Testing Tool

This is a tool for testing link previews. You can enter whatever URL you want
and get a result from the server. You can also direct this tool to use a local
development server.

:::tip
When using the <Button class="cursor-default" gradient="purple-pink" outline size="xs" disabled>Refresh</Button> button with the Production resolver, the
Cloudflare cache will by bypassed and the new result will be cached. This will
affect the preview being served to live clients as well as this testing tool.
:::

<ClientOnly>
<LinkTester />
</ClientOnly>
