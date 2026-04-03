import { createAction, props } from '@ngrx/store';
import { usuariosTypeAction } from './usuarios.interface';
import { IUsuario } from 'src/app/Interfaces/UsuarioModel';

// Carrega todos os usuários
export const LoadUsuarios = createAction(usuariosTypeAction.LOAD_USUARIOS);

export const loadUsuariosSucess = createAction(
  usuariosTypeAction.LOAD_USUARIOS_SUCCESS,
  props<{ payload: IUsuario[] }>(),
);

export const loadUsuariosFail = createAction(
  usuariosTypeAction.LOAD_USUARIOS_FAIL,
  props<{ error: string }>(),
);

// Carrega um único usuário
export const LoadUsuario = createAction(usuariosTypeAction.LOAD_USUARIO);

export const loadUsuarioSuccess = createAction(
  usuariosTypeAction.LOAD_USUARIO_SUCCESS,
  props<{ payload: IUsuario[] }>(),
);

export const loadUsuariFail = createAction(
  usuariosTypeAction.LOAD_USUARIO_FAIL,
  props<{ error: string }>(),
);

// Cria um novo usuário
export const CreateUsuario = createAction(usuariosTypeAction.CREATE_USUARIO);

export const CreateUsuarioSuccess = createAction(
  usuariosTypeAction.CREATE_USUARIO_SUCCESS,
  props<{ payload: IUsuario }>(),
);

export const CreateUsuarioFail = createAction(
  usuariosTypeAction.CREATE_USUARIO_FAIL,
  props<{ error: string }>(),
);

// Edita um usuário
export const EditUsuario = createAction(usuariosTypeAction.UPDATE_USUARIO);

export const EditUsuarioSuccess = createAction(
  usuariosTypeAction.UPDATE_USUARIO_SUCCESS,
  props<{ payload: IUsuario }>(),
);

export const EditUsuarioFail = createAction(
  usuariosTypeAction.UPDATE_USUARIO_FAIL,
  props<{ error: string }>(),
);

// Exclui usuário
export const DeleteUsuario = createAction(usuariosTypeAction.DELETE_USUARIO);

export const DeleteUsuarioSuccess = createAction(
  usuariosTypeAction.DELETE_USUARIO_SUCCESS,
  props<{ payload: IUsuario }>(),
);

export const DeleteUsuarioFail = createAction(
  usuariosTypeAction.DELETE_USUARIO_FAIL,
  props<{ error: string }>(),
);
