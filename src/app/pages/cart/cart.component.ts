import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: any = []

  constructor(
    private cartSevice: CartService
  ) {
    this.cart = this.cartSevice.getCart()
  }
  
  ngOnInit(): void {
  }

  deleteFromCart(productId: number) {
    this.cartSevice.deleteFromCart(productId)
    this.cart = this.cartSevice.getCart()
  }

  setProductQty(productId: number, qty: number) {
    this.cartSevice.setProductQty(productId, qty)
    this.cart = this.cartSevice.getCart()
  }

}
