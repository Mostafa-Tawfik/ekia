import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-cart-order-summary',
  templateUrl: './cart-order-summary.component.html'
})
export class CartOrderSummaryComponent implements OnInit {

  @Input() cartSubtotal: number

  currentUser: any

  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertService
  ) {
    this.cartSubtotal = 0
    this.currentUser = this.auth.getCurrentUser()
  }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(res => this.currentUser = res)
  }

  checkoutAuth() {
    if(this.currentUser.email) {
      this.router.navigate(['/checkout'])
    } else {
      this.alert.setAlert(true, 'Please sign in to continue!', false)
    }
  }

}
