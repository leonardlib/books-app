import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectWishlist } from '../app.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  booksNumber!: number;
  wishlistSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.wishlistSubscription = this.store
      .select(selectWishlist)
      .subscribe((data) => {
        this.booksNumber = data.items.length;
      });
  }

  ngOnDestroy(): void {
    this.wishlistSubscription.unsubscribe();
  }
}
