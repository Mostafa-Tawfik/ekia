import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public firestore: FirestoreService
    ) { }

  public user = this.auth.currentUser
  
  ngOnInit(): void {
    console.log(this.user);
  }

  createDoc() {
    return this.firestore.createDoc(this.user.email)
  }

  signOut() {
    this.auth.signOut()
  }

}
