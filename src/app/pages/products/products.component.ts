import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { doc, Firestore, onSnapshot } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  constructor(
    public fs: Firestore,
    public firestoreService: FirestoreService
    ) { }

  ngOnInit(): void {
    const docRef = doc(this.fs, 'admin', 'products')

    onSnapshot(docRef, (doc) => {
      if(doc.exists()) {
        this.products = doc.data()?.['products']
        return this.products
      } else {
        return console.log('Document not found');
      }
    }) 
  }
}
