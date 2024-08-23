import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {UserService, IUserService, SpecificUserService, CustomerUserService} from "./services/user.service";
import { ShortNamePipe } from './short-name.pipe';
import { HighlightDirective } from './highlight.directive';
import { CounterComponent } from './counter/counter.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { WrapperComponent } from './wrapper/wrapper.component';
import { GreetingComponent } from './greeting/greeting.component';
import {FirstService} from "./first.service";
import {AbstractUserService} from "./services/AbstractUserService";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShortNamePipe,
    HighlightDirective,
    CounterComponent,
    WrapperComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    {
      provide: AbstractUserService,
      useClass: UserService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
