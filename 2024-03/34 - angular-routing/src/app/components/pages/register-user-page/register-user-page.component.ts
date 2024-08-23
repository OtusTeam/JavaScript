import { Component } from '@angular/core';
import { FancyFormComponent } from "./components/fancy-form/fancy-form.component";

@Component({
  selector: 'app-register-user-page',
  standalone: true,
  imports: [FancyFormComponent],
  templateUrl: './register-user-page.component.html',
  styleUrl: './register-user-page.component.css'
})
export class RegisterUserPageComponent {

}
