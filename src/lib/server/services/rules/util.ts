import type { PairExpression, Rule } from "./rule"

export const processUpdateRule = async (formData: FormData) => {
    const id = parseInt(formData.get("id") as string);
    const name = formData.get("name") as string;
    const desc = formData.get("desc") as string;
    const salience = parseInt(formData.get("salience") as string);
    const when = formData.get("when") as unknown as  { [key: string]: { [key: string]: PairExpression[] }[] }
    const then = formData.getAll("then") as string[];

    const rule: Rule = {
        id: id,
        name: name,
        desc: desc,
        salience: salience,
        when: when,
        then: then
    };
    return rule;
};
