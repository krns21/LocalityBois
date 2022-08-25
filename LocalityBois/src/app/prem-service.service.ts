import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremServiceService {

  constructor() {}

  async premserve(): Promise<Array<Object[]>> {
    const res = await fetch('https://fantasy.premierleague.com/api/leagues-classic/809489/standings/');
    const body = await res.text();
    const rep = JSON.parse(body).standings.results;
    return [rep]
  }
}
