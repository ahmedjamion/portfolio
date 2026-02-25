import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIcons } from '@ng-icons/core';
import { ICONS } from '../../../../core/icons/icons';
import { Technology } from './technology.component';

describe('Technology', () => {
  let component: Technology;
  let fixture: ComponentFixture<Technology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Technology],
      providers: [provideIcons(ICONS)],
    }).compileComponents();

    fixture = TestBed.createComponent(Technology);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'Angular');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
