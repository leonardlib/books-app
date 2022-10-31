import { createReducer, on } from '@ngrx/store';
import {
  addToWishlist,
  removeFromWishlist,
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
  wishlist: {
    items: [],
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
    const filteredBooks = state.books.itemsCopy.filter(
      ({ title, author }) =>
        title.toLowerCase().includes(searchTextLower) ||
        author.toLowerCase().includes(searchTextLower),
    );
    return {
      ...state,
      books: {
        ...state.books,
        items: filteredBooks,
      },
    };
  }),
  on(addToWishlist, (state, { book }) => {
    const newBookItems = state.books.items.filter(
      ({ isbn }) => isbn !== book.isbn,
    );
    const newBookItemsCopy = state.books.itemsCopy.filter(
      ({ isbn }) => isbn !== book.isbn,
    );
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        items: [...state.wishlist.items, book],
      },
      books: {
        ...state.books,
        items: newBookItems,
        itemsCopy: newBookItemsCopy,
      },
    };
  }),
  on(removeFromWishlist, (state, { book }) => {
    const newWishlistItems = state.wishlist.items.filter(
      ({ isbn }) => isbn !== book.isbn,
    );
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        items: newWishlistItems,
      },
      books: {
        ...state.books,
        items: [...state.books.items, book],
        itemsCopy: [...state.books.itemsCopy, book],
      },
    };
  }),
);
