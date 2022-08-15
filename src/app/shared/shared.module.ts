import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeLibraryModule } from './font-awesome-library/font-awesome-library.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeLibraryModule,
    AppRoutingModule,
  ],
  exports: [
    FontAwesomeLibraryModule,
    ProductCardComponent
  ]
})
export class SharedModule {}
