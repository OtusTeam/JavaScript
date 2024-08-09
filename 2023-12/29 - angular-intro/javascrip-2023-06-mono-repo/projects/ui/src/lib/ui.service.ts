import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }


  getUiName() {
    return "Ui Name"
  }
}
