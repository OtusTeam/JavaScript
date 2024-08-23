import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FancyOrder } from '../../models/order';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-otus-order-template',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './otus-order-template.component.html',
  styleUrl: './otus-order-template.component.css'
})
export class OtusOrderTemplateComponent {

  model: FancyOrder = {
    addressForInvoice: '',
    quantity: 0,
    name: '',
    sameAddressForDelivery: false,
  };


  doSomething(f:NgForm){
    console.log(f);
    console.log(this.model);
  }
}
