import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  
  constructor(
    private router: Router, 
    private auth: AuthService
    ){
      this.currentUser = this.auth.getCurrentUser()
    }
  
  currentUser: any = {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.auth.currentUser$.subscribe(res => this.currentUser = res)
      if (this.currentUser.email){
        return true
      } else {
        this.router.navigate(['/signin'])
        return false
      }
  }
  
}
