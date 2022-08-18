import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
