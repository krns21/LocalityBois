import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { cup, H2HEntryDelegate } from '../types';

@Component({
  selector: 'app-champ-card',
  templateUrl: './champ-card.component.html',
  styleUrls: ['./champ-card.component.css']
})
export class ChampCardComponent implements OnInit {
  champResults!: Promise<Array<H2HEntryDelegate>>
  standings: cup[] = []

  constructor(private api: PremServiceService) {}

  getChamp(): void {
    this.standings = this.api.getChamp()
  }

  ngOnInit(): void {
    this.getChamp()
  }

}
