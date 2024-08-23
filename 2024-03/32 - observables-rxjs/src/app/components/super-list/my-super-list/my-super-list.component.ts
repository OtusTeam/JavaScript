import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-my-super-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
  templateUrl: './my-super-list.component.html',
  styleUrl: './my-super-list.component.css'
})
export class MySuperListComponent {
  @Input() data!: Observable<string[]>;

  constructor(){
    this.data.subscribe(x=>console.log(x));
  }
}
