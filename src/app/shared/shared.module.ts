import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeLibraryModule } from './font-awesome-library/font-awesome-library.module';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeLibraryModule,
  ],
  exports: [
    FontAwesomeLibraryModule,
    AlertComponent
  ]
})
export class SharedModule {}
