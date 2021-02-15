import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-todo-actions',
  templateUrl: './todo-actions.component.html',
  styleUrls: ['./todo-actions.component.css']
})
export class TodoActionsComponent implements OnInit {

  @Input() todo:{title:string,status:string}
  @Input() id:string

  iconHidden:boolean = false;
  divHidden:boolean = true;
  inputLength:string = ''

 
  constructor(private todoService:ToDoService) {
   }


  ngOnInit(): void {
  }

  cancel(){
    this.divHidden = true;
  }

  edit(value:string){
   this.todoService.editToDo(this.id,value);
   this.iconHidden=false;
   this.divHidden=true;
  }

  delete(){
    this.todoService.deleteToDo(this.id);
  }

  openEditDiv(){
    this.iconHidden=true;
    this.divHidden=false;
  }

  completed(){
    this.todoService.completed(this.id);
  }
  
}
