<script lang="ts">
    import { page } from "$app/stores";
	import { drawerStore } from "@skeletonlabs/skeleton";

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-secondary-500' : '');

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a class="{classesActive("/")}" href="/" on:click={drawerClose}>Homepage</a></li>
		<li><a class="{classesActive("/rules/editor")}" href="/rules/editor" on:click={drawerClose}>Rules Editor</a></li>
		<li><a class="{classesActive("/about")}" href="/about" on:click={drawerClose}>About</a></li>
		<li><a class="{classesActive("/blog")}" href="/blog" on:click={drawerClose}>Blog</a></li>
		<li><a class="{classesActive("/contact")}" href="/contact" on:click={drawerClose}>Contact</a></li>
	</ul>
</nav>
