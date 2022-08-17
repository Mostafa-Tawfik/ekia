import { Injectable } from '@angular/core';

import { MobileNav } from '../models/mobile-nav';
import { faCartShopping, faCouch, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
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
      name: "Home", icon: faHouse, dis: "translate-x-0", path: '/home' 
    },
    { 
      name: "Products", icon: faCouch, dis: "translate-x-16", path: '/products'
    },
    { 
      name: "Search", icon: faMagnifyingGlass, dis: "translate-x-32", path: '/search' 
    },
    { 
      name: "Account", icon: faUser, dis: "translate-x-48", path: this.checkUser() 
    },
    { 
      name: "Cart", icon: faCartShopping, dis: "translate-x-64", path: '/cart' 
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
