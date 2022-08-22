import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/core/services/data.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { CartService } from '../../cart/cart.service';
import { WishlistService } from '../../wishlist/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  
  // set Observable to watch the fetched product
  product: Product

  // assign param id to a variable
  paramId: number = +this.route.snapshot.paramMap.get('id')!

  constructor(
    private route: ActivatedRoute,
    private httpService: DataService,
    public alertService: AlertService,
    private cartService: CartService,
    private wishlistService: WishlistService
    ) {
    this.product= {
      id: 0,
      name: '',
      category: '',
      price: 0,
      img: '',
      desc: ''
    }
  }
    
  ngOnInit(): void {
    // get product details
    this.httpService.getProductById(this.paramId).subscribe(data => {
      this.product = data[0]
    })      
  }

  // add to cart in localstorage
  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  // add to wishlist in firestore
  addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product)
  }

  // check if product already in wishlist
  checkInWishlist(productId: number) {
    return this.wishlistService.checkInWishlist(productId)
  }

  // remove product from wishlist
  removeFromWishlist(product: Product) {
    return this.wishlistService.removeFromWishlist(product)
  }
}
