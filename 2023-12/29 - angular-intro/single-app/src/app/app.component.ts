import {Component, ViewChild} from '@angular/core';
import {from, interval} from "rxjs";
import {CounterComponent} from "./counter/counter.component";
import {RolesService} from "./roles.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'single-app';
  appComponentCounter!: number;
  initialCounter = 0;

  @ViewChild(CounterComponent)
  counterComponent!: CounterComponent;

  constructor(public rolesService: RolesService) {}

  onInputChange($event: any) {
    this.initialCounter = +$event.target.value;
  }
}
