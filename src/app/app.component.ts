import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ekia';

  // control the splash screen
  splashActive: boolean = true

  ngOnInit(): void {
    setTimeout(() => {
      this.splashActive = false
    }, 3000);
  }
}
