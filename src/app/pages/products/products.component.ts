import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  constructor(private httpService: DataService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data=> {
      this.products = data
    })
  }
}
