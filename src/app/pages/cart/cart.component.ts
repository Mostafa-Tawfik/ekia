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
    this.cartSevice.getCart(this.products)
  }

  ngOnInit(): void {
    console.log(this.products);
  }
}
