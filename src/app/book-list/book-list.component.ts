import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectBooks } from '../app.selectors';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { REDUCER_STATUS } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit, OnDestroy {
  books!: ReadonlyArray<Book>;
  isLoading: boolean;
  booksSubscription!: Subscription;

  constructor(private store: Store, private bookService: BookService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.booksSubscription = this.store
      .select(selectBooks)
      .subscribe((data) => {
        this.books = data.items;
        this.isLoading = data.status !== REDUCER_STATUS.resolved;
      });
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }

  getBooks(): void {
    this.bookService.getBooks();
  }
}
