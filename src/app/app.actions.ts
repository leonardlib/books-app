import { createAction, props } from '@ngrx/store';
import { Book } from './book.model';

export const getBooks = createAction('getBooks');

export const getBooksReceived = createAction(
  'getBooksReceived',
  props<{ books: ReadonlyArray<Book> }>(),
);

export const getBooksRejected = createAction(
  'getBooksRejected',
  props<{ error: string }>(),
);

export const filterBooks = createAction(
  'filterBooks',
  props<{ searchText: string }>(),
);

export const addToWishlist = createAction(
  'addToWishlist',
  props<{ book: Book }>(),
);

export const removeFromWishlist = createAction(
  'removeFromWishlist',
  props<{ book: Book }>(),
);
