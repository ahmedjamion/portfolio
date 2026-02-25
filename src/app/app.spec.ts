import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideIcons } from '@ng-icons/core';
import { App } from './app';
import { ICONS } from './core/icons/icons';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideIcons(ICONS)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render header, footer, and all sections', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Check that all main components are rendered
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
    expect(compiled.querySelector('app-home')).toBeTruthy();
    expect(compiled.querySelector('app-about')).toBeTruthy();
    expect(compiled.querySelector('app-projects')).toBeTruthy();
    expect(compiled.querySelector('app-contact')).toBeTruthy();
  });
});
