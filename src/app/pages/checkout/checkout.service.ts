import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  order: any = []

  constructor() {}

  setPersonalInfo(property: any, value: any) {
    this.order = {
      ...this.order,
      [property]: value
    }
  }

  // setPersonalInfo(firstName: string, lastName: string, email: string, mobile: number) {
  //   this.order.map((order: any) => {
  //     return {
  //       ...order,
  //       personalInfo: {
  //         firstname: firstName,
  //         lastName: lastName,
  //         email: email,
  //         mobile: mobile
  //       }
  //     }
  //   })
  // }

}
