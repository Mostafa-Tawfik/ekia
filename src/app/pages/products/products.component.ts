import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

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
