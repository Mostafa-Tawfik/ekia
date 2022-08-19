import { Injectable } from '@angular/core';
import { doc, setDoc, Firestore, getDoc, arrayUnion, updateDoc } from '@angular/fire/firestore';

import { Product } from 'src/app/models/product';
import { AlertService } from '../shared/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public db: Firestore,
    public alertService: AlertService
  ) {}


  // setup new document for current user using his email
  createDoc(email : any) {
    setDoc(doc(this.db, 'users', email),{
      wishlist: [],
      cart: [],
      orders: []
    })
    .then(()=>console.log('Doc Created!'))
    .catch(err => console.log(err.message))
  }


  // add to cart or wishlist, provide variable to save data, user email, document name, and as option any fnc to excute
  addToDoc = async (product: Product, userEmail: string, docName: any, fnc?: any)=> {
    fnc ? fnc() : ''
    await updateDoc(doc(this.db, 'users', userEmail), {
      [docName]: arrayUnion({
        id: product.id,
        name: product.name,
        price: product.price
      })
    })
    this.alertService.setAlert(true, `Product added to ${docName}!`, true)
  }

  
  // get a user document by user email and document name
  getDoc(userEmail: string, docName: string) {
    const docRef = doc(this.db, 'users', userEmail)
    return getDoc(docRef).then(doc => doc.data()?.[docName])
  }
}
