import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-complex-example',
  templateUrl: './reactive-form-complex-example.component.html',
  styleUrls: ['./reactive-form-complex-example.component.css']
})
export class ReactiveFormComplexExampleComponent {

  userForm = this.fb.group({
    name: this.fb.control(''),
    friends: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {
  }

  get friends(): FormArray<FormControl> {
    return this.userForm.get('friends') as FormArray;
  }

  addFriend() {
    this.friends.push(this.fb.control(''));
  }
}
