import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  
  // set Observable to watch the fetched product
  product: Product

  // assign param id to a variable
  paramId: number = +this.route.snapshot.paramMap.get('id')!

  // user variable
  user: any
  
  constructor(
    private route: ActivatedRoute,
    private httpService: DataService,
    private fss: FirestoreService,
    private auth: AuthService,
    public alertService: AlertService,
    private cartService: CartService
    ) {
      this.product= {
        id: 0,
        name: '',
        category: '',
        price: 0,
        img: '',
        desc: ''
      }
      // get the logged in user details
      this.user = this.auth.currentUser
    }
    
  ngOnInit(): void {
    // get product details
    this.httpService.getProductById(this.paramId).subscribe(data => {
      this.product = data[0]
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  addToDoc(product: Product, docName: String) {
    if(this.user.email) {
      this.fss.addToDoc(product, this.user.email, docName)
    } else {
      this.alertService.setAlert(true, 'Please sign in to continue', false)
    }
  }
}
