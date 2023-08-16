import type { Rule } from "./rule"

export const processUpdateRule = async (formData:FormData) => {
    const id = formData.get("id")?.valueOf()
    const name = formData.get("name")?.toString()
    const desc = formData.get("desc")?.toString()
    const salience = formData.get("salience")?.valueOf()
    const when = formData.get("when")?.toString()
    const then = formData.get("then")?.valueOf()
    const rule: Rule = {
        id: id as number,
        name: name as string,
        desc: desc as string,
        salience: salience as number,
        when: when as string,
        then: then as string[]
    }
    return rule
}