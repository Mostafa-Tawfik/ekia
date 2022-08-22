import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: any = []
  cartSubtotal: number = 0


  constructor(
    private cartSevice: CartService,
  ) {
    this.cart = this.cartSevice.getCart()
    this.cartSubtotal = this.cartSevice.cartSubtotal()
  }
  
  ngOnInit(): void {
  }

  deleteFromCart(productId: number) {
    this.cartSevice.deleteFromCart(productId)
    this.cart = this.cartSevice.getCart()
    this.cartSubtotal = this.cartSevice.cartSubtotal()
  }

  setProductQty(productId: number, qty: number) {
    this.cartSevice.setProductQty(productId, qty)
    this.cart = this.cartSevice.getCart()
    this.cartSubtotal = this.cartSevice.cartSubtotal()
  }

}
