export interface Standings {
    id:number;
    rank: number;
    manager: string;
    gameweek: number;
    total: number;
}

export interface h2hStandings {
    id:number;
    rank: number;
    manager: string;
    win: number;
    draw: number;
    loss: number;
    gameweek: number;
    total: number;
}

export interface ballonStandings {
    id:number;
    rank:number;
    manager:string;
    PREM:number;
    CHAMP:number;
    EUROP:number;
    FACUP:number;
    total:number;
}