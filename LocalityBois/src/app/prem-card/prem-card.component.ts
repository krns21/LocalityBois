import { Component, OnInit } from '@angular/core';
import { Standings } from '../standings';
import { PremServiceService } from '../prem-service.service';

@Component({
  selector: 'app-prem-card',
  templateUrl: './prem-card.component.html',
  styleUrls: ['./prem-card.component.css']
})
export class PremCardComponent implements OnInit {
  standings: Standings[] = [];

  constructor(private premService:PremServiceService) {}

  getPrem(): void {
    this.premService.getPrem()
        .subscribe(results => this.standings=results);
  }

  ngOnInit(): void {
    this.getPrem();
  }

}
