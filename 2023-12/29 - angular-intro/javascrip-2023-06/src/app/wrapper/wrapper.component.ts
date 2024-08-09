import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {GreetingComponent} from "../greeting/greeting.component";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements AfterViewInit, OnInit {

  isVisible = false;

  @ViewChild(GreetingComponent)
  private greetingComponent: GreetingComponent | null = null;

  ngOnInit() {
    console.log('ngOnInit', this.greetingComponent);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.greetingComponent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', this.greetingComponent);
  }
}
