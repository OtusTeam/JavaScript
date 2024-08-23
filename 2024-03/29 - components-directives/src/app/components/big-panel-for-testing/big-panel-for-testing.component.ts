import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InfoForTextComponent } from '../info-for-text/info-for-text.component';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { WhiteColorDirective } from '../../directives/white-color.directive';
import { BlackBackDirective } from '../../directives/black-back.directive';

@Component({
  selector: 'app-big-panel-for-testing',
  standalone: true,
  imports: [InfoForTextComponent, JsonPipe, NgFor,NgIf, BlackBackDirective, WhiteColorDirective],
  templateUrl: './big-panel-for-testing.component.html',
  styleUrl: './big-panel-for-testing.component.css'
})
export class BigPanelForTestingComponent {
  public superText: string = 'Я супер текст';

  available = true;
  array:string[]=[];

  counter = 1;
  public myObj = { a: 2 }

  @ViewChild('inputVal') inputVal!: ElementRef;

  public inputText='';

  getDate() {
    return new Date();
  }


  clickHandle() {
    this.counter++;

  }

send(){

  
  this.inputText=this.inputVal.nativeElement.value;
  this.array.push(this.inputText);
}


  alarm(ev: string) {
    console.log(ev);
    alert('alarm ' + ev);
  }
}
