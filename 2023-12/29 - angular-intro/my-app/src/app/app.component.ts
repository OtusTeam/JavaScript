import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {MyService} from "./services/my.service";
import {debounceTime, fromEvent, map, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <div>Template:</div>
    <div>{{title}} {{myService.hello()}}</div>

    <app-my></app-my>
    <app-game [text]="'Hello guys'" ></app-game>

    <input #text />
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'my-app';


  @ViewChild('text')
  input: ElementRef | null = null;
  subscription: Subscription | undefined;

  constructor(public myService: MyService) {

  }

  ngAfterViewInit(): void {
    // Observable.range(1, 0).filter().map().subscribe();

    this.subscription =
      fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup')
        .pipe(
          debounceTime(300),
          map ((e: any) => e.target.value)
        )
        .subscribe(e => console.log(e))
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
