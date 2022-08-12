import { Injectable } from '@angular/core';
import { Standings } from './standings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremServiceService {

  standings: Array<Standings> = [{
    id: 1,
    rank:1,
    manager: "Mathesh Nanthakumaran",
    gameweek: 7,
    total:78
  },
  {
    id: 1,
    rank:2,
    manager: "Sarujan Rajaratname",
    gameweek: 74,
    total:78
  }
]

  constructor() { }

  getPrem(): Observable<Standings[]> {
    const results = of(this.standings);
    return results;
  }
}
