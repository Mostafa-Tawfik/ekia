import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';

import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []
  categories: Category[] = []

  // control which category is active
  cateoryActivated: string = ''

  constructor(
    public fss: FirestoreService,
    private httpService: DataService
    ) {}

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.products = data
    }) 
    this.httpService.getCategories().subscribe(data => {
      this.categories = data
    })
  }
  
  filterProducts(category: string) {
    this.httpService.filterProductsByCategory(category).subscribe(data => {
      this.products = data
    })
    this.cateoryActivated = category
  }
}
