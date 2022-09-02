import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';
import { ballon, cup, prem } from '../types';

@Component({
  selector: 'app-ballondor-card',
  templateUrl: './ballondor-card.component.html',
  styleUrls: ['./ballondor-card.component.css']
})
export class BallondorCardComponent implements OnInit {
  standings: ballon[] = []
  check: number[] = []
  constructor(private api:PremServiceService) { }

  getBallon(): void {
    const prem = this.api.getPrem();
    this.standings = this.api.getBallon()
    console.log(prem)
    console.log(this.standings)
  }
  ngOnInit(): void {
    this.getBallon()
  }

}
