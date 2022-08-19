import { Injectable } from '@angular/core';
import { MobileNav } from 'src/app/models/mobile-nav';
import { AuthService } from 'src/app/services/auth.service';
import { NavItems } from '../../models/navItems';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private auth: AuthService,
  ) { }

  navItems: NavItems[] = [
    { 
      path: '', title: 'Home' 
    },
    { 
      path: 'products', title: 'Products' 
    },
    { 
      path: 'about', title: 'About EKIA' 
    },
  ]

  navIcons: MobileNav[] = [
    {
      name: 'search',
      path: 'search',
      icon: 'magnifying-glass'
    },
    {
      name: 'account',
      path: this.checkUser(),
      icon: 'user'
    },
    {
      name: 'wishlist',
      path: 'wishlist',
      icon: 'heart'
    },
    {
      name: 'cart',
      path: 'cart',
      icon: 'cart-shopping'
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
