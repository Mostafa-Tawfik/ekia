import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
})
export class HomeCategoriesComponent implements OnInit {
  @Input() category: Category

  constructor() {
    this.category = {
      id: 1,
      name: '',
      path: '',
      logo: '',
      img: '',
      desc: ''
    }
   }

  ngOnInit(): void {
  }
}
