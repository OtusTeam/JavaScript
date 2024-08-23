import { Injectable, signal } from '@angular/core';
import { Product } from './models';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {

  public list: Product[] = []

  public list$ = new BehaviorSubject<Product[]>([]);

  public listSignal = signal<Product[]>([]);


}
