<script lang="ts">
	import { page } from "$app/stores";
	import { drawerStore } from "@skeletonlabs/skeleton";

	export let menuItems: MenuItem[];

	$: classesActive = (href: string) => {
		const path = $page.url.pathname;

		if (path.length == 1 && path === href) {
			return "!bg-primary-500";
		}
		if (href !== "/" && path.includes(href)) {
			return "!bg-primary-500";
		}
		return "";
	};

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		{#each menuItems as menu}
			<li>
				<a
					class={classesActive(menu.href)}
					href={menu.href}
					on:click={drawerClose}
				>
					{menu.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
