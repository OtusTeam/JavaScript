import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {TooltipDirective} from "./directives/tooltip.directive";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, TooltipDirective, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'javascript-2023-12-components-and-directives';

  appCounter: number = 0;

  changeAppCounter($event: number) {
    this.appCounter = $event
  }
}
