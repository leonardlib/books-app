import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../book.model';
import { addToWishlist, removeFromWishlist } from '../app.actions';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  @Input() book!: Book;
  @Input() isLoading: boolean;
  @Input() withDetails: boolean;
  @Input() canBeDeleted: boolean;
  randomNumber = Math.floor(Math.random() * 100);

  constructor(private store: Store) {
    this.isLoading = false;
    this.withDetails = false;
    this.canBeDeleted = false;
  }

  addToWishlist(): void {
    this.store.dispatch(addToWishlist({ book: this.book }));
  }

  removeFromWishlist(): void {
    this.store.dispatch(removeFromWishlist({ book: this.book }));
  }
}
