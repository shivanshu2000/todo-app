import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ToDoService} from './todo.service';

import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoActionsComponent } from './todo-actions/todo-actions.component';
import { FormsModule } from '@angular/forms';
import { CompletedTodoComponent } from './completed-todo/completed-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoActionsComponent,
    CompletedTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
