import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
