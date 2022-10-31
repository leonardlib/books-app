import { Component, Input } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book!: Book;
  @Input() isLoading: boolean;
  randomNumber = Math.floor(Math.random() * 100);

  constructor() {
    this.isLoading = false;
  }
}
