import { Injectable } from '@angular/core';
import { doc, setDoc, Firestore, getDoc, arrayUnion, updateDoc, arrayRemove } from '@angular/fire/firestore';

import { Product } from 'src/app/models/product';
import { AlertService } from '../shared/components/alert/alert.service';

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
      orders: []
    })
    .then(()=>console.log('Doc Created!'))
    .catch(err => console.log(err.message))
  }


  // add to document
  addToDoc = async (product: Product, userEmail: string, docName: any)=> {
    await updateDoc(doc(this.db, 'users', userEmail), {
      [docName]: arrayUnion(product)
    })
    this.alertService.setAlert(true, `Product added to ${docName}!`, true)
  }

  
  // delete doc
  async deleteDoc(product:Product, userEmail: string, docName: any) {
    await updateDoc(doc(this.db, 'users', userEmail), {
      [docName]: arrayRemove(product)
    })
    this.alertService.setAlert(true, `Product removed from ${docName}!`, true)
  }

  
  // get a user document by user email and document name
  async getDoc(userEmail: string, docName: string) {
    const docRef = doc(this.db, 'users', userEmail)
    return await getDoc(docRef).then(doc => doc.data()?.[docName])
  }

}
