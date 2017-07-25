import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datePipe'})
export class DatePipe implements PipeTransform {
  transform(value: string): string {
    let val = new Date(+value * 1000);
    let stringDate = val.toDateString();
    return stringDate = stringDate.slice(0, -4)
  }
}