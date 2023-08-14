import { Get } from '$lib/server/services/rules/endpoints';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return { rules: Get() };
};