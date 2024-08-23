import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private readonly el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
    el.nativeElement.style.borderRadius = '8px';
    el.nativeElement.style.padding = '4px';

  }

}
