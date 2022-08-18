import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  products: Product[] = []

  constructor(
    private cartSevice: CartService
  ) {
    this.cartSevice.getDoc()
  }

  ngOnInit(): void {
    this.products = this.cartSevice.products
  }

  ngOnChange() {
    this.cartSevice.getDoc()
    this.products = this.cartSevice.products
  }
}
