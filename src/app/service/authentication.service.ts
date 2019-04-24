import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router:Router) {
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
    console.log(username, password);
    localStorage.setItem('currentUser', username);
    if(username === 'souk@') {
      localStorage.setItem('currentRole', 'admin');
      this.router.navigate(['admin']);
    }else {
      localStorage.setItem('currentRole', 'student');
      this.router.navigate(['personal']);
    }
    // make http call to login
    // add if started filling, take to tracker
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);

  }

  signUp(username: string, password: string){
    console.log(username, password);
    localStorage.setItem('currentUser', username);
    if(username === 'souk@') {
      localStorage.setItem('currentRole', 'admin');
    }else {
      localStorage.setItem('currentRole', 'student');
    }
    this.router.navigate(['']);
    // make http call to signup
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  isAdmin(): boolean {
    return (this.getCurrentUserRole() === 'admin');
  }
}
