import type { LayoutLoad } from './$types';

export const load = (() => {
    return {
        menuItems: [
            { title: 'Home', link: "" },
            { title: 'Contact', link: "contact" },
            { title: 'Login', link: "login" },
            { title: 'Sign Up', link: "signUp" }
        ]
    };
}) satisfies LayoutLoad;