import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'education-fe';
  showHead: boolean = false;
  showFooter: boolean = false;
  ngOnInit() {
  }

  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/register') {
          this.showHead = false;
          this.showFooter=false;
        } else {
          // console.log("NU")
          this.showHead = true;
          this.showFooter=true;
        }
      }
    });
  }
}
