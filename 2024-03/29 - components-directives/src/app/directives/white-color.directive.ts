import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appWhiteColor]',
  standalone: true
})
export class WhiteColorDirective {

  constructor(private readonly el:ElementRef) {

    this.el.nativeElement.style.color='white';
   }

   @Input() set borderColor(val:string|undefined){
    if(val){
    this.el.nativeElement.style.border='1px solid '+ val;
    }
   }

}
