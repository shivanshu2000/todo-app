import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.css']
})
export class CompletedTodoComponent implements OnInit {

  @Input() todo: {id:string, status:string, title:string}

  constructor() { }

  ngOnInit(): void {
  }

}
