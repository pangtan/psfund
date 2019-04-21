import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatListModule, MatNativeDateModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignupComponent} from './signup/signup.component';
import {PersonalComponent} from './personal/personal.component';
import {EducationalComponent} from './educational/educational.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PersonalComponent,
    EducationalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatGridListModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
