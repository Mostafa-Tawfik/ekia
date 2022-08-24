import { Component, OnInit } from '@angular/core';

import { MobileNavService } from './mobile-nav.service';
import { MobileNav } from '../models/mobile-nav';
import { CartService } from 'src/app/pages/cart/cart.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
})
export class MobileNavComponent implements OnInit {

  mobileNavItems: MobileNav[] = []

  cartCount: number = 0

  constructor(
    private layout: MobileNavService,
    private cartService: CartService
    ) {
      this.cartCount = this.cartService.getCart().length
    }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(res => this.cartCount = res.length)
    this.mobileNavItems = this.layout.mobileNavItems
  }

}
