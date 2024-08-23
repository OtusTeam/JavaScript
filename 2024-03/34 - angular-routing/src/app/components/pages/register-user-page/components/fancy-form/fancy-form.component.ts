import { Component, Input } from '@angular/core';
import { FancyFormService } from './fancy-form.service';
import { FormsModule, NgForm } from '@angular/forms';

interface FancyCompany {
  name: string;
  inn: string;
  capital: number;
}

export interface FancyFormModel {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  isCompany: boolean;
  company?: FancyCompany;
}

@Component({
  selector: 'app-fancy-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fancy-form.component.html',
  styleUrl: './fancy-form.component.css'
})
export class FancyFormComponent {
  constructor(private readonly service: FancyFormService) { }
  @Input({ required: true }) firstName!: string
  @Input({ required: true }) lastName!: string
  @Input() set isCompany(val: boolean) {
    this.model.isCompany = val;
  }

  public model: FancyFormModel = {
    firstName: '',
    lastName: '',
    isCompany: false,
  };

  public submit() {
    this.service.send({
      firstName: this.model.firstName,
      lastName: this.model.lastName,
      isCompany: true
    })
  }

}
