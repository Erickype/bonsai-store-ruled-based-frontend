export interface Rule{
    id: number,
    name: string,
    desc: string,
    salience: number,
    when: string,
    then: string[]
}

export interface GetResponse{
    Rules: Rule[]
}