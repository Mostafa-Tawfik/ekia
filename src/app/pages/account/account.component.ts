import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {

  user: any

  constructor(
    public auth: AuthService,
    ) {
      this.user = this.auth.getCurrentUser()
    }

  
  ngOnInit(): void {
    this.auth.currentUser$.subscribe(res => this.user = res)
  }

  signOut() {
    this.auth.signOut()
    this.auth.currentUser$.subscribe(res => this.user = res)
  }

}
