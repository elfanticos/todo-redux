import { Action } from '@ngrx/store';
export const AGREGAR_TODO =  '[TODO] Agregar todo';

export const TOGGLE_TODO  =  '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO  =  '[TODO] Toggle all todo';

export const EDITAR_TODO  =  '[TODO] Editar todo';
export const BORRAR_TODO  =  '[TODO] Borrar todo';
export const BORRAR_ALL_TODO  =  '[TODO] Borrar all todo';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto:string) {}
}

export class ToggleTodoAcction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id:number) {}
}

export class ToggleAllTodoAcction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completado:boolean) {}
}

export class EditarTodoAcction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id:number, public texto:string) {}
}

export class BorrarTodoAcction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id:number) {}
}

export class BorrarAllTodoAcction implements Action {
    readonly type = BORRAR_ALL_TODO;
    constructor() {}
}

export type Acciones = AgregarTodoAction   |
                       ToggleTodoAcction   |
                       ToggleAllTodoAcction|
                       EditarTodoAcction   |
                       BorrarTodoAcction   |
                       BorrarAllTodoAcction;