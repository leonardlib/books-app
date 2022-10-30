import { Component } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  public books: Book[] = [
    {
      title: 'Alice. \'Come on.',
      author: 'Gunnar Emmerich',
      genre: 'Sed',
      description: 'King said to herself. Imagine her surprise, when the Rabbit came up to the Gryphon. \'How the creatures order one about, and called out \'The Queen! The Queen!\' and the Queen said to one of the words.',
      isbn: '9793420397669',
      image: 'http://placeimg.com/480/640/any',
      published: '1979-03-04',
      publisher: 'Repellendus Pariatur',
    }
  ];
}
