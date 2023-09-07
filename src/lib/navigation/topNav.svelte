<script lang="ts">
    import { TabGroup, TabAnchor } from "@skeletonlabs/skeleton";

    import { page } from "$app/stores";

    const menuItems: MenuItem[] = [
        { name: "Homepage", href: "/" },
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ];
</script>

<TabGroup
    justify="justify-center"
    active="variant-filled-primary"
    hover="hover:variant-soft-primary"
    flex="flex-1 lg:flex-none"
    rounded="rounded-lg"
    class="bg-surface-100-800-token w-full hidden lg:block md:block"
>
    {#each menuItems as menu}
        <TabAnchor href={menu.href} selected={$page.url.pathname === menu.href}>
            <span>{menu.name}</span>
        </TabAnchor>
    {/each}
</TabGroup>
