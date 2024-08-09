import {Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {TooltipDirective} from "../directives/tooltip.directive";
import {TooltipComponent} from "../tooltip/tooltip.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    NgStyle,
    TooltipDirective
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnChanges{

  value: number = 0;
  internalCounter: number = 0;

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('mouseenter')
  }

  @Input()
  someProperty: number = 0;

  @Input()
  set counter(value: number) {
    this.internalCounter = value;
  }

  @Output()
  someChanged = new EventEmitter<number>()


  count(event: any) {
    console.log(event);

    this.internalCounter++;
    this.someChanged.emit(this.internalCounter)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
