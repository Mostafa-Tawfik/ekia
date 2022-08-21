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
import { AlertService } from '../shared/components/alert/alert.service'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    public auth: Auth,
    private router: Router,
    private localStorage: LocalStorageService,
    public firestore: FirestoreService,
    public alertService: AlertService
    ) {}
    
  // init the user by checking on local storage
  currentUser: any = this.loadTheUser()

  // a subject to pass as observable
  currentUser$: Subject<any> = new Subject<any>()
  


  // save the user data into local storage
  saveTheUser(data: any) {
    return this.localStorage.setLocalStorage('auth', data)
  }

  // load the user from localStorage
  loadTheUser() {
    return this.localStorage.getLocalStorage('auth', [])
  }

  // get the lastest version of the cart
  getCurrentUser() {
    this.currentUser = this.loadTheUser()
    this.currentUser$.next(this.loadTheUser())
    return this.currentUser
  }


  // sign in with email and password
  signIn(email : string, password : string) {
    signInWithEmailAndPassword(this.auth, email, password)
    .then(res => {
      this.saveTheUser(res.user)
      this.getCurrentUser()
      this.alertService.setAlert(true, `Logged in successfully`, true)
      this.router.navigate([''])
    })
    .catch(err => this.alertService.setAlert(true, err.message, false))
  }


  // sign in with google account
  signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(this.auth, provider)
    .then(res => {
      this.saveTheUser(res.user)
      this.getCurrentUser()
      this.firestore.createDoc(res.user.email)
      this.router.navigate([''])
      this.alertService.setAlert(true, `Logged in successfully`, true)
    })
    .catch(err => this.alertService.setAlert(true, err.message, false))
  }


  // sign up with email and password then create a user doc on firebase
  signUp(email : string, password : string) {
    createUserWithEmailAndPassword(this.auth, email, password)
    .then(res => {
      this.saveTheUser(res.user)
      this.getCurrentUser()
      this.firestore.createDoc(res.user.email)
      this.router.navigate([''])
      this.alertService.setAlert(true, `Registration completed`, true)
    })
    .catch(err => this.alertService.setAlert(true, err.message, false))
  }


  // sign out
  signOut() {
    signOut(this.auth)
    localStorage.removeItem('auth')
    this.getCurrentUser()
    this.alertService.setAlert(true, `See you soon`, true)
    this.router.navigate([''])
  }
}
