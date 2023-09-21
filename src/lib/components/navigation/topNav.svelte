<script lang="ts">
    import { TabGroup, TabAnchor } from "@skeletonlabs/skeleton";

    import { page } from "$app/stores";
    import type { MenuItem } from "./menu";

    export let menuItems: MenuItem[];
</script>

<TabGroup
    justify="justify-center"
    active="variant-filled-primary"
    hover="hover:variant-soft-primary"
    flex="flex-1 lg:flex-none"
    rounded="rounded-lg"
    class="bg-surface-100-800-token w-full hidden lg:block"
>
    {#each menuItems as menu}
        <TabAnchor href={menu.href} selected={$page.url.pathname === menu.href}>
            <span>{menu.name}</span>
        </TabAnchor>
    {/each}
</TabGroup>
