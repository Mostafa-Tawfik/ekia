import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  constructor(
    public fss: FirestoreService
    ) {}

  ngOnInit(): void {
    this.fss.getAllProducts(this.products)
  }
}
