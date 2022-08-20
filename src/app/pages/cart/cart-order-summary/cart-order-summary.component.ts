import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-order-summary',
  templateUrl: './cart-order-summary.component.html'
})
export class CartOrderSummaryComponent implements OnInit {
  @Input() cartSubtotal: number

  constructor() {
    this.cartSubtotal = 0
  }

  ngOnInit(): void {
  }

}
