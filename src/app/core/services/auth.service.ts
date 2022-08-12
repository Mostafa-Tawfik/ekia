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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any = {}

  constructor(public auth: Auth, private router: Router) { }

  checkUser() {
    onAuthStateChanged(this.auth, user => this.currentUser = user)
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
    return signOut(this.auth)
  }
}
