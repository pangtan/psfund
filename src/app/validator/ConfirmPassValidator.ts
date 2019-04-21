import {AbstractControl, FormGroup} from "@angular/forms";

export function ConfirmPassValidator(control: AbstractControl) {
  let pass = control.get('password').value;
  let confirmPass = control.get('confirmPassword').value;

  return pass === confirmPass ? null : { notSame: true }
}
