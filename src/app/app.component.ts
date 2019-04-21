import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./service/authentication.service";
import {log} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'psfund';

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  StartApp() {
    this.router.navigate(['/personal']);
  }
}
