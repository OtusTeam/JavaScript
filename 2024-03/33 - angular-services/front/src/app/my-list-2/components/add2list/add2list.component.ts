import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyListDataService } from '../../services/my-list-data.service';

@Component({
  selector: 'app-add2listservice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add2list.component.html',
})
export class Add2listComponent {

  constructor(private readonly dataService: MyListDataService) {
  }

  text: string = '';

  sendToParent() {
    this.dataService.add(this.text);
    this.text = '';
  }
}
