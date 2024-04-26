import {Component, OnInit, Input} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ToastrService} from 'ngx-toastr';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  //@ts-ignore
  @Input() todoInput: Todo;
  //@ts-ignore
  completed: boolean = false;
  //@ts-ignore
  todo: Todo;

  constructor(public todoService: TodoService, private toasterService: ToastrService) {
  }

  ngOnInit(): void {
  }

  onChange() {
    this.completed = !this.completed;
    this.completed ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';
  }
  //@ts-ignore
  toggleClass() {
    if (this.completed) {
      return {'list-group-item-success': this.completed, 'border-primary': this.completed};
    }
  }

  deleteTodo(item:any) {
    this.todo = item;
    this.todoService.deleteTodo(item);
    this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');
  }

  isFavorite() {
    this.todoInput.isFavorite = !this.todoInput.isFavorite;
    if (this.todoInput.isFavorite) {
      this.toasterService.success('Todo Added to Favorite');
      //@ts-ignore
      this.todoService.fav.unshift(this.todoInput);
      localStorage.setItem("favorite", JSON.stringify(this.todoService.fav));
    } else {
      this.toasterService.error('Todo Removed from Favorite');
      let index = this.todoService.todoList.indexOf(this.todo);
      this.todoService.fav.splice(index, 1);
      localStorage.setItem("favorite", JSON.stringify(this.todoService.fav));
    }
  }

}
