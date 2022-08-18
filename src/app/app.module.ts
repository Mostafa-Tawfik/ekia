import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PERSISTENCE } from '@angular/fire/compat/auth';

import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { AccountModule } from './pages/account/account.module';

import { CartModule } from './pages/cart/cart.module';
import { HomeModule } from './pages/home/home.module';
import { ProductsModule } from './pages/products/products.module';
import { AboutModule } from './pages/about/about.module';
import { WishlistModule } from './pages/wishlist/wishlist.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AuthModule,
    CoreModule,
    LayoutModule,
    HomeModule,
    ProductsModule,
    AboutModule,
    AccountModule,
    CartModule,
    WishlistModule,
  ],
  providers: [
    { provide: PERSISTENCE, useValue: 'session' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

 }
