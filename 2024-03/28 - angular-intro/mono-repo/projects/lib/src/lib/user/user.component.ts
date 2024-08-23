import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  login: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
