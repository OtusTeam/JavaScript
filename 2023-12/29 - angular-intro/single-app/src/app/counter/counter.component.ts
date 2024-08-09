import {Component, Input, OnInit, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';
import {RolesService} from "../roles.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges {

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor(public roleService: RolesService) {}


  internalCounter = 0;

  onCountClick() {
    this.internalCounter++;
    this.counterChange.emit(this.internalCounter);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
    this.internalCounter = this.counter;

  }
}
