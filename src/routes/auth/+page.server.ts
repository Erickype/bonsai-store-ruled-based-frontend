import { fail, type Actions } from "@sveltejs/kit";
import { authHandler } from "../../stores/authStore";
import type { AuthError } from "firebase/auth";

export const actions = {
    submit: async ({ request }) => {
        const data = await request.formData()

        const register: boolean = JSON.parse(data.get("register")!.toString())
        const email = data.get("email")!.toString()
        const password = data.get("password")!.toString()
        const confirmPassword = data.get("confirmPassword")?.toString()

        if (register) {
            if (password !== confirmPassword) {
                return fail(400, { password, confirmPassword, differentPassword: true })
            }
            try {
                await authHandler.signUp(email, password)
            } catch (err) {
                const authError: AuthError = err as AuthError
                return fail(400, { authErrorCode: getFormattedErrorCode(authError.code), firebaseError: true })
            }
        } else {
            try {
                await authHandler.login(email, password)
            } catch (err) {
                const authError: AuthError = err as AuthError
                return fail(400, { authErrorCode: getFormattedErrorCode(authError.code), firebaseError: true })
            }
        }
    }
} satisfies Actions;

function getFormattedErrorCode(code: string) {
    code = code.replace("auth/", "");

    code = code.replace(/-/g, " ");

    code = code.charAt(0).toUpperCase() + code.slice(1);

    return code;
}