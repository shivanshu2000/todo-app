import { Component, OnInit } from '@angular/core';
import { ToDoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  toDos :{title:string,id:string}[]=[];
  showIncompleted:boolean =true;
  showCompleted:boolean = false;


  constructor(private toDoSevice:ToDoService){

    // this.toDos = this.toDoSevice.todoList;
    this.toDoSevice.newTodo.subscribe(
      (newTodo:{title:string,id:string}[])=> this.toDos = newTodo 
    )

   
    console.log("in app")
  }
  
  ngOnInit(){
   console.log("init")
   
   this.toDos = this.toDoSevice.todoList;
 }

 ngOnChanges(){
   console.log("changes")
 }

 showCompletedM(){
  this.showCompleted = true;
  this.showIncompleted= false;
 }
 showIncompletedM(){
  this.showCompleted = false;
  this.showIncompleted= true;
 }

}
