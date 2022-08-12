import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: any = {}

  constructor(public auth: Auth, private router: Router, private localStorage: LocalStorageService) { }

  getUser() {
    return this.currentUser
  }

  checkUser() {
    const unsubscribe = onAuthStateChanged(this.auth, user => this.currentUser = user)

    return () => unsubscribe()
  }

  // checkUser() {
  //   const auth = getAuth()
  //   const user = auth.currentUser

  //   user 
  //   ? this.currentUser = user
  //   : console.log('no user')
  // }

  signIn(email : string, password : string) {
    signInWithEmailAndPassword(this.auth, email, password)
    .then(res => {
      console.log(res.user)
      this.localStorage.setLocalStorage('auth', res.user)
      this.router.navigate([''])
    })
    .catch(err => alert(err.message))
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(this.auth, provider)
    .then(res => {
      console.log(res.user)
      this.router.navigate([''])
    })
    .catch(err => alert(err.message))
  }

  signUp(email : string, password : string) {
    createUserWithEmailAndPassword(this.auth, email, password)
    .then(res => {
      console.log(res.user)
      this.router.navigate([''])
    })
    .catch(err => alert(err.message))
  }

  signOut() {
    signOut(this.auth)
    localStorage.clear()
    this.router.navigate([''])
    setTimeout(()=> window.location.reload(), 1200)
  }
}
