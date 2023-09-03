export interface Rule {
    id: number;
    name: string;
    desc: string;
    salience: number;
    when: { [key: string]: { [key: string]: PairExpression[] }[] };
    then: Then[];
}

export interface Then {
    set?: Set[];
    call?: any[];
}

export interface Set {
    obj?: string;
    plus?: PairExpression[];
    minus?: PairExpression[];
    div?: PairExpression[];
    mul?: PairExpression[];
    mod?: PairExpression[];
}

export interface PairExpression {
    obj?: string;
    const?: boolean | number | string;
}

export interface GetResponse {
    Rules: Rule[]
}