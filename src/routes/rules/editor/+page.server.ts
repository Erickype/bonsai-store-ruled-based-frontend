import { domain } from '$lib/server/domain';
import type { Response } from '$lib/server/services/rules/rule';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(domain + `/rule`);
  const data = await res.json() as Response;
  const rules = data.Rules
  
  return { rules };
};