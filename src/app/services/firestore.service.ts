import { Injectable } from '@angular/core';
import { doc, setDoc, Firestore, getDoc, collection, getDocs, arrayUnion, updateDoc } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product';

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

  // add to cart
  addToCart = async (product: Product, user: any, fnc?: any)=> {
    if(user?.email) {
      fnc ? fnc() : ''
      await updateDoc(doc(this.db, 'users', `${user?.email}`), {
        cart: arrayUnion({
          id: product.id,
          name: product.name,
          price: product.price
        })
      })
      console.log('Product added to cart!')
    } else alert('Please sign in to continue')
  }

  // add to wishlist
  addToWishlist = async (product: Product, user: any, fnc?: any)=> {
    if(user?.email) {
      fnc ? fnc() : ''
      await updateDoc(doc(this.db, 'users', `${user?.email}`), {
        wishlist: arrayUnion({
          id: product.id,
          name: product.name,
          price: product.price
        })
      })
      console.log('Product added to wishlist!')
    } else alert('Please sign in to continue')
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
