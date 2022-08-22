import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountGuard } from 'src/app/core/guards/account.guard';
import { CheckoutComponent } from './checkout.component';


const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AccountGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
