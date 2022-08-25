import { Component, OnInit } from '@angular/core';
import { PremServiceService } from '../prem-service.service';

@Component({
  selector: 'app-prem-card',
  templateUrl: './prem-card.component.html',
  styleUrls: ['./prem-card.component.css']
})
export class PremCardComponent implements OnInit {
  premResults!: Promise<Array<Object[]>>
  constructor(private premService:PremServiceService) {}


  getPrem(): void {
    this.premResults = this.premService.premserve()
    this.premResults.then( (result) => {
      for (const x of result[0]) {
        console.log(x)
      }
      console.log(result)
    })
  }

  ngOnInit(): void {
    this.getPrem();
  }

}
