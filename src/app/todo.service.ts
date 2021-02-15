import { EventEmitter, Output } from "@angular/core";

export class ToDoService{

   todoList: {title:string,id:string,status:string}[]=[{id:(Date.now()+60).toString(),title:"hiih",status:"complete"},{id:Date.now().toString(),title:"string",status:"incomplete"}];

 newTodo= new EventEmitter<{title:string,id:string}[]>(); 
    addToDo(title:string){
        let id:string = Date.now().toString();
        this.todoList.push({id:id,title:title,status:"incomplete"});
    }

    editToDo(id:string, newTitle:string){
        let toDoToEdit:{id:string,title:string,status:string};
        toDoToEdit = this.todoList.find(todo => todo.id === id)

          let index:number = this.todoList.indexOf(toDoToEdit);
          this.todoList[index].title = newTitle;
    }

    deleteToDo(id:string){
        // console.log(id);
        
       
        let array = this.todoList.filter((todo)=>todo.id!==id);
         this.todoList= array;
        
         this.newTodo.emit(this.todoList);
    }

    completed(id:string){
        let toDoToEdit:{id:string,title:string,status:string};
        toDoToEdit = this.todoList.find(todo => todo.id === id)
        let index:number = this.todoList.indexOf(toDoToEdit);

        this.todoList[index].status = "complete";
       
    }
}