import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LibModule} from "../../../lib/src/lib/lib.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LibModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
