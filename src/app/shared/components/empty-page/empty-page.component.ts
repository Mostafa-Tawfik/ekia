import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html'
})
export class EmptyPageComponent implements OnInit {
  @Input() img: any
  @Input() msg: any

  constructor() { }

  ngOnInit(): void {
  }

}
