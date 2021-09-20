import { Component, OnInit } from '@angular/core';
import {faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
