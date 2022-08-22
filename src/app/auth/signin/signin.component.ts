import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signInWithGoogle() {
    this.auth.signInWithGoogle()
  }

  signIn() {
    this.auth.signIn(this.email, this.password)

    this.email = ''
    this.password = ''
  }
}
