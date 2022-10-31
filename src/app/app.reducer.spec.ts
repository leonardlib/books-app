import * as fromReducer from './app.reducer';
import {
  getBooks,
  getBooksReceived,
  getBooksRejected,
  filterBooks,
  addToWishlist,
  removeFromWishlist,
} from './app.actions';
import { AppState, REDUCER_STATUS } from './app.state';
import { Book } from './book.model';

describe('AppReducer', () => {
  const books: Book[] = [
    {
      title: 'Book 1',
      description: 'Book 1',
      isbn: '1234',
      image: '',
      author: 'Test',
      genre: '',
      published: '',
      publisher: '',
    },
    {
      title: 'Book 2',
      description: 'Book 2',
      isbn: '5678',
      image: '',
      author: 'Test',
      genre: '',
      published: '',
      publisher: '',
    },
  ];

  it('should return the default state', () => {
    // arrange
    const { initialState } = fromReducer;
    const action = {
      type: 'Unknown',
    };
    const state = fromReducer.appReducer(initialState, action);

    // assert
    expect(state).toBe(initialState);
  });

  describe('Book actions', () => {
    it('should set status as pending while getting books', () => {
      // arrange
      const { initialState } = fromReducer;
      const newState: AppState = {
        ...initialState,
        books: {
          ...initialState.books,
          status: REDUCER_STATUS.pending,
        },
      };
      const action = getBooks();
      const state = fromReducer.appReducer(initialState, action);

      // assert
      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });

    it('should set book items', () => {
      // arrange
      const { initialState } = fromReducer;
      const newState: AppState = {
        ...initialState,
        books: {
          ...initialState.books,
          items: books,
          itemsCopy: books,
          status: REDUCER_STATUS.resolved,
        },
      };
      const action = getBooksReceived({ books });
      const state = fromReducer.appReducer(initialState, action);

      // assert
      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });

    it('should set status as rejected when there is an error getting books', () => {
      // arrange
      const { initialState } = fromReducer;
      const newState: AppState = {
        ...initialState,
        books: {
          ...initialState.books,
          error: 'error',
          status: REDUCER_STATUS.rejected,
        },
      };
      const action = getBooksRejected({ error: 'error' });
      const state = fromReducer.appReducer(initialState, action);

      // assert
      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });

    it('should filter book items', () => {
      // arrange
      const { initialState } = fromReducer;
      const newState: AppState = {
        ...initialState,
        books: {
          ...initialState.books,
          items: [books[1]],
          itemsCopy: books,
          status: REDUCER_STATUS.resolved,
        },
      };
      const action = getBooksReceived({ books });
      let state = fromReducer.appReducer(initialState, action);

      // act
      const filterAction = filterBooks({ searchText: 'Book 2' });
      state = fromReducer.appReducer(state, filterAction);

      // assert
      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });

  describe('Wishlist actions', () => {
    it('should add a book', () => {
      // arrange
      const { initialState } = fromReducer;
      const newState: AppState = {
        ...initialState,
        wishlist: {
          ...initialState.wishlist,
          items: [...initialState.wishlist.items, books[0]],
        },
        books: {
          ...initialState.books,
          items: [books[1]],
          itemsCopy: [books[1]],
          status: REDUCER_STATUS.resolved,
        },
      };
      const action = getBooksReceived({ books });
      let state = fromReducer.appReducer(initialState, action);

      // act
      const addAction = addToWishlist({ book: books[0] });
      state = fromReducer.appReducer(state, addAction);

      // assert
      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });

    it('should remove a book', () => {
      // arrange
      const reversedBooks = [books[1], books[0]];
      const { initialState } = fromReducer;
      const newState: AppState = {
        ...initialState,
        wishlist: {
          ...initialState.wishlist,
          items: [],
        },
        books: {
          ...initialState.books,
          items: reversedBooks,
          itemsCopy: reversedBooks,
          status: REDUCER_STATUS.resolved,
        },
      };
      const action = getBooksReceived({ books });
      let state = fromReducer.appReducer(initialState, action);

      // act
      const addAction = addToWishlist({ book: books[0] });
      state = fromReducer.appReducer(state, addAction);
      const removeAction = removeFromWishlist({ book: books[0] });
      state = fromReducer.appReducer(state, removeAction);

      // assert
      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });
});
