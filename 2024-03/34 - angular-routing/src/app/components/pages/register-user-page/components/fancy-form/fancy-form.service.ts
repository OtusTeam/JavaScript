import { Injectable } from '@angular/core';
import { FancyFormModel } from './fancy-form.component';

@Injectable({
  providedIn: 'root'
})
export class FancyFormService {

  constructor() { }

  send(model: FancyFormModel) {
console.log(model);
  }

}
