import { Component, OnInit } from '@angular/core';

import { MobileNav } from 'src/app/layout/models/mobile-nav';
import { CartService } from 'src/app/pages/cart/cart.service';
import { NavItems } from '../models/navItems';
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
      this.cartCount = this.cartService.getCart().length
    }
    
  
  ngOnInit(): void {
    this.cartService.cart$.subscribe(res => this.cartCount = res.length)
    this.navItems = this.headerService.navItems
    this.navIcons = this.headerService.navIcons
  }
}
