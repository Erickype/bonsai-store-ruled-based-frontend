import { domain } from "$lib/server/domain";
import type { GetResponse } from "./rule";

export const Get = async () => {
    const res = await fetch(domain + `/rule`);
    const data = await res.json() as GetResponse;
    return data.Rules
}