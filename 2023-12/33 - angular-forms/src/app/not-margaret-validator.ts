import {ValidatorFn} from '@angular/forms';

export const NotMargaretValidator: ValidatorFn = (control) => {
  const notMargaret = control.value !== 'Margaret';

  if (notMargaret) {
    // when OK - return null
    return null;
  } else {
    // when invalid - return object with any validator key
    return {
      notMargaret: null
    };
  }
};
