import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {CounterService} from "../counter.service";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnDestroy{

  @Input()
  counter: number = 0;

  @Output()
  changed = new EventEmitter<number>();
  constructor(public counterService: CounterService) {
  }


  count(e?: MouseEvent) {
    this.counterService.count();
    this.changed.emit(this.counterService.getCounter());
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}
