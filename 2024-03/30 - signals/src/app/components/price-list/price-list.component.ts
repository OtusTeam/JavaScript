import { AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, EffectRef, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { Product } from '../models';
import { PriceListService } from '../price-list.service';
import { fromEvent, Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.css'
})
export class PriceListComponent implements AfterViewInit {

  @ViewChild('meButton') meButton!: ElementRef<HTMLButtonElement>;


  public list: Product[] = [];

  public counter = signal<number>(0);

  private counterRef$: EffectRef;

  public totalPrice = computed<number>(() => this.listService.listSignal().length === 0 ?
    0 :
    this.listService.listSignal().reduce((a, b) => a + b.price, 0));

  constructor(public readonly listService: PriceListService,
    private readonly http: HttpClient
  ) {
    this.counterRef$ = effect(() => {
      console.log('Something happened ' + this.counter());
    });
  }
  ngAfterViewInit(): void {
    fromEvent(this.meButton.nativeElement, 'click').subscribe(obj => {
      this.http.get<{ fact: string }>('https://catfact.ninja/fact').subscribe(data => {
        alert(data.fact);
      })
    });
  }


  public now() {
    return new Date();
  }

  public incr() {
    this.counter.update(prev => prev + 1)
  }

  public destroy(){
    this.counterRef$.destroy();
  }
}
