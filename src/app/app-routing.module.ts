import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoEditorComponent} from "./todo-editor/todo-editor.component";

const routes: Routes = [
  {path: "", component: TodoListComponent},
  {path: "list", component: TodoListComponent},
  {
    path: "editor", children: [
      {
        path: "",
        component: TodoEditorComponent,
      },
      {
        path: ":id",
        component: TodoEditorComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
