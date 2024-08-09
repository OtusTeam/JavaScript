import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appWakaWaka]'
})
export class WakaWakaDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }

}
