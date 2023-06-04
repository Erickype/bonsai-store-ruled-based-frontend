import type { LayoutLoad } from './$types';

export const load = (() => {
    return {
        menuItems: [
            { title: 'Home' },
            { title: 'Profile' },
            { title: 'Notifications' }
        ]
    };
}) satisfies LayoutLoad;