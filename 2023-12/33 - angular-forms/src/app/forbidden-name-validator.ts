import {ValidatorFn} from '@angular/forms';

export const forbiddenNameValidator = (badNames: string[]): ValidatorFn => {
  return (control) => {
    const nameIsInvalid = badNames.includes(control.value);
    if (nameIsInvalid) {
      return {
        forbiddenName: {
          forbiddenNames : badNames,
          actualName: control.value
        }
      };
    } else {
      return null;
    }
  };
};
