import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import {CommonModule} from "@angular/common";
import { RolesComponent } from './roles/roles.component';



@NgModule({
  declarations: [
    LibComponent,
    LoginComponent,
    UserComponent,
    UsersComponent,
    RolesComponent
  ],
  imports: [FormsModule, CommonModule],
  exports: [
    LibComponent,
    LoginComponent,
    UserComponent,
    UsersComponent,
    RolesComponent
  ]
})
export class LibModule { }
