import { AppState } from './../../../../02-redux-app/src/app/app.reducer';
import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAcction } from './todo.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completado:boolean = false;
  constructor(private _store :Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    const accion = new ToggleAllTodoAcction(this.completado);
    this._store.dispatch(accion);
  }

}
