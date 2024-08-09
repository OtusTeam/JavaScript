import {of} from "rxjs";

export class MockValueService {
  getValue () {
    return of(1);
  }
}
