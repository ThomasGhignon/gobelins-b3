import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit'
})
export class CharLimitPipe implements PipeTransform {

  transform(value: string, limit :number): any {
    value = value.substring(0, limit) + "...";

    return value;
  }

}
