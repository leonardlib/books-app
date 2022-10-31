import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { initialState } from '../app.reducer';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title and the wishlist link', () => {
    // arrange
    const links = fixture.nativeElement.querySelectorAll('a');

    // assert
    expect(links[0].textContent).toContain('Bookstore');
    expect(links[1].textContent).toContain('My Wishlist');
  });
});
