import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAnglesRight, faCartShopping, faCircleCheck, faCouch, faExclamationTriangle, faGear, faHeart, faHeartCirclePlus, faHouse, faMagnifyingGlass, faMinus, faPlus, faTrashCan, faUser } from '@fortawesome/free-solid-svg-icons';



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
      faHouse,
      faCouch,
      faUser,
      faMagnifyingGlass,
      faGear,
      faAngleRight,
      faAnglesRight,
      faHeart,
      faHeartCirclePlus,
      faExclamationTriangle,
      faCircleCheck,
      faPlus,
      faMinus,
      faTrashCan
    )
  }
 }
