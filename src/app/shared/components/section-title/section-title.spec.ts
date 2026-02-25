import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionTitle } from './section-title.component';

describe('SectionTitle', () => {
  let component: SectionTitle;
  let fixture: ComponentFixture<SectionTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionTitle);
    fixture.componentRef.setInput('text', 'Test Title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
