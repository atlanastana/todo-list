import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "./locale-storage-jwt.service";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemsList: any = [
    {id: 1, title: 'кот', desc: 'сводить кота к ветеринару в 14:00'},
    {id: 2, title: 'стрижка', desc: 'съездить к парикмахеру после 17:00'},
    {id: 3, title: 'ужин', desc: 'сходить в супермаркет, купить продукты и приготовить ужин'},
    {id: 4, title: 'тренировка', desc: 'упражнения для укрепления позвоночника и легкая пробежка'},
    {id: 5, title: 'задачи', desc: 'расписать задачи на следующий день перед сном'},
  ]

  items$ = new BehaviorSubject(this.itemsList);

  constructor(private jwtService: LocalStorageService) {
  }

  saveItems(items: any) {
    if (items) {
      this.itemsList = items;
      this.items$.next(this.itemsList);
    }
  }

  addItem(item: any) {
    if (this.itemsList.length < 1) {
      item.id = 1
    } else {
      item.id = this.itemsList[this.itemsList.length - 1].id + 1
    }
    this.itemsList.push(item);
    this.items$.next(this.itemsList);
    this.jwtService.setData(this.itemsList);
  }

  removeItem(id: number) {
    this.itemsList = this.itemsList.filter((item: any) => item.id != id)
    this.items$.next(this.itemsList)
    this.jwtService.setData(this.itemsList);
  }

  updateItem(item: any) {
    let result = this.itemsList.find((item: any) => item.id === item.id);
    this.itemsList[this.itemsList.indexOf(result)] = item;
    this.items$.next(this.itemsList);
    this.jwtService.setData(this.itemsList);
  }

  getItem(id: number) {
    let result = this.itemsList.filter((item: any) => item.id == id)
    return result[0];
  }

}
