import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BehaviorSubject, combineLatest, debounceTime, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-demo',
  standalone: true,
  imports: [AsyncPipe,FormsModule],
  templateUrl: './search-demo.component.html',
  styleUrl: './search-demo.component.css'
})
export class SearchDemoComponent implements AfterViewInit {

  @ViewChild('filterText') filterText!:ElementRef;
  searchQuery$ = new BehaviorSubject<string>('');
  data$=of(['Alpha', 'Beta', 'Gamma','Delta', 'Epsilon']);
  filteredData$: Observable<string[]>=new BehaviorSubject<string[]>([]);
  constructor(){
    // fromEvent()
     this.filteredData$ = combineLatest([this.data$, this.searchQuery$])
     .pipe(
      map(([d,s])=>{
        console.log(d,s);
        return d.filter((x=>x.toLowerCase().includes(s as string)));
      }
     ));
  }
  ngAfterViewInit(): void {
   fromEvent(this.filterText.nativeElement as HTMLInputElement, 'input')
   .pipe(debounceTime(1000))
   .subscribe((x:Event)=>this.searchQuery$.next((x.target as HTMLInputElement).value));
  }
  


  
}
