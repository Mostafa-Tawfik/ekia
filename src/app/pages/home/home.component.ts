import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
