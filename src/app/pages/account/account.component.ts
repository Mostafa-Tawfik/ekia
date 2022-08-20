import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {

  user: any

  constructor(
    public auth: AuthService,
    public firestore: FirestoreService
    ) {
      this.user = this.auth.getCurrentUser()
    }

  
  ngOnInit(): void {
    console.log(this.user);
  }

  signOut() {
    this.auth.signOut()
    this.user = this.auth.getCurrentUser()
  }

}
