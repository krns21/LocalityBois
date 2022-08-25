import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { cup, H2HEntryDelegate } from '../types';

@Component({
  selector: 'app-europ-card',
  templateUrl: './europ-card.component.html',
  styleUrls: ['./europ-card.component.css']
})
export class EuropCardComponent implements OnInit {
  europResults!: Promise<Array<H2HEntryDelegate[]>>
  standings: cup[] = []
  
  constructor(private api: PremServiceService) {}
  
  getEurop(): void {
    this.europResults = this.api.europserve()
    this.europResults.then( (result) => {
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
    this.getEurop()
  }
  
  }
