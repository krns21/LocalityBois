import { Injectable } from '@angular/core';
import { ballon, cup, DraftResp, H2HEntryDelegate, LeagueEntryDelegate, prem } from './types';

@Injectable({
  providedIn: 'root'
})
export class PremServiceService {

  constructor() {}

  async premserve(): Promise<Array<LeagueEntryDelegate>> {
    const res = await fetch('https://still-waters-38230.herokuapp.com/https://fantasy.premierleague.com/api/leagues-classic/809489/standings/');
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
    const res = await fetch('https://still-waters-38230.herokuapp.com/https://fantasy.premierleague.com/api/leagues-h2h/1367205/standings/');
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
    const res = await fetch('https://still-waters-38230.herokuapp.com/https://fantasy.premierleague.com/api/leagues-h2h/1436652/standings/');
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
    const res = await fetch('https://still-waters-38230.herokuapp.com/https://draft.premierleague.com/api/league/129208/details');
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
        if (filt[0].player_first_name) {
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

  getBallon(): ballon[] {
    const premstandings: ballon[] = []
    const champstandings: ballon[] = []
    const europstandings: ballon[] = []
    // initialize prem results
    this.premserve().then((result) => {
      for (const x of result) {
        premstandings.push({
          player_name: x.player_name,
          entry: x.entry,
          total: premS[x.rank-1],
          prem: premS[x.rank-1],
          champ: 0,
          europ: 0,
          facup: 0
        })
      }
    }).then(() => {
      this.champserve().then((result) => {
        for (const x of premstandings) {
          const champFilt = result.filter((y) => y.player_name == x.player_name)
          if (champFilt[0]) {
            champstandings.push({
              player_name: x.player_name,
              entry: x.entry,
              total: x.total + champS[champFilt[0].rank-1],
              prem: x.prem,
              champ: champS[champFilt[0].rank-1],
              europ: 0,
              facup: 0
            })
          } else {
             champstandings.push(x)
          }
        }
      }).then(() => {
      this.europserve().then((result) => {
        for (const x of champstandings) {
          const europFilt = result.filter((y) => y.player_name == x.player_name)
          if (europFilt[0]) {
            europstandings.push({
              player_name:x.player_name,
              entry: x.entry,
              total: x.total + europS[europFilt[0].rank-1],
              prem: x.prem,
              champ: x.champ,
              europ: europS[europFilt[0].rank-1],
              facup: 0
            })
          } else {
            europstandings.push(x)
          }
        }
      }).then(() => {
      this.facupserve().then((result) => {
        for (const x of europstandings) {
          const filt = result.league_entries.filter((y) => y.player_first_name + " "+ y.player_last_name == x.player_name)
          if (filt[0]) {
            const filt2 = result.standings.filter((z) => z.league_entry == filt[0].id)
            if (filt2[0]) {
              standings.push({
                player_name: x.player_name,
                entry: x.entry,
                total: x.total + facupS[filt2[0].rank-1],
                prem: x.prem,
                champ: x.champ,
                europ: x.europ,
                facup: facupS[filt2[0].rank-1]
              })
            }
          } else {
            standings.push(x)
          }
        }
      }).then(() => {
        standings.sort((a,b) => b.total - a.total)
      })
    })
    })
    })
    const premS = [26,22,18,13,9,6,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const champS = [22,20,18,16,8,6,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const europS = [10,7,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const facupS= [14,12,9,7,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const standings: ballon[] = []
    return standings
  }

}
