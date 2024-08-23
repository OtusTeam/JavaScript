import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { BehaviorSubject, interval, map, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-interval-demo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './interval-demo.component.html',
  styleUrl: './interval-demo.component.css'
})
export class IntervalDemoComponent {
  data = new BehaviorSubject<number[]>([]);
  //private sub:Subscription;
  private destroyer = new Subject<void>();

  constructor() {
    interval(1000)
      .pipe(

        map((x) => {

          console.log(x);
          return x;
        }),
        //  takeUntil(this.destroyer),
        takeUntilDestroyed())
      .subscribe(x => {
        this.data.next([...this.data.value, x]);
      });
  }

  // ngOnDestroy(): void {
  //   this.destroyer.next();
  //   // this.sub.unsubscribe();
  // }
}
