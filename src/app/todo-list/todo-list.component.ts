import {Component, inject, OnInit} from '@angular/core';
import {ItemsService} from "../core/items.service";
import {LocalStorageService} from "../core/locale-storage-jwt.service";
import {Item} from "../models/item.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items$ = inject(ItemsService).items$;
  priorities = this.itemsService.priorities

  constructor(private itemsService: ItemsService, private localStorage: LocalStorageService) {
  }

  ngOnInit() {
    //@ts-ignore
    this.itemsService.saveItems(JSON.parse(this.localStorage.getData()));
  }

  removeUser(id: number) {
    this.itemsService.removeItem(id);
  }

}
