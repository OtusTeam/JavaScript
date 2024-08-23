import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-demo',
  standalone: true,
  imports: [],
  templateUrl: './simple-demo.component.html',
  styleUrl: './simple-demo.component.css'
})
export class SimpleDemoComponent implements OnInit {
  private sub?: Subscription;

  //  private buttonClicked$ = fromEvent(document.getElementsByName('button')!, 'click')

  ngOnInit(): void {
    this.sub = fromEvent(document, 'click').pipe(
      map((x) => {
        console.log(x);
        return x;
      }),
      filter((x) => {
        const el = x.target as HTMLElement;

        return el.tagName === 'BUTTON' && el.className === 'red';
      }
      ),
      map((x) => (x.target as HTMLButtonElement).innerText)
    ).subscribe(text => this.buttonClicked(text));
    ;

  }

  private buttonClicked(t: string) {
    alert('Меня нажали! ' + t);
  }

  public unSubscribeClicked() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
