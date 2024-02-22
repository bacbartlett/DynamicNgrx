import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './actions';

export const initialState = 'bla';

export const letterReducer = createReducer(
  initialState,
  on(increment, (state) => state + ' bla'),
  on(decrement, (state) => {
    const split = state.split(' ');
    split.pop();
    return split.join(" ");
  }),
  on(reset, (state) => 'bla')
);