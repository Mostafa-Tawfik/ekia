import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { LocalStorageService } from './local-storage.service'
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth'
import { FirestoreService } from './firestore.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    public auth: Auth,
    private router: Router,
    private localStorage: LocalStorageService,
    public firestore: FirestoreService
    ) {}
    
    // init the user by checking on local storage
  currentUser: any = this.localStorage.getLocalStorage('auth', {})

  // store user data into local storage
  saveUserData(data: any) {
    this.localStorage.setLocalStorage('auth', data)
    return this.currentUser = this.localStorage.getLocalStorage('auth', data)
  }

  // sign in with email and password
  signIn(email : string, password : string) {
    signInWithEmailAndPassword(this.auth, email, password)
    .then(res => {
      this.saveUserData(res.user)
      this.router.navigate([''])
    })
    .catch(err => alert(err.message))
  }

  // sign in with google account
  signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(this.auth, provider)
    .then(res => {
      this.saveUserData(res.user)
      this.firestore.createDoc(res.user.email)
      this.router.navigate([''])
    })
    .catch(err => alert(err.message))
  }

  // sign up with email and password then create a user doc on firebase
  signUp(email : string, password : string) {
    createUserWithEmailAndPassword(this.auth, email, password)
    .then(res => {
      this.saveUserData(res.user)
      this.firestore.createDoc(res.user.email)
      this.router.navigate([''])
    })
    .catch(err => alert(err.message))
  }

  // sign out
  signOut() {
    signOut(this.auth)
    localStorage.clear()
    this.router.navigate([''])
    // setTimeout(()=> window.location.reload(), 1200)
  }
}
