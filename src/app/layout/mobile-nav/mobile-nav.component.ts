import { Component, OnInit } from '@angular/core';
import { faCouch, faGear, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { MobileNav } from '../models/mobile-nav';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {
  mobileNavItems: MobileNav[] = [
    { name: "Home", icon: faHouse, dis: "translate-x-0", path: '' },
    { name: "Products", icon: faCouch, dis: "translate-x-16", path: '/products' },
    { name: "Search", icon: faMagnifyingGlass, dis: "translate-x-32", path: '' },
    { name: "Account", icon: faUser, dis: "translate-x-48", path: '' },
    { name: "Settings", icon: faGear, dis: "translate-x-64", path: '' },
  ]

  active: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  setActive(i:number) {
    return this.active=i
  }
}
