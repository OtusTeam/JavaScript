import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveControlExampleComponent} from './reactive-control-example/reactive-control-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormExampleComponent} from './reactive-form-example/reactive-form-example.component';
import {ReactiveValidatorsExampleComponent} from './reactive-validators-example/reactive-validators-example.component';
import {ReactiveFormComplexExampleComponent} from './reactive-form-complex-example/reactive-form-complex-example.component';
import {TemplateDrivenComponentExampleComponent} from './template-driven-component-example/template-driven-component-example.component';
import {TemplateDrivenFormExampleComponent} from './template-driven-form-example/template-driven-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentExampleComponent,
    TemplateDrivenFormExampleComponent,
    ReactiveControlExampleComponent,
    ReactiveFormExampleComponent,
    ReactiveValidatorsExampleComponent,
    ReactiveFormComplexExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
