import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddSuperListComponent } from "./add-super-list/add-super-list.component";
import { MySuperListComponent } from "./my-super-list/my-super-list.component";
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-super-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AddSuperListComponent, MySuperListComponent],
  templateUrl: './super-list.component.html',
  styleUrl: './super-list.component.css'
})
export class SuperListComponent {
  data = new BehaviorSubject<string[]>([]);

  private foo() {

  }
}
