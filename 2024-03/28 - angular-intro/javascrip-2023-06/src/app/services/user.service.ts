import { Injectable } from '@angular/core';
import {AbstractUserService} from "./AbstractUserService";
import {FirstService} from "../first.service";

export interface IUserService {
  getUserName(): string
}

export abstract class SpecificUserService implements IUserService{

  abstract getUserName(): string
}

export class UserService implements SpecificUserService {

  getUserName(): string {
    return `specific user service` ;
  }
}

export class CustomerUserService implements SpecificUserService {
  getUserName(): string {
    return `customer  user service` ;
  }
}
