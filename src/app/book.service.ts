import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<{ data: Book[] }>(
      'https://fake-data3.p.rapidapi.com/fk/books',
      {
        headers: {
          'X-RapidAPI-Key': '308292677emsh103c111a2fc8994p1ec99ajsnba89eed0e4bd',
          'X-RapidAPI-Host': 'fake-data3.p.rapidapi.com'
        },
      },
    );
  }
}
