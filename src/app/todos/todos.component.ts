import { Component, OnInit } from '@angular/core';
import {faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
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
  constructor(private  todoService: TodosService) {

  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.todoService.getTodos()
      .subscribe((response: Todo[]) => {
        console.log(response)
      })
  }

}
