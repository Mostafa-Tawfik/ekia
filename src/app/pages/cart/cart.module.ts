import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartOrderSummaryComponent } from './cart-order-summary/cart-order-summary.component';


@NgModule({
  declarations: [
    CartComponent,
    CartOrderSummaryComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
