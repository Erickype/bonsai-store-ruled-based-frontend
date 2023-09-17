<script lang="ts">
    import EmailAuth from "$lib/components/auth/email.svelte";
    import type { ActionData } from "./$types";

    export let form: ActionData;
</script>

<div class="flex flex-col">
    <div class="text-center pt-4">
        {#if form?.differentPassword}
            <span class="chip variant-filled-error">
                <p class="error">Passwords don't match!</p>
            </span>
        {/if}
        {#if form?.firebaseError}
            <span class="chip variant-filled-error">
                <p class="error">{form?.authErrorCode}</p>
            </span>
        {/if}
    </div>

    <EmailAuth/>
</div>
