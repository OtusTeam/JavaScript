import { Component } from '@angular/core';
import { Add2listComponent } from "../add2list/add2list.component";
import { ListerComponent } from "../lister/lister.component";

@Component({
  selector: 'app-my-list-main',
  standalone: true,
  imports: [Add2listComponent, ListerComponent],
  templateUrl: './my-list-main.component.html',
  styleUrl: './my-list-main.component.css'
})
export class MyListMainComponent {


  data: string[] = ['One', 'two', 'three'];

  addNewValue(newText: string) {
    this.data.push(newText);
  }
}
