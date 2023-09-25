<script lang="ts">
    import { authUserStore } from "$lib/stores/authStore";
    import Admin from "$lib/components/auth/admin.svelte";

    let email: string;
    authUserStore.subscribe((curr) => {
        email = curr.currentUser?.email as string;
    });
</script>

<pre>
    {email}
</pre>

<Admin></Admin>
