import { Injectable } from '@angular/core';
import { doc, setDoc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public fs: Firestore,
  ) {}


  // setup new document for current user using his email
  createDoc(email : any) {
    setDoc(doc(this.fs, 'users', email),{
      wishlist: [],
      cart: [],
      orders: []
    })
    .then(()=>console.log('Doc Created!'))
    .catch(err => console.log(err.message))
  }

}
