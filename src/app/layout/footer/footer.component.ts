import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  externalLinks = [
    { 
      linksTitle: 'Useful Links',
      linksInfo: [
        { path: '' , title: 'Home' },
        { path: 'products', title: 'Products' },
        { path: 'about', title: 'About EKIA' },
        { path: 'contact', title: 'Contact us' },
      ]
    },

    {
      linksTitle: 'Quick Links',
      linksInfo: [
        { path: '' , title: 'My Orders' },
        { path: '', title: 'My Wishlist' },
        { path: '', title: 'My Account' },
        { path: '', title: 'My Favorite' },
        { path: '', title: 'Terms of use' },
      ]
    },

    {
      linksTitle: 'Follow us on',
      linksInfo: [
        { path: '' , title: 'Facebook' },
        { path: '', title: 'Twitter' },
        { path: '', title: 'Instagram' },
        { path: '', title: 'Linkedin' },
      ]
    }
  ]





  constructor() { }

  ngOnInit(): void {
  }

}
