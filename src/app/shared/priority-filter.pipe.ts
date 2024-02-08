import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class PriorityFilterPipe implements PipeTransform {

  transform(list: any[], filters: Object) {
    const keys = Object.keys(filters).filter(key => filters[key]);
    const filterUser = user => keys.every(key => user[key] === filters[key]);

    return keys.length ? list.filter(filterUser) : list;
  }

}
