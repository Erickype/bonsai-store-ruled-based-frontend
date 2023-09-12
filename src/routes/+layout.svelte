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
  import Logo from "$lib/components/logo.svelte";

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
        <Logo />
      </svelte:fragment>

      <TopNavigation />

      <svelte:fragment slot="trail">
        <a class="hover:text-surface-300" href="/auth/login">Login</a>
        <button
          type="button"
          class="btn bg-gradient-to-br variant-gradient-tertiary-primary"
        >
          <a class="hover:text-surface-300" href="/auth/signup">Sign Up</a>
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
