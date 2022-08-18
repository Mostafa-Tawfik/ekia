import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: ()=> import('./pages/products/products.module').then(m => m.ProductsModule)
  }
  // {
  //   // wildcard
  //   path: '**',
  //   component: HomeComponent,
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    // scroll to top
    scrollPositionRestoration: 'enabled'
  }),
  
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
