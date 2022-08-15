import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductCardComponent
  ]
})
export class ProductsModule { }
