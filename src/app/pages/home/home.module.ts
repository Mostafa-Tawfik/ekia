import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeCategoriesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
