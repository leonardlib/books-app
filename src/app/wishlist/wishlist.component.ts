import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectWishlist } from '../app.selectors';
import { Book } from '../book.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
})
export class WishlistComponent {
  books!: ReadonlyArray<Book>;
  wishlistSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.wishlistSubscription = this.store
      .select(selectWishlist)
      .subscribe((data) => {
        this.books = data.items;
      });
  }

  ngOnDestroy(): void {
    this.wishlistSubscription.unsubscribe();
  }
}
