export interface Rule{
    ID: number,
    Name: string,
    Desc: string,
    Salience: number,
    When: string,
    Then: string[]
}

export interface GetResponse{
    Rules: Rule[]
}