<script lang="ts">
    import { authHandler } from "$lib/stores/authStore";

    let email: string;
    function makeAdmin() {
        authHandler.makeAdmin(email).then(result =>{
            console.log(result);
            
        })
    }
</script>

<form>
    <div class="card mx-auto flex flex-col gap-4 w-1/3 p-4">
        <h3 class="h3 text-center">Admin</h3>
        <label class="label">
            <span>Email</span>
            <input
                class="input"
                type="email"
                placeholder="Email"
                bind:value={email}
                required
            />
        </label>
        <button
            type="submit"
            class="btn variant-filled-primary"
            on:click={makeAdmin}>Make admin</button
        >
    </div>
</form>
