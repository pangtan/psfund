import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router:Router) {
  }

  isAuthenticated() {
    return !!this.getCurrentUser();

  }

  getCurrentUser() {
    return localStorage.getItem('currentUser');
  }

  login(username: string, password: string) {
    console.log(username, password);
    localStorage.setItem('currentUser', username);
    this.router.navigate(['']);
    // make http call to login
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);

  }

  signUp(username: string, password: string){
    console.log(username, password);
    localStorage.setItem('currentUser', username);
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
}
