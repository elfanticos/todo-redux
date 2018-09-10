import { actions } from './../../../../../02-redux-app/src/app/contador/contador.actions';
import { AppState } from './../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Store } from '@ngrx/store';
import { ToggleTodoAcction, EditarTodoAcction, BorrarTodoAcction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  chkField: FormControl;
  txtInput: FormControl;
  editando:boolean;
  @ViewChild ('txtInputFisico') txtInputFisico:ElementRef;
  constructor(private _store:Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAcction(this.todo.id);
      this._store.dispatch(accion);
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if(this.txtInput.invalid) {
      return;
    }

    if(this.txtInput.value == this.todo.texto) {
      return;
    }

    const accion = new EditarTodoAcction(this.todo.id, this.txtInput.value);
    this._store.dispatch(accion);
  }

  borrarTodo() {
    const accion = new BorrarTodoAcction(this.todo.id);
    this._store.dispatch(accion);
  }

}