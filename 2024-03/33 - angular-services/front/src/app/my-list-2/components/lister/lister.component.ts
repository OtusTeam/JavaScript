import { Component, Input } from '@angular/core';
import { MyListDataService } from '../../services/my-list-data.service';

@Component({
  selector: 'app-listerservice',
  standalone: true,
  imports: [],
  templateUrl: './lister.component.html',
})
export class ListerComponent {

  constructor(private readonly dataService: MyListDataService) { }

  get myFancyData() {
    return this.dataService.data;
  }
}
