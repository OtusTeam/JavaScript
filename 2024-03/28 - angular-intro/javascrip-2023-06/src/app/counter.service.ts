import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class CounterService {

  private counter = 0;
  constructor() {
    console.log('counter service')
  }


  getCounter() {
    return this.counter;
  }

  count() {
    this.counter++;
  }
}
