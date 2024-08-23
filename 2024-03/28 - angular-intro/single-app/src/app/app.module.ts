import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {FormsModule} from "@angular/forms";
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperNgTemplateComponent } from './wrapper-ng-template/wrapper-ng-template.component';
import {RolesService} from "./roles.service";

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        WrapperComponent,
        WrapperNgTemplateComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [{
        provide: RolesService,
        useValue: new RolesService()
    }],
  exports: [
    CounterComponent,
    WrapperComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
