import { Component } from '@angular/core';
import {RolesService} from "./roles.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'live-single-repo';

  appComponentCounter!: number;
  appComponentInitialCounter!: number

  constructor(public rolesService: RolesService) {
  }

  onInputChange(e: any) {
    this.appComponentCounter = e.target.value;
  }
}
