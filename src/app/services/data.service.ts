import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProductById(id: number): Observable<Product[]> {
    return this.http
    // get the data form data.json
    .get<Product[]>('assets/data/products-data.json')
    // filter the data and return product with id
    .pipe(map(res => {
      return res.filter((item: Product) => item.id == id)
    }))
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<[]>('assets/data/products-data.json')
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<[]>('assets/data/categories-data.json')
  }
}
