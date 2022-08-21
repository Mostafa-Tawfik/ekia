import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // a vairable to hold the cart
  cart: any = []
  cart$: Subject<any> = new Subject<any>()

  constructor(
    private localStorage: LocalStorageService,
    public alertService: AlertService,

    ) {
  }

  // get subtotal
  cartSubtotal() {
    if(this.cart.length > 0) {
      return this.cart.map((item: any) => item.qty * item.price)
      .reduce((x: number, y: number) => x + y)
    } else {
      this.cart
    }
    this.SaveTheCart()
  }

  // save the cart on localStorage
  SaveTheCart() {
    return this.localStorage.setLocalStorage('cart', this.cart)
  }

  // load the cart from localStorage
  loadTheCart() {
    return this.localStorage.getLocalStorage('cart', [])
  }

  // get the lastest version of the cart
  getCart() {
    this.cart = this.loadTheCart()
    this.cart$.next(this.loadTheCart())
    return this.cart
  }


  // add to cart
  addToCart(product: Product) {
    // check if the product already in cart
    const productInCart = this.cart.map((item: Product) => item.id).includes(product.id)

    if(!productInCart){
      // add the cart to the variable
      this.cart.push({...product, qty: 1})
      // save the cart after the new added product
      this.SaveTheCart()
      this.getCart()
      this.alertService.setAlert(true, 'Product added to cart', true)
    } else {
      this.alertService.setAlert(true, 'Product already in your cart', false)
    }    
  }


  // delete product from the cart
  deleteFromCart(ProductId:number) {
    this.cart = this.cart.filter((item: Product) => item.id != ProductId)
    this.SaveTheCart()
    this.alertService.setAlert(true, 'Product removed from your cart', true)
  }


  // set qty for products
  setProductQty(productId: number, qty: number) {
    this.cart = this.cart.map((item: Product) => {
      if(item.id === productId) {
        return {
          ...item,
          qty: qty
        }
      } else {
        return item
      }
    })
    this.SaveTheCart()
  }
}
