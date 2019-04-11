import {Pipe, PipeTransform} from '@angular/core';
import * as momemt from  'moment';

@Pipe({
  name: 'wfmMoment'
})
export class MomentPipe implements PipeTransform {
  transform(value: string, formatFrom: string, formatTo: string = 'DD.MM.YYYY'): string  {
    return momemt(value, formatFrom).format(formatTo);

  }
}
