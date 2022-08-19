import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // fetch all products
  getProducts(): Observable<Product[]> {
    return this.http.get<[]>('assets/data/products-data.json')
  }

  // fetch all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<[]>('assets/data/categories-data.json')
  }

  // get product by id
  getProductById(id: number): Observable<Product[]> {
    return this.http
    // get the data form data.json
    .get<Product[]>('assets/data/products-data.json')
    // filter the data and return product with id
    .pipe(map(res => {
      return res.filter((item: Product) => item.id == id)
    }))
  }

  // filter products by category else return all products
  filterProductsByCategory(category: string): Observable<Product[]> {
    return this.http
    .get<Product[]>('assets/data/products-data.json')
    .pipe(map(res => {
      if(category == 'none') {
        return res
      } else {
        return res.filter((item: Product) => item.category == category)
      }
    }))
  }

  // // get random product
  // getRandomProduct(): Observable<Product> {
  //   return this.http
  //   .get<Product[]>('assets/data/products-data.json')
  //   .pipe(map (res => {
  //     return res[Math.floor(Math.random() * res.length)]
  //   }))
  // }
}
