import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeLibraryModule } from './font-awesome-library/font-awesome-library.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeLibraryModule
  ],
  exports: [
    FontAwesomeLibraryModule
  ]
})
export class SharedModule {}
