import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamochkaComponent } from './components/ramochka/ramochka.component';



@NgModule({
  declarations: [RamochkaComponent],
  imports: [

    CommonModule,
  ],
  exports: [RamochkaComponent]
})
export class SharedModule { }
