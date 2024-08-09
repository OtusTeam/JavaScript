import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.css']
})
export class TemplateDrivenFormExampleComponent {

  // user is mutable by the ngModel
  user = {
    // this field will change after user input
    userName: ''
  };

  onSubmit(myForm: NgForm) {
    console.log(`Username is '${myForm.value.name}'`);
  }
}
