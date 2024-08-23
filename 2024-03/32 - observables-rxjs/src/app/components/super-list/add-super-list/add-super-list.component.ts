import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-add-super-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-super-list.component.html',
  styleUrl: './add-super-list.component.css'
})
export class AddSuperListComponent {

  @Input() data!: BehaviorSubject<string[]>;

  text: string = '';

  sendToList() {
    this.data.next([...this.data.value, this.text]);
    this.text = '';
  }

}
