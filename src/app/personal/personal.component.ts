import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';
import {EmailValidator} from '../validator/EmailValidator';
import {HttpClient} from '@angular/common/http';
import {PersonalInfo} from '../model/personal-info.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personalForm: FormGroup;
  // apiURL = 'http://127.0.0.1:5000';

  data: PersonalInfo;

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private router: Router,
              private httpClient: HttpClient) {
    this.personalForm = this.fb.group({
      fullName: ['', Validators.required],
      fullNameEnglish: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      building: ['', Validators.required],
      floor: ['', Validators.required],
      email: ['', [Validators.required, EmailValidator]],
      landline: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      parentsMobile: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      personalMobile: ['', Validators.required],
      birthDate: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      nationalityAtBirth: ['', Validators.required],
      nationalityNow: ['', Validators.required],
      gender: ['', Validators.required],
      socialStatus: ['', Validators.required],
      employmentStatus: ['', Validators.required],
      companyName: ['', ],
      companyAddress: ['', ],
      lastSalary: ['', ]
    });
  }


  ngOnInit() {
    // add api call
    // data = this.httpClient.get(`${this.apiURL}/personal?username=${id}`).subcribe();
  }

  save(formValue) {
    // this.httpClient.post(`${this.apiURL}/personal`, formValue).subcribe();

    // make post to save the data
    console.log(formValue);
  }

  next(formValue) {
    this.save(formValue);
    localStorage.setItem('currentStatus', 'personal');
    this.router.navigate(['educational']);
    // move to next page
  }
}
