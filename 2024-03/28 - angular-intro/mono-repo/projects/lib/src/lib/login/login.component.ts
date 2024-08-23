import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string = '';
  password: string = '';

  @Output()
  onLogin = new EventEmitter<{login: string, password: string}>()

  constructor() { }

  ngOnInit(): void {
  }

}
