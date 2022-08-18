import { Injectable } from '@angular/core';

import { MobileNav } from '../../models/mobile-nav';
import { AuthService } from '../../services/auth.service';

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
      name: "Search", icon: 'magnifying-glass', path: 'search' 
    },
    { 
      name: "Account", icon: 'user', path: this.checkUser() 
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
