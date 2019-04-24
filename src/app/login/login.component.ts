import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {EmailValidator} from '../validator/EmailValidator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    const username = new FormControl('', [Validators.required, EmailValidator]);
    const password = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      username,
      password
    });
  }

  login(formValue) {
    if (this.loginForm.valid) {
      this.authService.login(formValue.username, formValue.password);
    }
  }
}
