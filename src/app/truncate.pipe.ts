import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string): string {
    return value.length >= 90 ? value.slice(0, 87) + '...' : value;
  }
}
