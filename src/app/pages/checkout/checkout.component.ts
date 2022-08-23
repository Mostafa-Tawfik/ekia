import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  isPaymentValid: boolean = false

  isOrderPlaced: boolean = false

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

  // generate random order id
  generateOrderId() {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
  }

  // place the order
  generateOrder() {
    // generate random id
    this.checkoutService.setOrderSection('id', this.generateOrderId())

    // place the order
    this.checkoutService.setOrder()

    // show the successful page
    this.isOrderPlaced = true

    // scroll to top
    window.scrollTo(0, 0)

    // reset the cart
    localStorage.setItem('cart', '')
  }

}
