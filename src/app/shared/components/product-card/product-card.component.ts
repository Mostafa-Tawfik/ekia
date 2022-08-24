import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/pages/wishlist/wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() item: Product

  constructor(
    private wishlistService: WishlistService
  ) {
    this.item = {
      id: 1,
      name: '',
      category: '',
      price: 0,
      img: '',
      desc: ''
    }
  }

  ngOnInit(): void {
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

  // images uses cloudinary as an img cdn to optimize imgs
  // usage src='imgBaseUrl/width/item.img'
  imgBaseUrl: string = 'https://res.cloudinary.com/do1rqqi7v/image/upload/'

}
