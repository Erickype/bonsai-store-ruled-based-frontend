import { domain } from "$lib/server/domain";
import type { GetResponse, Rule } from "./rule";

export const Get = async () => {
    const res = await fetch(domain + `/rule`);
    const data = await res.json() as GetResponse;
    return data.Rules
}

export const GetById = async (id:string) => {
    const res = await fetch(domain + `/rule/`+id)
    const data = await res.json() as Rule
    return data
}

export const Update = async (rule:Rule) => {
    const body = JSON.stringify(rule)
    await fetch(`${domain}/rule`,{
        method: "PUT",
        body: body
    })
    return true
}