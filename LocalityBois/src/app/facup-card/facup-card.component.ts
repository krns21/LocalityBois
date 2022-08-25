import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { cup, DraftLeagueEntryDelegate, DraftStandingDelegate } from '../types';

@Component({
  selector: 'app-facup-card',
  templateUrl: './facup-card.component.html',
  styleUrls: ['./facup-card.component.css']
})
export class FacupCardComponent implements OnInit {
  facupResults!: Promise<Array<DraftStandingDelegate[]>>
  facupNames!: Promise<Array<DraftLeagueEntryDelegate>>
  standings: cup[] = []
  constructor(private api: PremServiceService) { }

  getFacup():void {
    this.facupResults = this.api.facupserve()
    this.facupResults.then((result) => {
      for (const x of result[0]) {
        this.standings.push({
          player_name: '',
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
    this.facupNames = this.api.facupserve2()
    this.facupNames.then((result) => {
      for ( const x of this.standings ) {
        const filt = result.filter((y)=> y.id== x.entry)
        x.player_name = filt[0].player_first_name
      }
    })
  }

  ngOnInit(): void {
    this.getFacup()
  }

}
