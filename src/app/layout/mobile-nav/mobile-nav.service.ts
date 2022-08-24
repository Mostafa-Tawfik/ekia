import { Injectable } from '@angular/core';

import { MobileNav } from '../models/mobile-nav';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MobileNavService {

  constructor(
    private auth: AuthService,
  ) {}

  mobileNavItems: MobileNav[] = [
    {
      name: "Home", icon: 'house', path: 'home'
    },
    {
      name: "Products", icon: 'couch', path: 'products'
    },
    {
      name: "Account", icon: 'user', path: this.checkUser()
    },
    {
      name: "Wishlist", icon: 'heart', path: 'wishlist'
    },
    {
      name: "Cart", icon: 'cart-shopping', path: 'cart'
    },
  ]

  checkUser() {
    if(this.auth.currentUser.email) {
      return '/account'
    } else {
      return '/signin'
    }
  }
}
