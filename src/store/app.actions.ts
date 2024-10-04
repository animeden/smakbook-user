import { createAction, props } from '@ngrx/store';

export const setPage = createAction(
  '[page] Set Page',
  props<{ page: string }>()
);
