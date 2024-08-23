import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lister',
  standalone: true,
  imports: [],
  templateUrl: './lister.component.html',
  styleUrl: './lister.component.css'
})
export class ListerComponent {


 @Input() myFancyData!:string[];
}
