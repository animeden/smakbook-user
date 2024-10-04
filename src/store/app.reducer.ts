import {createReducer, on, Action} from '@ngrx/store';
import {setPage} from './app.actions';

export interface AppState {
  page: string;
}

export const initialState: AppState = {
  page: "home"
};

const _appReducer = createReducer(
  initialState,
  on(setPage, (state, {page}) => ({...state, page}))
);

export function appReducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
