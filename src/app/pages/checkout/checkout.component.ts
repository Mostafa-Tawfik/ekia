import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  isPaymentValid: boolean = false

  order: any

  constructor(
    private checkoutService: CheckoutService
  ) {
    this.order = this.checkoutService.getOrder()
  }

  ngOnInit(): void {
      // watch for shipping details validation
      this.checkoutService.isPaymentValid$.subscribe(res => this.isPaymentValid = res)

    this.checkoutService.order$.subscribe(res => this.order = res)
  }

  generateOrder() {
    this.checkoutService.setOrder()
  }

}
