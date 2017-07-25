import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstCapitalLetter'})
export class FirstCapitalLetterPipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.substr(1);
  }
}