import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: any

  constructor() {
    this.alert = {
      active: false,
      message: '',
      status: false
    }
  }

  setAlert(active:boolean, message: string, status: boolean): Observable<any> {
    this.alert.active = active
    this.alert.message = message
    this.alert.status = status
    console.log('service',this.alert);
    setTimeout(() => {this.alert.active = false, console.log(this.alert)}, 3000)   

    return this.alert
  }

  getAlert(): Observable<any> {
    return this.alert
  }

}
