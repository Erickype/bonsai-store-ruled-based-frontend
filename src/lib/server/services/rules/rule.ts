export interface Rule {
    id: number;
    name: string;
    desc: string;
    salience: number;
    when: { [key: string]: { [key: string]: PairExpression[] }[] };
    then: string[];
}

export interface PairExpression {
    obj?: string;
    const?: boolean | number | string;
}

export interface GetResponse {
    Rules: Rule[]
}