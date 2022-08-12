import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<[]> {
    return this.http.get<[]>('assets/data/products-data.json')
  }

  getCategories(): Observable<[]> {
    return this.http.get<[]>('assets/data/categories-data.json')
  }
}
