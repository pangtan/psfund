import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserInfo} from '../model/user-info.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  // apiURL = 'http://127.0.0.1:5000';
  user: UserInfo;
  constructor(private router: Router, private httpClient: HttpClient) {
  }

  isAuthenticated() {
    return !!this.getCurrentUsername();
  }

  getCurrentUsername() {
    return localStorage.getItem('currentUser');
  }

  getCurrentUserRole() {
    return localStorage.getItem('currentRole');
  }

  login(username: string, password: string) {
    // if (this.httpClient.post(`${this.apiURL}/user`, this.user).subscribe()) {
    //   return;
    // }

    localStorage.setItem('currentUser', username);
    if (username === 'souk@') {
      localStorage.setItem('currentRole', 'admin');
      this.router.navigate(['admin']);
    } else {
      localStorage.setItem('currentRole', 'student');
      if (username === 'started@') {
        localStorage.setItem('currentStatus', 'submitted');
      }
      this.reRoute();
    }

    // make http call to login
    // add if started filling, take to tracker
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);

  }

  signUp(username: string, password: string) {
    console.log(username, password);
    localStorage.setItem('currentUser', username);
    if (username === 'souk@') {
      localStorage.setItem('currentRole', 'admin');
      this.router.navigate(['admin']);
    } else {
      localStorage.setItem('currentRole', 'student');
      if (username === 'started@') {
        localStorage.setItem('currentStatus', 'submitted');
      }
      this.reRoute();
    }
    // make http call to signup
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  getStatus() {
    return localStorage.getItem('currentStatus');
  }

  isAdmin(): boolean {
    return (this.getCurrentUserRole() === 'admin');
  }

  reRoute() {
    if (this.getStatus() === 'submitted') {
      this.router.navigate(['tracker']);
    } else if (this.getStatus() === 'personal') {
      this.router.navigate(['educational']);
    } else {
      this.router.navigate(['home']);
    }
  }
}
