<script lang="ts">
  import "../app.postcss";

  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";

  import { AppBar } from "@skeletonlabs/skeleton";

  import { IconMenu } from "@tabler/icons-svelte";
  import { IconUser } from "@tabler/icons-svelte";

  let title = "Bonsai Store";
</script>

<AppBar
  gridColumns="grid-cols-3"
  slotDefault="place-self-center"
  slotTrail="place-content-end"
>
  <svelte:fragment slot="lead"><IconMenu/></svelte:fragment>
  <h1 class="text-xl">{title}</h1>
  <svelte:fragment slot="trail"><IconUser/></svelte:fragment>
</AppBar>

<slot />
