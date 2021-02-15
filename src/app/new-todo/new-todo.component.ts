import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  constructor(private todoService:ToDoService) { }

  toDoString:string='';

  ngOnInit(): void {
  }
  addToDo(title:string){
    
    this.todoService.addToDo(title);
  }




}
