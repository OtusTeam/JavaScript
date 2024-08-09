import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const text = this.projectedDOMElement.nativeElement.innerHTML
    this.projectedDOMElement.nativeElement.innerHTML = `${text} - updated in Wrapper`;
  }

  @ContentChild('textElement')
  projectedDOMElement!: ElementRef

  ngOnInit(): void {
  }

}
