import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    // arrange
    const p = fixture.nativeElement.querySelector('p');

    // assert
    expect(p.textContent).toContain('Bookstore');
  });

  it('should render the wishlist link', () => {
    // arrange
    const a = fixture.nativeElement.querySelector('a');

    // assert
    expect(a.textContent).toContain('My Wishlist');
  });
});
