import {AsyncValidatorFn} from '@angular/forms';
import {of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

export const asyncLengthValidator: AsyncValidatorFn = (control) => {
  return of(control.value)
    .pipe(delay(2000))
    .pipe(map(name => name.length % 2 === 0))
    .pipe(map(isValid => {
      return isValid ? null : {oddValue: true};
    }));
};
