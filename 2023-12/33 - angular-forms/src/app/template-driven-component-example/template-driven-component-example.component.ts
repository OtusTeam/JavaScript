import {AfterViewChecked, Component} from '@angular/core';

@Component({
  selector: 'app-template-driven-component-example',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `
})
export class TemplateDrivenComponentExampleComponent {
  favoriteColor = '';
}
