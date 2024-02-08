import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../models/item.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() Item!: Item;
  @Output() toggle = new EventEmitter();

  deleteUser(id: number) {
    this.toggle.emit(id)
  }

  changeStatus(status: string) {
    console.log(status)
  }

}
