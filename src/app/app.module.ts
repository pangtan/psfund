import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatOptionModule,
  MatRadioModule, MatSelectModule, MatStepperModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignupComponent} from './signup/signup.component';
import {PersonalComponent} from './personal/personal.component';
import {EducationalComponent} from './educational/educational.component';
import { AdminComponent } from './admin/admin.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminRateComponent } from './admin-rate/admin-rate.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { RateCardComponent } from './rate-card/rate-card.component';
import { TrackComponent } from './track/track.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PersonalComponent,
    EducationalComponent,
    AdminComponent,
    AdminViewComponent,
    AdminRateComponent,
    RateCardComponent,
    TrackComponent,
    HomeComponent
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
    MatNativeDateModule,
    MatTableModule,
    MatExpansionModule,
    PdfViewerModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
