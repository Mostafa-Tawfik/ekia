import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  currentUser: any

  wishlistProducts: Product[] = []

  constructor(
    private fss: FirestoreService,
    private auth: AuthService,
    private alertService: AlertService
  ) {
    this.currentUser = this.auth.getCurrentUser()
    this.getWishlist()
  }


  // get the wishlist
  async getWishlist(): Promise<Product[]> {
    if(this.currentUser.email) {
      await this.fss.getDoc(this.currentUser.email, 'wishlist')
      .then(res => this.wishlistProducts = res)
      return this.wishlistProducts
    } else {
      return this.wishlistProducts = []
    }
  }

  // check if the product already in the wishlist
  checkInWishlist(productId: number) {
    return this.wishlistProducts.map((i: Product) => i.id).includes(productId)    
  }

  // add to wishlist
  addToWishlist(product: Product) {
    if(this.currentUser.email) {
      this.fss.addToDoc(product, this.currentUser.email, 'wishlist')
      this.getWishlist()
    } else {
      this.alertService.setAlert(true, 'Please sign in to continue', false)
    }
  }

  // remove from wishlist
  removeFromWishlist(product: Product) {
    this.fss.deleteDoc(product, this.currentUser.email, 'wishlist')
    this.getWishlist()
  }
}
