import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationCancel, NavigationStart } from '@angular/router';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poney-racer';

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationStart) {
        console.log('NavigationStart:', event);
      }

      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
      }

      if (event instanceof NavigationCancel) {
        console.log('NavigationCancel:', event);
      }

    });
  }
}
