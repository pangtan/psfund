import {FormControl} from '@angular/forms';

export function EmailValidator(control: FormControl ) {
  if (control.value && control.value.indexOf('@') !== -1) {
    return null;
  }
  return {
    error: 'no @'
  };
}
