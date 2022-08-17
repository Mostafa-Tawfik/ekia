import { Component, OnInit } from '@angular/core';

import { MobileNavService } from './mobile-nav.service';
import { MobileNav } from '../models/mobile-nav';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {
  
  mobileNavItems: MobileNav[] = []
  
  constructor(
    private layout: MobileNavService
    ) {}
    
  ngOnInit(): void {
    this.mobileNavItems = this.layout.mobileNavItems
  }

}
