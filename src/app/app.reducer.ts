import { createReducer, on } from '@ngrx/store';
import {
  filterBooks,
  getBooks,
  getBooksReceived,
  getBooksRejected,
} from './app.actions';
import { AppState, REDUCER_STATUS } from './app.state';

export const initialState: AppState = {
  books: {
    items: [],
    itemsCopy: [],
    status: REDUCER_STATUS.idle,
    error: undefined,
  },
};

export const appReducer = createReducer(
  initialState,
  on(getBooks, (state) => ({
    ...state,
    books: {
      ...state.books,
      status: REDUCER_STATUS.pending,
    },
  })),
  on(getBooksReceived, (state, { books }) => ({
    ...state,
    books: {
      ...state.books,
      status: REDUCER_STATUS.resolved,
      items: books,
      itemsCopy: books,
    },
  })),
  on(getBooksRejected, (state, { error }) => ({
    ...state,
    books: {
      ...state.books,
      error,
      status: REDUCER_STATUS.rejected,
    },
  })),
  on(filterBooks, (state, { searchText }) => {
    const searchTextLower = searchText.toLowerCase();
    state.books.items = state.books.itemsCopy.filter(
      ({ title, author }) =>
        title.toLowerCase().includes(searchTextLower) ||
        author.toLowerCase().includes(searchTextLower),
    );
    return state;
  }),
);
