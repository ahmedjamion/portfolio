import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollLink } from './scroll-link.component';

describe('ScrollLink', () => {
  let component: ScrollLink;
  let fixture: ComponentFixture<ScrollLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollLink],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollLink);
    fixture.componentRef.setInput('text', 'About');
    fixture.componentRef.setInput('sectionId', 'about');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
