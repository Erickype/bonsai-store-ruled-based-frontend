<script lang="ts">
    import { authUserStore } from "../../../stores/authStore";

    let email: string;
    authUserStore.subscribe((curr) => {
        email = curr.currentUser?.email as string;
    });
</script>

<pre>
    {email}
</pre>
