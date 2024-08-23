import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-wrapper-ng-template',
  templateUrl: './wrapper-ng-template.component.html',
  styleUrls: ['./wrapper-ng-template.component.css']
})
export class WrapperNgTemplateComponent implements OnInit {

  constructor() { }

  @ContentChild(TemplateRef)
  content!: TemplateRef<any>
  isVisible = false;

  ngOnInit(): void {
  }

}
