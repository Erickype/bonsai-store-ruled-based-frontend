<script lang="ts">
    import type { AuthError } from "firebase/auth";
    import { authHandler } from "../../../stores/authStore";

    let register = true;
    let email: string;
    let password: string;
    let confirmPassword: string;

    let error: string;

    async function submit() {
        console.log(register, email, password, confirmPassword);
        if (register) {
            return SignUp();
        } else {
            return LogIn();
        }
    }

    async function LogIn() {
        if (!email) {
            error = "Email required!!";
            return;
        }
        if (!password) {
            error = "Password required!!";
        }
        try {
            await authHandler.login(email, password);
        } catch (err) {
            const authError: AuthError = err as AuthError;
            error = getFormattedErrorCode(authError.code);
            return;
        }
    }

    async function SignUp() {
        if (!email) {
            error = "Email required!!";
            return;
        }
        if (!password || !confirmPassword) {
            error = "Passwords required!!";
            return;
        }
        if (!(password === confirmPassword)) {
            error = "Passwords don't match!!";
            return;
        }
        try {
            await authHandler.signUp(email, password);
        } catch (err) {
            const authError: AuthError = err as AuthError;
            error = getFormattedErrorCode(authError.code);
            return;
        }
    }

    function getFormattedErrorCode(code: string) {
        code = code.replace("auth/", "");
        code = code.replace(/-/g, " ");
        code = code.charAt(0).toUpperCase() + code.slice(1);
        return code;
    }
</script>

<div class="text-center pt-4">
    {#if error}
        <span class="chip variant-filled-error">
            <p class="error">{error}</p>
        </span>
    {/if}
</div>

<form class="flex content-center items-center h-full p-10">
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

        <button
            type="submit"
            class="btn variant-filled-success mx-auto"
            on:click={submit}>Submit</button
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
                <span>{!register ? "Sign Up" : "Log In"}</span>
            </span>
        </div>
    </div>
</form>
