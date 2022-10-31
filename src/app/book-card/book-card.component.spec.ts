import { formatDate } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { BookCardComponent } from './book-card.component';
import { Book } from '../book.model';
import { initialState } from '../app.reducer';
import { TruncatePipe } from '../truncate.pipe';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;
  const book: Book = {
    title: "Alice. 'Come on.",
    author: 'Gunnar Emmerich',
    genre: 'Sed',
    description:
      "King said to herself. Imagine her surprise, when the Rabbit came up to the Gryphon. 'How the creatures order one about, and called out 'The Queen! The Queen!' and the Queen said to one of the words.",
    isbn: '9793420397669',
    image: 'http://placeimg.com/480/640/any',
    published: '1979-03-04',
    publisher: 'Repellendus Pariatur',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookCardComponent, TruncatePipe],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = book;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the book attributes', () => {
    // arrange
    const truncatePipe = new TruncatePipe();
    const description = truncatePipe.transform(book.description);
    const published = formatDate(book.published, 'mediumDate', 'en');
    const author = fixture.nativeElement.querySelector('h1');
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
    const button = fixture.nativeElement.querySelector('button');
    const a = fixture.nativeElement.querySelector('a');

    // assert
    expect(author.textContent).toContain(book.author);
    expect(paragraphs[0].textContent).toContain(book.genre);
    expect(paragraphs[1].textContent).toContain(book.title);
    expect(paragraphs[2].textContent).toContain(description);
    expect(button.textContent).toContain('Add');
    expect(a.textContent).toContain('Details');
    expect(paragraphs[3].textContent).toContain(book.isbn);
    expect(paragraphs[4].textContent).toContain(published);
  });
});
