import { Component } from '@angular/core';
import { Add2listComponent } from "../add2list/add2list.component";
import { ListerComponent } from "../lister/lister.component";
import { MyListDataService } from '../../services/my-list-data.service';

@Component({
  selector: 'app-my-list-main-service',
  standalone: true,
  imports: [Add2listComponent, ListerComponent],
  providers: [MyListDataService],
  templateUrl: './my-list-main.component.html',
  styles: `
  :host{
    .main{
      border: 1px solid green;
      padding: 20px;
      margin: 20px;
    }
  }`
})
export class MyList2MainComponent {

}
