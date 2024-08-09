import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-control-example',
  templateUrl: './reactive-control-example.component.html',
  styleUrls: ['./reactive-control-example.component.css']
})
export class ReactiveControlExampleComponent {

  name = new FormControl('');

  resetName() {
    this.name.setValue('');
  }
}
