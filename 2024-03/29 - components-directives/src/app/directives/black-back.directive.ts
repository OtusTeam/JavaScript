import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlackBack]',
  standalone: true
})
export class BlackBackDirective {

  constructor(private readonly el:ElementRef) {

    this.el.nativeElement.style.backgroundColor='black';
   }
}
