import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPriceFormComponent } from './components/add-price-form/add-price-form.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { Product } from './components/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddPriceFormComponent, PriceListComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'otus-signals';

  public l: Product[] = [];
  onListChanged(list: Event) {
  //  this.l = list;
  }
}
