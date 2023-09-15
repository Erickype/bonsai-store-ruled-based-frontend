<script lang="ts">
    let register = true;
    let email: string;
    let password: string;
    let confirmPassword: string;
</script>

<form
    class="flex content-center items-center h-full p-10"
    method="POST"
    action="?/submit"
>
    <div
        class="card h-min p-10 mx-auto flex flex-col item place-content-between gap-4 lg:w-1/3
        variant-filled-tertiary"
    >
        <h2 class="h2 text-center">{register ? "Sign Up" : "Log In"}</h2>
        <input type="text" name="register" bind:value={register} hidden />
        <label class="label">
            <span>Email</span>
            <input
                class="input text-primary-50"
                type="email"
                name="email"
                placeholder="Email"
                required
                bind:value={email}
            />
        </label>

        <label class="label">
            <span>Password</span>
            <input
                class="input text-primary-50"
                type="password"
                name="password"
                placeholder="Password"
                required
                bind:value={password}
            />
        </label>

        {#if register}
            <label class="label">
                <span>Confirm password</span>
                <input
                    class="input text-primary-50"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    required
                    bind:value={confirmPassword}
                />
            </label>
        {/if}

        <button type="submit" class="btn variant-filled-success mx-auto"
            >Submit</button
        >

        <div class="text-center mx-auto">
            {#if register}
                <p>Already have an account?</p>
            {:else}
                <p>Don't have an account?</p>
            {/if}
            <span
                class="chip variant-soft hover:variant-filled"
                on:click={() => {
                    register = !register;
                }}
                on:keydown={() => {}}
            >
                <span>{register ? "Sign Up" : "Log In"}</span>
            </span>
        </div>
    </div>
</form>
