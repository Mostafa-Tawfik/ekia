import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountGuard } from './core/guards/account.guard';
import { SignGuard } from './core/guards/sign.guard';
import { SigninComponent } from './core/signin/signin.component';
import { SignupComponent } from './core/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [SignGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [SignGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AccountGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scroll to top
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
