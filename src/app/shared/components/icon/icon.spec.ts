import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIcons } from '@ng-icons/core';
import { ICONS } from '../../../core/icons/icons';
import { Icon } from './icon.component';

describe('Icon', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Icon],
      providers: [provideIcons(ICONS)],
    }).compileComponents();

    fixture = TestBed.createComponent(Icon);
    fixture.componentRef.setInput('name', 'menu');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
