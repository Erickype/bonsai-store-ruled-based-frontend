<script lang="ts">
  import "../app.postcss";

  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";

  import { AppBar } from "@skeletonlabs/skeleton";
  import { AppShell } from "@skeletonlabs/skeleton";
  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";

  import { IconMenu } from "@tabler/icons-svelte";
  import { IconUser } from "@tabler/icons-svelte";

  import Navigation from "$lib/navigation/navigation.svelte";

  let title = "Bonsai Store";

  function drawerOpen(): void {
    drawerStore.open({});
  }
</script>

<Drawer>
  <Navigation/>
</Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
  <svelte:fragment slot="header">
    <AppBar
      gridColumns="grid-cols-3"
      slotDefault="place-self-center"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <button
          class="lg:hidden btn btn-sm mr-4 hover:bg-slate-700"
          on:click={drawerOpen}
        >
          <IconMenu size={30} stroke={4} />
        </button>
      </svelte:fragment>
      <strong class="text-xl uppercase">{title}</strong>
      <svelte:fragment slot="trail"
        ><IconUser size={30} stroke={3} /></svelte:fragment
      >
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <div id="sidebar-left" class="hidden lg:block">
      <Navigation />
    </div>
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>

<slot />
