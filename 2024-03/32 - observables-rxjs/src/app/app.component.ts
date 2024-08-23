import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SearchDemoComponent } from "./components/search-demo/search-demo.component";
import { SimpleDemoComponent } from "./components/simple-demo/simple-demo.component";
import { MySuperListComponent } from "./components/super-list/my-super-list/my-super-list.component";
import { SuperListComponent } from "./components/super-list/super-list.component";
import { IcanhideComponent } from "./components/icanhide/icanhide.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchDemoComponent, SimpleDemoComponent, MySuperListComponent, SuperListComponent, IcanhideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'otus-rx';
}
