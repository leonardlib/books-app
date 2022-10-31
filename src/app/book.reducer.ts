import { createReducer, on } from '@ngrx/store';
import { filterBooks, getBooksReceived } from './book.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  books: [],
  booksCopy: [],
};

export const bookReducer = createReducer(
  initialState,
  on(getBooksReceived, (state, { books }) => ({
    ...state,
    books,
    booksCopy: books,
  })),
  on(filterBooks, (state, { searchText }) => {
    const searchTextLower = searchText.toLowerCase();
    const filteredBooks = state.booksCopy.filter(
      ({ title, author }) =>
        title.toLowerCase().includes(searchTextLower) ||
        author.toLowerCase().includes(searchTextLower),
    );
    return {
      ...state,
      books: filteredBooks,
    };
  }),
);
