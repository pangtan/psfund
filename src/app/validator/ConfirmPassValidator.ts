import {AbstractControl, FormGroup} from '@angular/forms';

export function ConfirmPassValidator(control: AbstractControl) {
  const pass = control.get('password').value;
  const confirmPass = control.get('confirmPassword').value;

  return pass === confirmPass ? null : { notSame: true };
}
