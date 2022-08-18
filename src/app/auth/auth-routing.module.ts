import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SignGuard } from '../core/guards/sign.guard';


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
