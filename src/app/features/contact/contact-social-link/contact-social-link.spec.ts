import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIcons } from '@ng-icons/core';
import { ICONS } from '../../../core/icons/icons';
import { ContactSocialLink } from './contact-social-link.component';

describe('ContactSocialLink', () => {
  let component: ContactSocialLink;
  let fixture: ComponentFixture<ContactSocialLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSocialLink],
      providers: [provideIcons(ICONS)],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSocialLink);
    fixture.componentRef.setInput('text', 'GitHub');
    fixture.componentRef.setInput('url', 'https://github.com');
    fixture.componentRef.setInput('iconName', 'github');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
