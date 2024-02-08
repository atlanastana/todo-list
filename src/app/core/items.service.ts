import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "./locale-storage-jwt.service";
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  priorities = ['по возможности', 'cильно важно', 'важно'];

  itemsList: Array<Item> = [
    {id: 1, title: 'кот', desc: 'сводить кота к ветеринару в 14:00', priority: 'важно'},
    {id: 2, title: 'стрижка', desc: 'съездить к парикмахеру после 17:00', priority: 'cильно важно'},
    {id: 3, title: 'ужин', desc: 'сходить в супермаркет, купить продукты и приготовить ужин', priority: 'важно'},
    {id: 4, title: 'тренировка', desc: 'упражнения для укрепления позвоночника', priority: 'по возможности'},
    {id: 5, title: 'задачи', desc: 'расписать задачи на следующий день перед сном', priority: 'по возможности'},
  ]

  items$ = new BehaviorSubject<Array<Item>>(this.itemsList);

  constructor(private jwtService: LocalStorageService) {
  }

  saveItems(items: Array<Item>) {
    if (items) {
      this.itemsList = items;
      this.items$.next(this.itemsList);
    }
  }

  addItem(item: Item) {
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

  updateItem(itemh: Item) {
    let result = this.itemsList.find((item: any) => item.id == itemh.id);
    this.itemsList[this.itemsList.indexOf(result!)] = itemh;
    this.items$.next(this.itemsList);
    this.jwtService.setData(this.itemsList);
  }

  getItem(id: number) {
    let result = this.itemsList.filter((item: any) => item.id == id)
    return result[0];
  }

}
