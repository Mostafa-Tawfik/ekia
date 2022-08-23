import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { PersonalInfo } from '../models/personal-info';

@Component({
  selector: 'app-checkout-personal-info',
  templateUrl: './checkout-personal-info.component.html'
})
export class CheckoutPersonalInfoComponent implements OnInit {

  personalInfo: PersonalInfo = {
    'firstName':  '',
    'lastName': '',
    'email':  '',
    'mobile': 0
  }


  constructor(
    private checkout: CheckoutService
  ) {}

  ngOnInit(): void {
  }

  setPersonalInfo() {
    this.checkout.setPersonalInfo('personalInfo', this.personalInfo)
    console.log(this.checkout.order);
  }

}
