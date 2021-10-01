import {Component, OnInit} from '@angular/core';
import {faSquare, faCheckSquare, faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import {TodosService} from "../services/todos.service";
import {Todo} from "../models/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  faTrashAlt = faTrashAlt;

  todos: Todo[] = []
  finishedTodos: Todo[] = []

  constructor(private todoService: TodosService) {

  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todoService.getTodos()
      .subscribe((response: Todo[]) => {
        this.todos = response.filter(t => !t.completed)
        this.finishedTodos = response.filter(t => t.completed)
      })
  }

  addTodo(title: string) {
    if (title === '') {
      return
    }
    const todo: Todo = {title, completed: false}
    this.todoService.addTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  toggleTodoStatus(todo: Todo) {
    todo.completed = !todo.completed
    this.todoService.toggleTodoStatus(todo)
  }
}
