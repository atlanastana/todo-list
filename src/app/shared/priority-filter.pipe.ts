import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'priorityFilter'
})
export class PriorityFilterPipe implements PipeTransform {

  transform(list: any, filters: any) {
    if (filters.priority == 'все') {
      return list
    }
    const result = list.filter((item: any) => item.priority == filters.priority)
    return result ? result : list
  }

}

