import { Injectable } from '@angular/core';
import { cup, DraftResp, H2HEntryDelegate, LeagueEntryDelegate, prem } from './types';

@Injectable({
  providedIn: 'root'
})
export class PremServiceService {

  constructor() {}

  async premserve(): Promise<Array<LeagueEntryDelegate>> {
    const res = await fetch('https://fantasy.premierleague.com/api/leagues-classic/809489/standings/');
    const body = await res.text();
    const rep = JSON.parse(body).standings.results;
    return rep
  }

  getPrem(): prem[] {
    const standings: prem[] = []
    this.premserve().then((results) => {
      for ( const x of results) {
        standings.push({
          player_name: x.player_name,
          event_total: x.event_total,
          rank: x.rank,
          total: x.total,
          entry: x.entry,
        })
      }
    })
    return standings
  }

  async champserve(): Promise<Array<H2HEntryDelegate>> {
    const res = await fetch('https://fantasy.premierleague.com/api/leagues-h2h/1367205/standings/');
    const body = await res.text();
    const rep = JSON.parse(body).standings.results;
    return rep
  }

  getChamp(): cup[] {
    const standings: cup [] = []
    this.champserve().then((results) =>{
      for (const x of results) {
        standings.push({
          player_name: x.player_name,
          points: x.points_for,
          rank: x.rank,
          total: x.total,
          entry: x.entry,
          won: x.matches_won,
          drawn: x.matches_drawn,
          lost: x.matches_lost,
        })
      }
    })
    return standings
  }

  async europserve(): Promise<Array<H2HEntryDelegate>> {
    const res = await fetch('https://fantasy.premierleague.com/api/leagues-h2h/1436652/standings/');
    const body = await res.text();
    const rep = JSON.parse(body).standings.results;
    return rep
  }

  getEurop(): cup[] {
    const standings: cup[] = []
    this.europserve().then((results) => {
      for (const x of results) {
        standings.push({
          player_name: x.player_name,
          points: x.points_for,
          rank: x.rank,
          total: x.total,
          entry: x.entry,
          won: x.matches_won,
          drawn: x.matches_drawn,
          lost: x.matches_lost,
        })
      }
    })
    return standings
  }

  async facupserve(): Promise<DraftResp> {
    const res = await fetch('https://draft.premierleague.com/api/league/129208/details');
    const body = await res.text();
    const rep = JSON.parse(body);
    return rep
  }

  getFacup(): cup[] {
    const standings: cup[] = []
    this.facupserve().then((result) => {
      for (const x of result.standings) {
        const filt = result.league_entries.filter((y) => y.id == x.league_entry)
        let name: string
        if (filt) {
          name = filt[0].player_first_name + " " + filt[0].player_last_name
        } else {
          name = 'AVERAGE'
        }
        standings.push({
          player_name: name,
          points: x.points_for,
          rank: x.rank,
          total: x.total,
          entry: x.league_entry,
          won: x.matches_won,
          drawn: x.matches_drawn,
          lost: x.matches_lost,
        })
      }
    })
    return standings
  }

}
