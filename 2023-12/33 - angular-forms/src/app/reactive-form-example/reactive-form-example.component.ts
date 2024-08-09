import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent {

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  partialReset() {
    this.userForm.patchValue({name: ''});
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
