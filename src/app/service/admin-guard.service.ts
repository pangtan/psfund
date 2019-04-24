import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    return this.auth.isAdmin();
  }
}
