import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { cup, H2HEntryDelegate } from '../types';

@Component({
  selector: 'app-europ-card',
  templateUrl: './europ-card.component.html',
  styleUrls: ['./europ-card.component.css']
})
export class EuropCardComponent implements OnInit {
  europResults!: Promise<Array<H2HEntryDelegate>>
  standings: cup[] = []
  
  constructor(private api: PremServiceService) {}
  
  getEurop(): void {
    this.standings = this.api.getEurop()
  }

  ngOnInit(): void {
    this.getEurop()
  }
  
  }
