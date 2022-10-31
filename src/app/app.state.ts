import { Book } from './book.model';

export interface AppState {
  books: ReadonlyArray<Book>;
  booksCopy: ReadonlyArray<Book>;
}
