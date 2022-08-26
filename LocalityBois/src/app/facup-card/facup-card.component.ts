import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { cup, DraftLeagueEntryDelegate, DraftStandingDelegate } from '../types';

@Component({
  selector: 'app-facup-card',
  templateUrl: './facup-card.component.html',
  styleUrls: ['./facup-card.component.css']
})
export class FacupCardComponent implements OnInit {
  standings: cup[] = []
  constructor(private api: PremServiceService) { }

  getFacup():void {
    this.standings = this.api.getFacup()
  }

  ngOnInit(): void {
    this.getFacup()
  }

}
