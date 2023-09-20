<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";

  import { AppBar } from "@skeletonlabs/skeleton";
  import { AppShell } from "@skeletonlabs/skeleton";
  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";

  import { IconMenu } from "@tabler/icons-svelte";

  import Navigation from "$lib/navigation/navigation.svelte";
  import TopNavigation from "$lib/navigation/topNav.svelte";
  import Logo from "$lib/components/logo.svelte";

  import { onMount } from "svelte";
  import { firebaseAuth } from "$lib/firebase/firebase.client";
  import { authHandler, authUserStore } from "../stores/authStore";
  import { goto } from "$app/navigation";

  onMount(() => {
    const _ = firebaseAuth.onAuthStateChanged((user) => {
      console.log(user);
      authUserStore.update((curr: any) => {
        return { ...curr, isLoading: false, currentUser: user };
      });
    });
  });

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
      gap="sm:gap-0"
    >
      <svelte:fragment slot="lead">
        <div class="flex flex-row flex-1">
          <button type="button" class="lg:hidden btn-icon" on:click={drawerOpen}
            ><IconMenu size={30} stroke={4} /></button
          >
          <Logo />
        </div>
      </svelte:fragment>

      <TopNavigation />

      <svelte:fragment slot="trail">
        {#if $authUserStore.currentUser}
          <button
            class="btn bg-gradient-to-br variant-gradient-tertiary-primary"
            on:click={() => {
              authHandler.logOut();
              goto("/");
            }}
          >
            Logout
          </button>
        {:else}
          <a
            href="/auth"
            class="btn bg-gradient-to-br variant-gradient-tertiary-primary"
          >
            Login
          </a>
        {/if}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <slot />
</AppShell>
