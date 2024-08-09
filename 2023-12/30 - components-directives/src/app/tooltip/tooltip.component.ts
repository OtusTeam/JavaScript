import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent implements DoCheck {
  tooltip = "Some Text";
  left = 200;
  top = 100;

  ngDoCheck(): void {
    console.log('tooltip do check')
  }
}
