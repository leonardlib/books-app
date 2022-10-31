import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks();
  }
}
