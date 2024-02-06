import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() Item: any;
  @Output() toggle = new EventEmitter();

  deleteUser(id: number) {
    this.toggle.emit(id)
  }

}
