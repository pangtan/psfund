import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {

  educationalForm: FormGroup;

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
    this.educationalForm = this.fb.group({
      'highSchoolDegree':['', Validators.required],
      'highSchoolAverage':['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      'highSchoolGraduationDate':['', Validators.required],
      'highSchoolName':['', Validators.required],
      'highSchoolAddress':['', Validators.required],
      'highSchoolType':['', Validators.required],
      'oldUniName':[''],
      'oldUniAddress':[''],
      'oldUniMajor':[''],
      'degreeLevelPlanned':['', Validators.required],
      'expectedGraduationDate':['', Validators.required],
      'majorPlanned':['', Validators.required],
      'uniName':['', Validators.required],
      'uniAddress':['', Validators.required]
    });
  }

  ngOnInit() {
  }

  save(formValue) {
    console.log(formValue)
  }

  next(formValue) {
    this.save(formValue)
    //move to next page
  }

}
