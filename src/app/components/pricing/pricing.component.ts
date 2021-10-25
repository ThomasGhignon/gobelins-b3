import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingData: any[];

  constructor() {
    this.pricingData = [
      {
        price: '29$',
        bandwidth: '1GB',
        space: '50MB',
        support: 'No',
        domain: 1
      },
      {
        price: '49$',
        bandwidth: '5GB',
        space: '80MB',
        support: 'Yes',
        domain: 4
      },
      {
        price: '79$',
        bandwidth: '10GB',
        space: '120MB',
        support: 'Yes',
        domain: 8
      }
    ];
  }

  ngOnInit(): void {
  }

}
