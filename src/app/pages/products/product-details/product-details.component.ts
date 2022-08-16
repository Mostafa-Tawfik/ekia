import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/core/services/firestore.service';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  // set Observable to watch the fetched product
  product: Observable<Product>
  nextProduct: Observable<Product>

  // assign param id to a variable
  paramId: string = this.route.snapshot.paramMap.get('id')!
  nextParamId: string = (+this.paramId+1).toString() 

  
  constructor(
    private route: ActivatedRoute,
    private fss: FirestoreService
    ) {
      this.product = this.fss.getProduct(this.paramId)   
      this.nextProduct = this.fss.getProduct(this.nextParamId)   
    }
    
  ngOnInit(): void {
  }

  // images uses cloudinary as an img cdn to optimize imgs
  // usage src='imgBaseUrl/width/item.img'
  imgBaseUrl: string = 'https://res.cloudinary.com/do1rqqi7v/image/upload/'
}
