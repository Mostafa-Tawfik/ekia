import { Component, OnInit } from '@angular/core';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCartShopping = faCartShopping
  faBars = faBars

}
