import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../service/authentication.service";
import {EmailValidator} from "../validator/EmailValidator";
import {ConfirmPassValidator} from "../validator/ConfirmPassValidator";
import {UserInfo} from "../model/user-info.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  currentUser: UserInfo;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    let username = new FormControl('', [Validators.required, EmailValidator]);
    let password = new FormControl('', [Validators.required]);
    let confirmPassword = new FormControl('', [Validators.required]);

    this.signUpForm = new FormGroup({
      username: username,
      password: password,
      confirmPassword: confirmPassword
    });
  }

  signUp(formValue) {
    if (this.signUpForm.valid) {
      if (formValue.password == formValue.confirmPassword) {
        this.authService.signUp(formValue.username, formValue.password);
      } else {
        alert("Password doesn't match confirm Password");
      }
    }
  }
}
