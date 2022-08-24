import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-personal-info',
  templateUrl: './checkout-personal-info.component.html'
})
export class CheckoutPersonalInfoComponent implements OnInit {

  personalInfo = {
    'firstName':  '',
    'lastName': '',
    'email':  '',
    'mobile': ''
  }

  constructor(
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
  }

  setPersonalInfo() {
    this.checkoutService.setOrderSection('personalInfo', this.personalInfo)
  }

  setPersonalInfoValid() {
    this.checkoutService.isPersonalInfoValid$.next(true)
  }

}
