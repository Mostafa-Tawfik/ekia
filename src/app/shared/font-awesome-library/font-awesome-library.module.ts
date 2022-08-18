import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAnglesRight, faBars, faCartShopping, faCouch, faGear, faHeart, faHeartCirclePlus, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';



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
  constructor(
    laibrary: FaIconLibrary
    ) {
    laibrary.addIcons(
      faCartShopping,
      faBars,
      faHouse,
      faCouch,
      faUser,
      faMagnifyingGlass,
      faGear,
      faAngleRight,
      faAnglesRight,
      faHeart,
      faHeartCirclePlus
    )
  }
 }
