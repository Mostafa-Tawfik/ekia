import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  alert: any = this.alertService.getAlert()

  constructor(
    public alertService: AlertService
  ) {
  }
  
  ngOnInit(): void {
  }
}
