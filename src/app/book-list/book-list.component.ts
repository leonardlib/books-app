import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books!: Book[];
  isLoading: boolean;

  constructor(private bookService: BookService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(({ data }) => {
      this.books = data;
      this.isLoading = false;
    });
  }

  onScroll(): void {
    if (this.books.length < 50) {
      this.isLoading = true;
      this.bookService.getBooks().subscribe(({data}) => {
        this.books = [
          ...this.books,
          ...data,
        ];
        this.isLoading = false;
      });
    }
  }
}
