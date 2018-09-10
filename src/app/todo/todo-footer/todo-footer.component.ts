import { Component, OnInit } from '@angular/core';

import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTofo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFiltro.filtroValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual:fromFiltro.filtroValidos;
  pendientes:number;
  constructor(private _store:Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevofiltro:fromFiltro.filtroValidos) {
    const accion = new fromFiltro.SetFiltroAction(nuevofiltro);
    this._store.dispatch(accion);
  }

  contarPendientes(todo:Todo[]) {
    this.pendientes = todo.filter(todo => !todo.completado).length  ;
  }

  borrarTodo() {
    const accion = new fromTofo.BorrarAllTodoAcction();
    this._store.dispatch(accion);
  }

}
