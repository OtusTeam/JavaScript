import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyListMainComponent } from "./my-list/components/my-list-main/my-list-main.component";
import { MyList2MainComponent } from "./my-list-2/components/my-list-main/my-list-main.component";
import { ListerComponent } from "./my-list-2/components/lister/lister.component";
import { GreenMainComponent } from "./green-pink/components/green-main/green-main.component";
import { AquaMainComponent } from "./aqua-purple/components/aqua-main/aqua-main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyListMainComponent, MyList2MainComponent, ListerComponent, GreenMainComponent, AquaMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-demo';
}
