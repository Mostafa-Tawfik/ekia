import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountGuard } from 'src/app/core/guards/account.guard';
import { AccountComponent } from './account.component';


const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AccountGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
