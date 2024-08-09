import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortname'
})
export class ShortNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase()
  }

}
