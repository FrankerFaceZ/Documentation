<script setup>
import { Button } from 'flowbite-vue';
import LinkTester from '../../components/LinkTester.vue';
</script>

# Testing Tool

This is a tool for testing link previews. You can enter whatever URL you want
and get a result from the server. You can also direct this tool to use a local
development server.

:::tip
Using the <Button tabindex="-1" class="pointer-events-none" gradient="purple-pink" outline size="xs">Refresh</Button> button with the Production provider will bypass the Cloudflare cache, and the new result will be cached. This will
affect the preview being served to live clients as well as this testing tool.
:::

<ClientOnly>
<LinkTester />
</ClientOnly>
