import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html'
})
export class WishlistComponent implements OnInit {

  wishlistProducts: Product[] = []

  constructor(
    private wishlistService: WishlistService
  ) {
    this.wishlistProducts = this.wishlistService.getWishlist()
  }

  ngOnInit(): void {
    this.wishlistService.wishlist$.subscribe(res => this.wishlistProducts = res)
  }

}
