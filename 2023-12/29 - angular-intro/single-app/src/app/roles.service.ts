import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useFactory: () => new RolesService()
})
export class RolesService {
  private roles: string[];

  constructor() {
    console.log('RolesService');
    this.roles = []
  }

  addRole(item: string) {
    this.roles.push(item);
  }

  getRoles() {
    return this.roles;
  }

  cleanRoles() {
    this.roles = [];
  }

}
