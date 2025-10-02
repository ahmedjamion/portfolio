import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLink } from './scroll-link';

describe('ScrollLink', () => {
  let component: ScrollLink;
  let fixture: ComponentFixture<ScrollLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
