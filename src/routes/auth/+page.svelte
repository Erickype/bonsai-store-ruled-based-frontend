<script lang="ts">
    import EmailAuth from "$lib/components/auth/email.svelte";
    import type { ActionData } from "./$types";

    export let form: ActionData;
</script>

<div class="flex flex-col flex-1 items-center">
    {#if form?.differentPassword}<p class="error">Passwords don't match!</p>{/if}
    {#if form?.firebaseError}<p class="error">{form?.authErrorCode}</p>{/if}

    <EmailAuth />
</div>
