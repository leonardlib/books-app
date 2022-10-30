import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book!: Book;
  @Input() isLoading: boolean;
  randomNumber: number;

  constructor() {
    this.isLoading = false;
    this.randomNumber = Math.floor(Math.random() * 100);
  }
}