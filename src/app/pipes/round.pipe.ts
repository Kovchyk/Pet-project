import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'roundNum'})
export class RoundNumPipe implements PipeTransform {
  transform(value: string): number {
    let val = parseFloat(value);
    return Math.round(val);
  }
}