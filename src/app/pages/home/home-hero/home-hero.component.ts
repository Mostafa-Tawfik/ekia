import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
})
export class HomeHeroComponent implements OnInit {

  product: Product

  constructor(
    private httpService: DataService,
  ) {
    this.product= {
      id: 0,
      name: '',
      category: '',
      price: 0,
      img: '',
      desc: ''
    }
  }

  ngOnInit(): void {
    // get a random product to show as hero
    this.httpService.getRandomProduct().subscribe(data => {
      this.product = data
    }) 
  }
}
