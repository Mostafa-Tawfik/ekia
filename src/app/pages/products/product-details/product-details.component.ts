import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FirestoreService } from 'src/app/core/services/firestore.service';
// import { Observable } from 'rxjs';
// import { FirestoreService } from 'src/app/core/services/firestore.service';

import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  // set Observable to watch the fetched product
  product: Product

  // assign param id to a variable
  paramId: number = +this.route.snapshot.paramMap.get('id')!

  user: any

  
  constructor(
    private route: ActivatedRoute,
    private httpService: DataService,
    private fss: FirestoreService,
    private auth: AuthService
    ) {
      this.product= {
        id: 0,
        name: '',
        category: '',
        price: 0,
        img: '',
        desc: ''
      }
      // this.product = this.fss.getProduct(this.paramId)   
    }
    
  ngOnInit(): void {
    this.httpService.getProductById(this.paramId).subscribe(data => {
      this.product = data[0]
    }) 

    this.user = this.auth.currentUser
    // console.log(this.user);
  }

  addToCart(product: Product) {
    this.fss.addToCart(product, this.user)
  }

  addToWishlist(product: Product) {
    this.fss.addToWishlist(product, this.user)
  }

  // images uses cloudinary as an img cdn to optimize imgs
  // usage src='imgBaseUrl/width/item.img'
  imgBaseUrl: string = 'https://res.cloudinary.com/do1rqqi7v/image/upload/'
}
