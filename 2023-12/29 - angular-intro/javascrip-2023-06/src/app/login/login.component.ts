import { Component } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  isHidden = false;

  constructor(public readonly userService: UserService) {
  }

  onButtonClick() {
    this.isHidden = !this.isHidden;
  }

}
