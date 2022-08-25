import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { LeagueEntryDelegate, prem } from '../types';

@Component({
  selector: 'app-prem-card',
  templateUrl: './prem-card.component.html',
  styleUrls: ['./prem-card.component.css']
})
export class PremCardComponent implements OnInit {
  premResults!: Promise<Array<LeagueEntryDelegate[]>>
  standings: prem[] = []
  constructor(private premService:PremServiceService) {}


  getPrem(): void {
    this.premResults = this.premService.premserve()
    this.premResults.then( (result) => {
      for (const x of result[0]) {
        this.standings.push({
          player_name: x.player_name,
          event_total: x.event_total,
          rank: x.rank,
          total: x.total,
          entry: x.entry,
        }
        )
      }
    })
  }

  ngOnInit(): void {
    this.getPrem();
  }

}
