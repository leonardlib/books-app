import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectState = createFeatureSelector<AppState>('appReducer');

export const selectBooks = createSelector(selectState, ({ books }) => books);

export const selectBook = (isbnFromRoute: string) =>
  createSelector(selectBooks, (books) =>
    books.items.find(({ isbn }) => isbn === isbnFromRoute),
  );

export const selectWishlist = createSelector(
  selectState,
  ({ wishlist }) => wishlist,
);
