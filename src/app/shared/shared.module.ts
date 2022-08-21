import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeLibraryModule } from './font-awesome-library/font-awesome-library.module';
import { AlertComponent } from './components/alert/alert.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';



@NgModule({
  declarations: [
    AlertComponent,
    ProductCardComponent,
    EmptyPageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeLibraryModule,
    RouterModule
  ],
  exports: [
    FontAwesomeLibraryModule,
    AlertComponent,
    ProductCardComponent,
    EmptyPageComponent
  ]
})
export class SharedModule {}
