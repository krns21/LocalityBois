import { Injectable } from '@angular/core';
import { DraftLeagueEntryDelegate, DraftStandingDelegate, H2HEntryDelegate, LeagueEntryDelegate } from './types';

@Injectable({
  providedIn: 'root'
})
export class PremServiceService {

  constructor() {}

  async premserve(): Promise<Array<LeagueEntryDelegate[]>> {
    const res = await fetch('https://fantasy.premierleague.com/api/leagues-classic/809489/standings/');
    const body = await res.text();
    const rep = JSON.parse(body).standings.results;
    return [rep]
  }

  async champserve(): Promise<Array<H2HEntryDelegate[]>> {
    const res = await fetch('https://fantasy.premierleague.com/api/leagues-h2h/1367205/standings/');
    const body = await res.text();
    const rep = JSON.parse(body).standings.results;
    return [rep]
  }

  async europserve(): Promise<Array<H2HEntryDelegate[]>> {
    const res = await fetch('https://fantasy.premierleague.com/api/leagues-h2h/1436652/standings/');
    const body = await res.text();
    const rep = JSON.parse(body).standings.results;
    return [rep]
  }

  async facupserve(): Promise<Array<DraftStandingDelegate[]>> {
    const res = await fetch('https://draft.premierleague.com/api/league/129208/details');
    const body = await res.text();
    const rep = JSON.parse(body).standings;
    return [rep]
  }

  async facupserve2(): Promise<Array<DraftLeagueEntryDelegate>> {
    const res = await fetch('https://draft.premierleague.com/api/league/129208/details');
    const body = await res.text();
    const rep = JSON.parse(body).league_entries;
    return rep
  }
}
