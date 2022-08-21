import { Component, OnInit } from '@angular/core';

import { MobileNav } from 'src/app/models/mobile-nav';
import { CartService } from 'src/app/pages/cart/cart.service';
import { NavItems } from '../../models/navItems';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  navItems: NavItems[] = []
  navIcons: MobileNav[] = []

  cartCount: number = 0
  
  constructor(
    private headerService: HeaderService,
    private cartService: CartService
    ) {
      this.cartService.cart$.subscribe(res => console.log(res))
      this.cartService.cart$.subscribe(res => this.cartCount = res.length)
    }
    
    
  ngOnInit(): void {
    this.navItems = this.headerService.navItems
    this.navIcons = this.headerService.navIcons

    // this.cartCount = this.cartService.cart.length
  }
}
