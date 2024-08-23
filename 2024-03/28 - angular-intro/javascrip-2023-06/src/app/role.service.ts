import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  getRoles(): Promise<string[]> {
    return new Promise(res => res(['Admin', 'Customer', 'Support']))
  }
}
