import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = [
    { link: '', title: 'Home' },
    { link: 'products', title: 'Products' },
    { link: 'about', title: 'About EKIA' },
    { link: 'contact', title: 'Contact us' },
  ]

  
  constructor(
    ) { }
    

  ngOnInit(): void {
  }
}
