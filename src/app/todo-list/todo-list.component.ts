import {Component, inject, OnInit} from '@angular/core';
import {ItemsService} from "../core/items.service";
import {LocalStorageService} from "../core/locale-storage-jwt.service";
import {Item} from "../models/item.model";
import {BehaviorSubject} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  priorityForm
  items$ = inject(ItemsService).items$;
  priorities = this.itemsService.priorities
  priority: string = 'все';


  constructor(private itemsService: ItemsService, private localStorage: LocalStorageService) {
    this.priorityForm = new FormGroup({
      priority: new FormControl(this.priority, {validators: [Validators.required], nonNullable: true,}),
    });
  }

  ngOnInit() {
    //@ts-ignore
    this.itemsService.saveItems(JSON.parse(this.localStorage.getData()));
  }

  removeUser(id: number) {
    this.itemsService.removeItem(id);
  }

}
