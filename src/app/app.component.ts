import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';

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

  continueApp() {
    if ( this.authService.getStatus() === 'submitted') {
      this.router.navigate(['tracker']);
    } else if ( this.authService.getStatus() === 'personal') {
      this.router.navigate(['educational']);
    } else {
      this.router.navigate(['personal']);
    }
  }
}
