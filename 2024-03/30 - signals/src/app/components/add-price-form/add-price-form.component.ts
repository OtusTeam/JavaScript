import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models';
import { PriceListService } from '../price-list.service';


@Component({
  selector: 'app-add-price-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-price-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './add-price-form.component.css'
})
export class AddPriceFormComponent {

  constructor(private readonly listService: PriceListService) {

  }


  public name!: string;
  public price!: number;

  add() {
    const newList = [...this.listService.list, { name: this.name, price: this.price }];
    this.listService.list = newList;
    // this.listService.listSignal.set(newList)
    // this.listService.list$.next(newList);
    this.listService.listSignal.update((prev: Product[]) => {
      const newL = [...prev, { name: this.name, price: this.price }];
      return newL as Product[];
    });
  }
}
