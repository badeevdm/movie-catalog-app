import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesFilter } from './movies-filter';

describe('MovieFilters', () => {
  let component: MoviesFilter;
  let fixture: ComponentFixture<MoviesFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
