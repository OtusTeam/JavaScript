import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
