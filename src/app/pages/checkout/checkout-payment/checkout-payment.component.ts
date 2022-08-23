import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html'
})
export class CheckoutPaymentComponent implements OnInit {

  isShippmentValid: boolean = false

  paymentDetails = {
    'paymentMethod':  '',
  }

  constructor(
    private checkoutService: CheckoutService
  ) { }

  ngOnInit(): void {
    // watch for shipping details validation
    this.checkoutService.isShippmentValid$.subscribe(res => this.isShippmentValid = res)
  }

  setPaymentDetails() {
    this.checkoutService.setOrderSection('paymentDetails', this.paymentDetails)
    this.checkoutService.isPaymentValid$.next(true)
  }
}
