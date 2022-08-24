import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MobileNavComponent,
    SplashComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MobileNavComponent,
    SplashComponent
  ]
})
export class LayoutModule {}