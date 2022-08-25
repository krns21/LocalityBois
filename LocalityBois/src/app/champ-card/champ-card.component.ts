import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { cup, H2HEntryDelegate } from '../types';

@Component({
  selector: 'app-champ-card',
  templateUrl: './champ-card.component.html',
  styleUrls: ['./champ-card.component.css']
})
export class ChampCardComponent implements OnInit {
  champResults!: Promise<Array<H2HEntryDelegate[]>>
  standings: cup[] = []

  constructor(private api: PremServiceService) {}

  getChamp(): void {
    this.champResults = this.api.champserve()
    this.champResults.then( (result) => {
      for (const x of result[0]) {
        this.standings.push({
          player_name: x.player_name,
          points: x.points_for,
          rank: x.rank,
          total: x.total,
          entry: x.entry,
          won: x.matches_won,
          drawn: x.matches_drawn,
          lost: x.matches_lost,
        }
        )
      }
    })
  }

  ngOnInit(): void {
    this.getChamp()
  }

}
