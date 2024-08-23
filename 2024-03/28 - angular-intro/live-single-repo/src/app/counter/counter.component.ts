import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges}
  from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();


  constructor() { }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
  }

  public onCounterClick() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
}
