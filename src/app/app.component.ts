import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from "../../src/models/todo.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: Todo[] = []

  onSubmit(form: NgForm){
    let todo = new Todo(Guid.create(), form.value.title, false);
    this.todos.push(todo);
    form.resetForm();
  }

  onComplete(id: Guid){
    let todo = this.todos.filter(x=>x.id === id)[0];
    todo.isComplete = true;
  }

  onDelete(id: Guid){
    let todo = this.todos.filter(x=>x.id === id)[0];
    let index = this.todos.indexOf(todo,0);
    if(index > -1){
      this.todos.splice(index,1);
    }
  }
}
