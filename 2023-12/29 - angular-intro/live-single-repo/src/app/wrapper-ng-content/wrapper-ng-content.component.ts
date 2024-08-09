import {AfterViewInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {RolesService} from "../roles.service";

@Component({
  selector: 'app-wrapper-ng-content',
  templateUrl: './wrapper-ng-content.component.html',
  styleUrls: ['./wrapper-ng-content.component.css'],
  providers: [
    {
      provide: RolesService,

    }
  ]
})
export class WrapperNgContentComponent implements OnInit, AfterViewInit {

  constructor(public rolesService: RolesService) { }

 @ContentChild('firstElement')
 firstElement!: ElementRef

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.firstElement.nativeElement.innerHTML = 'Changed by wrapper';
  }

}
