import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-filter-btn',
  templateUrl: './products-filter-btn.component.html'
})
export class ProductsFilterBtnComponent implements OnInit {
  @Input() categories: any
  @Input() cateoryActivated: any
  @Output() filter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  filterProducts(categoryName: string) {
    this.filter.emit(categoryName)
  }

}
