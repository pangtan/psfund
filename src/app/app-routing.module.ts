import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {PersonalComponent} from "./personal/personal.component";
import {EducationalComponent} from "./educational/educational.component";
import {AuthenticationService} from "./service/authentication.service";

const routes: Routes = [{path: "login",component: LoginComponent}, {path: "signup", component: SignupComponent}, {path: "personal", component: PersonalComponent,canActivate: [AuthenticationService] },
  {path: "educational", component: EducationalComponent,canActivate: [AuthenticationService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
