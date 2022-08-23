import { Injectable } from '@angular/core';
import { doc, setDoc, Firestore, getDoc, arrayUnion, updateDoc, arrayRemove } from '@angular/fire/firestore';


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
      orders: []
    })
    .then(()=>console.log('Doc Created!'))
    .catch(err => console.log(err.message))
  }


  // add to document
  addToDoc = async (document: any, userEmail: string, docName: any)=> {
    await updateDoc(doc(this.db, 'users', userEmail), {
      [docName]: arrayUnion(document)
    })
  }


  // delete doc
  async deleteDoc(document: any, userEmail: string, docName: any) {
    await updateDoc(doc(this.db, 'users', userEmail), {
      [docName]: arrayRemove(document)
    })
  }


  // get a user document by user email and document name
  async getDoc(userEmail: string, docName: string) {
    const docRef = doc(this.db, 'users', userEmail)
    return await getDoc(docRef).then(doc => doc.data()?.[docName])
  }

}
