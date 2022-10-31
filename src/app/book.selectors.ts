import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectState = createFeatureSelector<AppState>('bookReducer');

export const selectBooks = createSelector(selectState, ({ books }) => books);
