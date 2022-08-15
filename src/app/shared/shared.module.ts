import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeLibraryModule } from './font-awesome-library/font-awesome-library.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FontAwesomeLibraryModule,
    AppRoutingModule,
  ],
  exports: [
    FontAwesomeLibraryModule,
  ]
})
export class SharedModule {}
