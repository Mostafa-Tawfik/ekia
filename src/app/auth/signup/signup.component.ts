import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.auth.signUp(this.email, this.password)

    this.email = ''
    this.password = ''
  }
}
