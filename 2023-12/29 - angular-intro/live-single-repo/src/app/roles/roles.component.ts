import { Component, OnInit } from '@angular/core';
import {RolesService} from "../roles.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(public rolesService: RolesService) { }

  ngOnInit(): void {
  }

}
