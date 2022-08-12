import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() item: Product

  constructor() {
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

}
