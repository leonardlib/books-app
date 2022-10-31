import { createAction, props } from '@ngrx/store';
import { Book } from './book.model';

export const getBooksReceived = createAction(
  'getBooksReceived',
  props<{ books: ReadonlyArray<Book> }>(),
);

export const filterBooks = createAction(
  'filterBooks',
  props<{ searchText: string }>(),
);
