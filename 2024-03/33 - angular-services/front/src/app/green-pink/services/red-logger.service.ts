import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedLoggerService {

  constructor() { }

  logInfo(t: string) {
    console.log('%c %s', `background-color: red`, t);
  }
}
