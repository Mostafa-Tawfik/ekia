import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsFilterBtnComponent } from './products-filter-btn/products-filter-btn.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductsFilterBtnComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
})
export class ProductsModule { }
