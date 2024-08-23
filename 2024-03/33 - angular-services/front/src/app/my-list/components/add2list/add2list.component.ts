import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add2list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add2list.component.html',
  styleUrl: './add2list.component.css'
})
export class Add2listComponent {


  @Output() textChanged = new EventEmitter<string>();

  text: string = '';

  sendToParent() {
    this.textChanged.emit(this.text);
    this.text = '';
  }
}
