import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {FormsModule} from "@angular/forms";
import { WrapperNgContentComponent } from './wrapper-ng-content/wrapper-ng-content.component';
import { WrapperNgTemplateComponent } from './wrapper-ng-template/wrapper-ng-template.component';
import {RolesService} from "./roles.service";
import {UsersService} from "./users.service";
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WrapperNgContentComponent,
    WrapperNgTemplateComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
