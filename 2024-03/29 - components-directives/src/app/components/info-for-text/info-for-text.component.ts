import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-info-for-text',
  standalone: true,
  imports: [],
  templateUrl: './info-for-text.component.html',
  styleUrl: './info-for-text.component.css'
})
export class InfoForTextComponent implements OnDestroy, OnInit, OnChanges, AfterViewInit {
  ngAfterViewInit(): void {
    console.log('VIEW INIT', this.fancyText, this.myButton);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CHANGES", changes);
  }

  ngOnInit(): void {

    console.log('INITIZIALIZATION', this.fancyText, this.myButton);
  }
  
  ngOnDestroy(): void {
    console.log('DESTROY');


  }



  @ViewChild('myButton') myButton!: ElementRef;


  @Input()
  fancyText: string = '';

  @Output()
  public somethingHappened = new EventEmitter<string>();

  handleInnerClick() {
    console.log(new Date() + '');
    this.somethingHappened.emit(new Date() + '');
  }
}
