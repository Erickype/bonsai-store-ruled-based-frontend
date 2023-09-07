<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";

  import { AppBar } from "@skeletonlabs/skeleton";
  import { AppShell } from "@skeletonlabs/skeleton";
  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";

  import { IconMenu } from "@tabler/icons-svelte";
  import { IconUser } from "@tabler/icons-svelte";

  import Navigation from "$lib/navigation/navigation.svelte";
  import TopNavigation from "$lib/navigation/topNav.svelte";
  import { page } from "$app/stores";
  import Logo from "$lib/assets/logo.svg?raw";

  let title = "Bonsai Store";

  function drawerOpen(): void {
    drawerStore.open({});
  }
</script>

<Drawer>
  <h2 class="p-4">Navigation</h2>
  <hr />
  <Navigation />
</Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
  <svelte:fragment slot="header">
    <AppBar
      gridColumns="grid-cols-3"
      slotDefault="place-self-center"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <button type="button" class="lg:hidden btn-icon" on:click={drawerOpen}
          ><IconMenu size={30} stroke={4} /></button
        >
        <span class="hidden lg:block w-14 h-14">{@html Logo}</span>
      </svelte:fragment>

      <TopNavigation />

      <svelte:fragment slot="trail">
        <button type="button" class="btn-icon variant-filled">
          <IconUser size={30} stroke={3} />
        </button>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="pageFooter">
    <div class="flex justify-center p-1">
      <h6 class="h6">
        {$page.url.pathname.toUpperCase()}
      </h6>
    </div>
  </svelte:fragment>
</AppShell>

<slot />
