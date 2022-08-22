import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/category';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  categories: Category[] = []

  constructor(private httpService: DataService) { }

  ngOnInit(): void {
    this.httpService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

}
