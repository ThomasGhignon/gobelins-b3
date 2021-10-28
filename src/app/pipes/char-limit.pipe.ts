import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit'
})
export class CharLimitPipe implements PipeTransform {

  transform(value: string, limit :number): any {
    if (value){
      return (value.length > limit) ? value.substring(0, limit) + "..." : value;
    }
    return '';
  }

}
