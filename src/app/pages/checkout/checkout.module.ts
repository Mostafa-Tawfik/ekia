import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutShippingComponent } from './checkout-shipping/checkout-shipping.component';
import { CheckoutPersonalInfoComponent } from './checkout-personal-info/checkout-personal-info.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutShippingComponent,
    CheckoutPersonalInfoComponent,
    CheckoutPaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
