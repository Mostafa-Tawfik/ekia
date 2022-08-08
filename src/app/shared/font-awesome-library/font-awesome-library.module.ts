import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCartShopping, faCouch } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FontAwesomeLibraryModule { 
  constructor(laibrary: FaIconLibrary) {
    laibrary.addIcons(
      faCartShopping,
      faBars,
      faCouch
    )
  }
 }
