import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MobileNavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MobileNavComponent
  ]
})
export class LayoutModule {}