import { Injectable } from '@angular/core';
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})

export class RolesService {
  private roles: string[]

  constructor() {
    this.roles = [];
  }

  getRoles() {
    return this.roles;
  }

  addRole(role: string) {
    this.roles.push(role);
  }

  cleanRoles() {
    this.roles = []
  }

  getCount() {
    return this.roles.length
  }


}
