import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookService } from '../book.service';
import { selectBooks } from '../book.selectors';
import { getBooksReceived } from '../book.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  isLoading: boolean;

  constructor(private store: Store, private bookService: BookService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.isLoading = true;
    this.bookService.getBooks().subscribe(({ data }) => {
      this.store.dispatch(getBooksReceived({ books: data }))
      this.isLoading = false;
    });
  }
}
