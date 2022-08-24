import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/auth/auth.service';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  currentUser: any = this.auth.getCurrentUser()

  wishlistProducts: Product[] = []

  wishlist$ = new Subject<Product[]>()

  constructor(
    private fss: FirestoreService,
    private auth: AuthService,
    private alertService: AlertService
  ) {
    this.auth.currentUser$.subscribe((res: any) => this.currentUser = res)
    this.getWishlist()
  }


  // get the wishlist from firestore
  getWishlist(): Product[] {
    if(this.currentUser.email) {
      this.fss.getDoc(this.currentUser.email, 'wishlist')
      .then(res => {
        this.wishlistProducts = res
        this.wishlist$.next(res)
      })
      return this.wishlistProducts
    } else {
      return this.wishlistProducts = []
    }
  }

  // check if the product already in the wishlist
  checkInWishlist(productId: number): boolean {
    if(this.currentUser.email) {
      return this.wishlistProducts.map((i: Product) => i.id).includes(productId)
    } else {
      return false
    }
  }

  // add to wishlist
  addToWishlist(product: Product) {
    if(this.currentUser.email) {
      this.fss.addToDoc(product, this.currentUser.email, 'wishlist')
      this.getWishlist()
      this.alertService.setAlert(true, `Product added to wishlist!`, true)
    } else {
      this.alertService.setAlert(true, 'Please sign in to continue', false)
    }
  }

  // remove from wishlist
  removeFromWishlist(product: Product) {
    this.fss.deleteDoc(product, this.currentUser.email, 'wishlist')
    this.getWishlist()
    this.alertService.setAlert(true, `Product removed from wishlist!`, true)
  }
}
