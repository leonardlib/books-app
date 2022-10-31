import { Book } from './book.model';
import { Values } from '../utils';

export interface AppState {
  books: {
    items: ReadonlyArray<Book>;
    itemsCopy: ReadonlyArray<Book>;
    status: ReducerStatus;
    error?: string;
  };
  wishlist: {
    items: ReadonlyArray<Book>;
  };
}

export const REDUCER_STATUS = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
};
export type ReducerStatus = Values<typeof REDUCER_STATUS>;
