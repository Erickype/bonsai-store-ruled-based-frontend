import { domain } from "$lib/server/domain";

export const CheckAdmin = async (email: string) => {
    const res = await fetch(domain + `/user/admin/` + email);
    const data = await res.json() as CheckAdminResponse;
    return data
}