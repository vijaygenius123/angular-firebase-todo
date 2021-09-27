import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Todo} from "../models/todo.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosCollection: AngularFirestoreCollection<Todo>
  //todoDoc: AngularFirestoreDocument<Todo>
  todos: Observable<Todo[]>


  constructor(private fs: AngularFirestore) {
    this.todosCollection = this.fs.collection('todos')
    this.todos = this.todosCollection.snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(d => {
            const data = d.payload.doc.data() as Todo
            data.id = d.payload.doc.id
            return data
          })
        })
      )
  }

  getTodos(){
    return this.todos
  }
}
