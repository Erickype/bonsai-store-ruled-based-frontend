import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    submit: async ({ request }) => {
        const data = await request.formData()

        const register = data.get("register")
        const email = data.get("email")!.toString()
        const password = data.get("password")!.toString()
        const confirmPassword = data.get("confirmPassword")!.toString()

        console.log(register, email, password, confirmPassword);

        return { success: true }
    }
};