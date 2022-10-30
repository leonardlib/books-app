import { createReducer, on } from '@ngrx/store';
import { getBooksReceived } from './book.actions';
import { Book } from './book.model';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(getBooksReceived, (state, { books }) => ([...state, ...books]))
);
