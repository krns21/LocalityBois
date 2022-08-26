import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';

@Component({
  selector: 'app-ballondor-card',
  templateUrl: './ballondor-card.component.html',
  styleUrls: ['./ballondor-card.component.css']
})
export class BallondorCardComponent implements OnInit {

  constructor(private api:PremServiceService) { }

  prem = this.api.getPrem()

  ngOnInit(): void {
  }

}
