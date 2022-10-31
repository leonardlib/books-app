import { selectBooks, selectBook, selectWishlist } from './app.selectors';
import { AppState, REDUCER_STATUS } from './app.state';
import { Book } from './book.model';

describe('AppSelectors', () => {
  const book: Book = {
    title: 'Book 1',
    description: 'Book 1',
    isbn: '1234',
    image: '',
    author: 'Test',
    genre: '',
    published: '',
    publisher: '',
  };
  const initialState: AppState = {
    books: {
      items: [book],
      itemsCopy: [book],
      status: REDUCER_STATUS.resolved,
      error: undefined,
    },
    wishlist: {
      items: [
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
      ],
    },
  };

  it('should select the book list', () => {
    // arrange
    const result = selectBooks.projector(initialState);

    // assert
    expect(result.items.length).toEqual(1);
    expect(result.items[0].isbn).toEqual('1234');
  });

  it('should select a book', () => {
    // arrange
    const result = selectBook('1234').projector(initialState.books);

    // assert
    expect(result?.isbn).toEqual('1234');
    expect(result?.title).toEqual('Book 1');
  });

  it('should select the wishlist', () => {
    // arrange
    const result = selectWishlist.projector(initialState);

    // assert
    expect(result.items.length).toEqual(1);
    expect(result.items[0].isbn).toEqual('5678');
  });
});
