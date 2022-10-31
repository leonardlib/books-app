import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { Store } from '@ngrx/store';
import { filterBooks } from '../book.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
  private modelChanged: Subject<string> = new Subject<string>();
  private subscription!: Subscription;
  private debounceTime = 500;
  searchText!: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.subscription = this.modelChanged
      .pipe(debounceTime(this.debounceTime))
      .subscribe(() => {
        this.store.dispatch(filterBooks({ searchText: this.searchText }));
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  inputChanged() {
    this.modelChanged.next(this.searchText);
  }
}
