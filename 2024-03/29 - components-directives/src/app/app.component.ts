import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigPanelForTestingComponent } from './components/big-panel-for-testing/big-panel-for-testing.component';

@Component({
  selector: 'app-root', // <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet, BigPanelForTestingComponent],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'otus-comp';
  public count =0;

  onClick(){
    this.count++;
  }
}
