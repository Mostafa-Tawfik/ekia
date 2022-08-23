import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  isPersonalInfoValid$ = new Subject <boolean>()
  isShippmentValid$ = new Subject <boolean>()
  isPaymentValid$ = new Subject <boolean>()

  currentUser = this.authService.getCurrentUser()
  cart = this.cartServive.getCart()

  order: any = []

  order$ = new Subject<any>()

  constructor(
    private fss: FirestoreService,
    private authService: AuthService,
    private cartServive: CartService
  ) {
    this.authService.currentUser$.subscribe(res => this.currentUser = res)
  }

  // get current order details
  getOrder() {
    this.order$.next(this.order)
    return this.order
  }

  // generate a new order
  async setOrder() {
    await this.fss.addToDoc(this.order, this.currentUser.email, 'orders')
    .then(res => alert('done'))
  }

  // set order section
  setOrderSection(property: any, value: any) {
    this.order = {
      cart: {
        ...this.cart
      },
      ...this.order,
      [property]: value
    }
    return this.getOrder()
  }
}
