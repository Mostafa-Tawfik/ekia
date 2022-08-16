import { Injectable } from '@angular/core';
import { doc, setDoc, Firestore, getDoc, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public db: Firestore,
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

  // // get a single product by id
  // getProduct(id: string): any {
  //   const productRef = doc(this.db, 'products', id)
  //   return getDoc(productRef).then(doc => doc.data())
  // }

  // // get all products
  // async getAllProducts(products: any[]): Promise<any> {
  //   const docRef = collection(this.db, 'products')

  //   const querySnapshot = await getDocs(docRef)
  //   querySnapshot.forEach((doc) => {
  //     return products.push(doc.data())
  //   })
  // }
}
