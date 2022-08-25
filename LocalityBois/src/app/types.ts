export type LeagueEntryDelegate = {
    id: number
    event_total: number
    player_name: string
    rank: number
    last_rank: number
    rank_sort: number
    total: number
    entry: number
    entry_name: string
  }

export type H2HEntryDelegate = {
    id: number
    event_total: number
    player_name: string
    rank: number
    last_rank: number
    rank_sort: number
    total: number
    entry: number
    entry_name: string
    matches_played: number
    matches_won: number
    matches_drawn: number
    matches_lost: number
    points_for: number
  }

  export type DraftStandingDelegate = {
    rank: number
    last_rank: number
    rank_sort: number
    total: number
    league_entry: number
    matches_played: number
    matches_won: number
    matches_drawn: number
    matches_lost: number
    points_for: number
    points_against:number
  }

  export type DraftLeagueEntryDelegate = {
    entry_id:number
    entry_name:string
    id:number
    joined_time:string
    player_first_name: string
    player_last_name: string
    short_name: string
    waiver_pick: number
  }

  export type cup = {
    entry: number
    points:number
    player_name: string
    rank:number
    total:number
    won: number
    drawn: number
    lost: number
  }

  export type prem = {
    event_total: number
    player_name: string
    rank: number
    total: number
    entry: number
  }