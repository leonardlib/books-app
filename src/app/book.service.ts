import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from './book.model';
import { getBooks, getBooksReceived, getBooksRejected } from './app.actions';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient, private store: Store) {}

  getBooks() {
    this.store.dispatch(getBooks());
    return this.http
      .get<{ data: Book[] }>('https://fake-data3.p.rapidapi.com/fk/books', {
        headers: {
          'X-RapidAPI-Key':
            '308292677emsh103c111a2fc8994p1ec99ajsnba89eed0e4bd',
          'X-RapidAPI-Host': 'fake-data3.p.rapidapi.com',
        },
      })
      .pipe(
        catchError(() => {
          const errorMessage = 'Something went wrong';
          this.store.dispatch(getBooksRejected({ error: errorMessage }));
          return throwError(() => new Error(errorMessage));
        }),
      )
      .subscribe(({ data }) => {
        this.store.dispatch(getBooksReceived({ books: data }));
      });
  }
}
