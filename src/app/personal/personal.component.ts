import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';
import {EmailValidator} from '../validator/EmailValidator';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personalForm: FormGroup;

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private router: Router) {
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
  }

  save(formValue) {
    console.log(formValue);
  }

  next(formValue) {
    this.save(formValue);
    localStorage.setItem('currentStatus', 'personal');
    this.router.navigate(['educational']);
    // move to next page
  }
}
