import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from './book.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
