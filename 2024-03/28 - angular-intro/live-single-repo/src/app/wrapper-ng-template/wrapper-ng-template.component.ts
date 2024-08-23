import {Component, ContentChild, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wrapper-ng-template',
  templateUrl: './wrapper-ng-template.component.html',
  styleUrls: ['./wrapper-ng-template.component.css']
})
export class WrapperNgTemplateComponent implements OnInit {

  @ContentChild(TemplateRef)
  template!: TemplateRef<any>

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
