import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IntervalDemoComponent } from "./interval-demo/interval-demo.component";

@Component({
  selector: 'app-icanhide',
  standalone: true,
  imports: [FormsModule, IntervalDemoComponent],
  templateUrl: './icanhide.component.html',
  styleUrl: './icanhide.component.css'
})
export class IcanhideComponent {
  hide: boolean = false;




}
