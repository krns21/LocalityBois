import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { prem } from '../types';

@Component({
  selector: 'app-prem-card',
  templateUrl: './prem-card.component.html',
  styleUrls: ['./prem-card.component.css']
})
export class PremCardComponent implements OnInit {
  standings: prem[] = []
  constructor(private premService:PremServiceService) {}

  getPrem(): void {
    this.standings = this.premService.getPrem()
  }

  ngOnInit(): void {
    this.getPrem();
  }

}
