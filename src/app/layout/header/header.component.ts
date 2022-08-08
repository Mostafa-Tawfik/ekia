import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
