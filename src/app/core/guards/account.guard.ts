import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  
  constructor(private router: Router, private localStorage: LocalStorageService){}
  
  currentUser: any = {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.currentUser = this.localStorage.getLocalStorage('auth', {})
      if (this.currentUser.email){
        return true
      } else {
        this.router.navigate(['/signin'])
        return false
      }
  }
  
}
