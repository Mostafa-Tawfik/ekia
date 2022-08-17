import { Component, OnInit } from '@angular/core';
import { faCartShopping, faCouch, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { MobileNav } from '../models/mobile-nav';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {

  
  mobileNavItems: MobileNav[] = [
    { name: "Home", icon: faHouse, dis: "translate-x-0", path: '/home' },
    { name: "Products", icon: faCouch, dis: "translate-x-16", path: '/products'},
    { name: "Search", icon: faMagnifyingGlass, dis: "translate-x-32", path: '/search' },
    { name: "Account", icon: faUser, dis: "translate-x-48", path: this.checkUser() },
    { name: "Cart", icon: faCartShopping, dis: "translate-x-64", path: '/cart' },
  ]
  
  constructor(
    private auth: AuthService
    ) {}
    
  ngOnInit(): void {
  }

  checkUser() {
    if(this.auth.currentUser.email) {
      return '/account'
    } else {
      return '/signin'
    } 
  }
}
