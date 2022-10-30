import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
  private modelChanged: Subject<string> = new Subject<string>();
  private subscription!: Subscription;
  private debounceTime: number = 500;
  searchText!: string;

  ngOnInit(): void {
    this.subscription = this.modelChanged
      .pipe(
        debounceTime(this.debounceTime),
      )
      .subscribe(() => {
        this.filterBooks();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filterBooks() {
    console.log('filter books');
  }

  inputChanged() {
    this.modelChanged.next(this.searchText);
  }
}
