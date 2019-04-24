import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {PersonalComponent} from './personal/personal.component';
import {EducationalComponent} from './educational/educational.component';
import {AuthenticationService} from './service/authentication.service';
import {AdminComponent} from './admin/admin.component';
import {AdminGuardService} from './service/admin-guard.service';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {AdminRateComponent} from './admin-rate/admin-rate.component';
import {HomeComponent} from './home/home.component';
import {TrackComponent} from './track/track.component';

const routes: Routes = [{path: 'login', component: LoginComponent}, {
  path: 'signup',
  component: SignupComponent
}, {path: 'personal', component: PersonalComponent, canActivate: [AuthenticationService]},
  {path: 'educational', component: EducationalComponent, canActivate: [AuthenticationService]},
  {path: 'track', component: TrackComponent, canActivate: [AuthenticationService]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuardService]},
  {path: 'home', component: HomeComponent},
  {path: 'admin/:id/view', component: AdminViewComponent, canActivate: [AdminGuardService]},
  {path: 'admin/:id/rate', component: AdminRateComponent, canActivate: [AdminGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
