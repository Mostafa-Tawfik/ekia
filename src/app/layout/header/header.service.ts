import { Injectable } from '@angular/core';
import { NavItems } from '../../models/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

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
}
