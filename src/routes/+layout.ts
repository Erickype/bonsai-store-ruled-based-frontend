import type { LayoutLoad } from './$types';

export const load = (() => {
    return {
        menuItems: [
            { title: 'Home' },
            { title: 'Contact' },
            { title: 'Login' },
            { title: 'Sing Up' }
        ]
    };
}) satisfies LayoutLoad;