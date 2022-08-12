import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { AccountModule } from './account/account.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ProductsModule,
    AboutModule,
    ContactModule,
    AccountModule
  ],
  exports: [
    HomeModule,
    ProductsModule,
  ]
})
export class PagesModule { }
