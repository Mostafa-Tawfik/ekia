import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-shipping',
  templateUrl: './checkout-shipping.component.html'
})
export class CheckoutShippingComponent implements OnInit {

  isPersonalInfoValid: boolean = false

  shippmentDetails = {
    'address':  '',
    'city': '',
    'postalCode':  ''
  }

  constructor(
    private checkoutService: CheckoutService
  ) { }

  ngOnInit(): void {
    // watch for personal info vailation
    this.checkoutService.isPersonalInfoValid$.subscribe(res => this.isPersonalInfoValid = res)
  }

  // set the shipping details form vaild
  setShippingVaild() {
    this.checkoutService.isShippmentValid$.next(true)
  }

  setShippmentDetails() {
    this.checkoutService.setOrderSection('shippmentDetails', this.shippmentDetails)
  }
}
