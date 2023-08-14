<script lang="ts">
	import { page } from "$app/stores";
	import { drawerStore } from "@skeletonlabs/skeleton";

	interface MenuItem {
		name: string;
		href: string;
	}

	const menuItems: MenuItem[] = [
		{ name: "Homepage", href: "/" },
		{ name: "Rules", href: "/rules" },
		{ name: "About", href: "/about" },
		{ name: "Blog", href: "/blog" },
		{ name: "Contact", href: "/contact" },
	];

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? "!bg-primary-500" : "";

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
