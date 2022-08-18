import { Component, OnInit } from '@angular/core';
import { NavItems } from '../../models/header';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  navItems: NavItems[] = []
 
  constructor(
    private headerService: HeaderService
    ) { }
    

  ngOnInit(): void {
    this.navItems = this.headerService.navItems
  }
}
