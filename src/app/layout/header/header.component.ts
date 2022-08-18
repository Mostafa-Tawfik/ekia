import { Component, OnInit } from '@angular/core';

import { MobileNav } from 'src/app/models/mobile-nav';
import { NavItems } from '../../models/navItems';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  navItems: NavItems[] = []
  navIcons: MobileNav[] = []
 
  constructor(
    private headerService: HeaderService
    ) { }
    

  ngOnInit(): void {
    this.navItems = this.headerService.navItems
    this.navIcons = this.headerService.navIcons
  }
}
