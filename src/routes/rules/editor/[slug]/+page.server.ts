import { GetById } from "$lib/server/services/rules/endpoints";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const rule = await GetById(params.slug)
    return { rule }
};