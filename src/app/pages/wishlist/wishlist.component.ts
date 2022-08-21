import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html'
})
export class WishlistComponent implements OnInit {

  currentUser: any
  wishlistProducts: Product[] = []

  constructor(
    private auth: AuthService,
    private wishlistService: WishlistService
  ) {
    this.currentUser = this.auth.getCurrentUser()
  }

  ngOnInit(): void {
    this.wishlistService.getWishlist().then(res => this.wishlistProducts = (res))
  }

}
