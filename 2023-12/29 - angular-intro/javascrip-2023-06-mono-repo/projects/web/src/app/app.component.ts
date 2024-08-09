import { Component } from '@angular/core';
import {UiService} from "../../../ui/src/lib/ui.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  constructor(public uiService: UiService) {
  }
}
