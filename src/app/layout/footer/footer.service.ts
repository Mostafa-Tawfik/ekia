import { Injectable } from '@angular/core';
import { Footer } from '../models/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  externalLinks: Footer[] = [
    {
      linksTitle: 'Useful Links',
      linksInfo: [
        { path: '' , title: 'Home' },
        { path: 'products', title: 'Products' },
        { path: 'about', title: 'About EKIA' },
      ]
    },

    {
      linksTitle: 'Quick Links',
      linksInfo: [
        { path: '/account' , title: 'My Orders' },
        { path: '/wishlist', title: 'My Wishlist' },
        { path: '/account', title: 'My Account' },
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
}
