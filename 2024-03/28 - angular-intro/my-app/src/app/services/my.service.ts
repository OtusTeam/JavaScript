import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }


  hello() {
    return 'Hello guys!'
  }
}
