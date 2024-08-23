import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsComponent } from './pics/pics.component';
import { routes } from './pics.routes';
import { provideRouter } from '@angular/router';



@NgModule({
  declarations: [PicsComponent],
  providers:[provideRouter(routes)],
  imports: [
    CommonModule
  ],
  exports: [PicsComponent]
})
export class PicsModule { }
