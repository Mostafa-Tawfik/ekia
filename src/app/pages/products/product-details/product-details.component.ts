import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

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
      // get the logged in user details
      this.user = this.auth.currentUser
    }
    
  ngOnInit(): void {
    // get product details
    this.httpService.getProductById(this.paramId).subscribe(data => {
      this.product = data[0]
    })
  }

  addToDoc(product: Product, docName: String) {
    if(this.user.email) {
      this.fss.addToDoc(product, this.user.email, docName)
    } else {
      alert('Please sign in to continue')
    }
  }
}
