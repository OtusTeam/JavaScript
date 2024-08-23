import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OtusOrderTemplateComponent } from "./components/otus-order-template/otus-order-template.component";
import { OtusOrderReactComponent } from "./components/otus-order-react/otus-order-react.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, OtusOrderTemplateComponent, OtusOrderReactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'otus-forms';
}
