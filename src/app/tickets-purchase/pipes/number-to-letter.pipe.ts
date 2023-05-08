import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToLetter'
})
export class NumberToLetterPipe implements PipeTransform {

  transform(number: number): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = (number - 1) % 26;
    return letters[index];
  }

}
