import { GetById, Update } from "$lib/server/services/rules/endpoints";
import { processUpdateRule } from "$lib/server/services/rules/util";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const rule = await GetById(params.slug)
    return { rule }
};

export const actions: Actions = {
    updateRule: async ({request}) => {
        const formData = await request.formData()
        const processedRule = await processUpdateRule(formData)
        await Update(processedRule)
    }
};