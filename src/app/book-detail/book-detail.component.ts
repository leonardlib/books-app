import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectBook } from '../app.selectors';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit, OnDestroy {
  isbn!: string;
  bookSubscription!: Subscription;
  book!: Book;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get('isbn') || '';
    this.bookSubscription = this.store
      .select(selectBook(this.isbn))
      .subscribe((book) => {
        if (book) {
          this.book = book;
          this.isLoading = false;
        }
      });
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }
}
