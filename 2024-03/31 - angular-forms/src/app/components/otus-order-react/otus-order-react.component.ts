import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

function requiredIfWant2Register(fieldToCheck: string): ValidatorFn {
  return (control: AbstractControl) => {

    const parentValue = control.parent?.parent?.get(fieldToCheck)!.value;

    const valid = !parentValue || !!(control.value || '').trim();

    console.log(valid);
    return valid ? null : { requiredIfWant2Register: true };

  }
}

@Component({
  selector: 'app-otus-order-react',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './otus-order-react.component.html',
  styleUrl: './otus-order-react.component.css'
})
export class OtusOrderReactComponent {

  fancyGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    quantity: new FormControl<number>(0),
    addressForInvoice: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
    sameAddressForDelivery: new FormControl<boolean>(false),
    addressForDelivery: new FormControl<string>(''),
    want2Register: new FormControl<boolean>(false,),
    registerData: new FormGroup({
      email: new FormControl<string>('', requiredIfWant2Register('want2Register')),
      password: new FormControl<string>('', requiredIfWant2Register('want2Register')),
    })
  });


  constructor() {
    this.fancyGroup.get('want2Register')?.valueChanges.subscribe(() => {
      this.email.updateValueAndValidity();
      this.password.updateValueAndValidity();
    })
  }

  doSomething() {
    console.log(this.fancyGroup.value);
  }

  nested(){
    alert('AAAAA');
  }

  get addressForInvoice() {
    return this.fancyGroup.get('addressForInvoice')!;
  }

  get email() {
    return this.fancyGroup.get('registerData')!.get('email')!;
  }

  get password() {
    return this.fancyGroup.get('registerData')!.get('password')!;
  }

  get nestedGroup(){
    return  this.fancyGroup.get('registerData')! as FormGroup;
  }
}
