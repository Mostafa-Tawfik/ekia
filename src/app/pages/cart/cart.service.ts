import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  user: any = {}
  products: Product[] = []

  constructor(
    private auth: AuthService,
    private fss: FirestoreService,
  ) {
    this.user = this.auth.currentUser
  }

  getDoc() {
    if(this.user.email) {
      this.fss.getDoc(this.user.email, 'cart')
      .then((res: Product[]) => this.products = res)
    } else {
      console.log('Please sign in to continue')
    }    
  }
}
