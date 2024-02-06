import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemsService} from "../core/items.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent implements OnInit {
  getId = 0;
  authForm;
  isEdit = false;
  btn = 'Создать';
  currentItem = {};
  title = 'Создание новой задачи';


  constructor(private itemsService: ItemsService,
              private router: Router,
              private readonly route: ActivatedRoute,) {
    this.authForm = new FormGroup({
      title: new FormControl("", {validators: [Validators.required], nonNullable: true,}),
      desc: new FormControl("", {validators: [Validators.required], nonNullable: true,}),
    });
  }

  ngOnInit() {
    this.getId = this.route.snapshot.params["id"];
    if (this.getId > 0) {
      this.currentItem = this.itemsService.getItem(this.getId);
      this.authForm.patchValue(this.currentItem);
      this.btn = 'Сохранить';
      this.isEdit = true;
      this.title = 'Редактирование задачи';
    }
  }

  onAdd() {
    if (this.isEdit) {
      let desc = this.authForm.value.desc
      let title = this.authForm.value.title
      this.itemsService.updateItem({id: this.getId, title, desc});
    } else {
      this.itemsService.addItem(this.authForm.value);
    }

    this.router.navigate(["/"]);
  }

}
