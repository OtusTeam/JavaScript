import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NotMargaretValidator} from '../not-margaret-validator';
import {forbiddenNameValidator} from '../forbidden-name-validator';
import {asyncLengthValidator} from '../async-length-validator.service';

@Component({
  selector: 'app-reactive-validators-example',
  templateUrl: './reactive-validators-example.component.html',
  styleUrls: ['./reactive-validators-example.component.css']
})
export class ReactiveValidatorsExampleComponent {

  name = new FormControl(null, [
    Validators.minLength(3),
    Validators.maxLength(5),
  ]);

  anotherName = new FormControl('', [
    NotMargaretValidator
  ]);

  notBadName = new FormControl('', [
    forbiddenNameValidator(['Alice', 'Bob'])
  ]);

  evenLengthName = new FormControl('', null, asyncLengthValidator);
}
