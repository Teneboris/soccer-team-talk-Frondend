import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    // Update the selected tab index based on the initial route
    this.updateSelectedIndex(this.router.url);

    // Listen to route changes to update the selected tab index
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedIndex(event.urlAfterRedirects);
      }
    });
  }

  onTabChange(event: any) {
    const tabRoutes = ['training', 'game', 'message', 'profile'];
    this.router.navigate([`/${tabRoutes[event.index]}`]);
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login'])
  }

  private updateSelectedIndex(url: string) {
    if (url.includes('training')) {
      this.selectedIndex = 0;
    } else if (url.includes('game')) {
      this.selectedIndex = 1;
    } else if (url.includes('message')) {
      this.selectedIndex = 2;
    } else if (url.includes('profile')) {
      this.selectedIndex = 3;
    }
  }

}
