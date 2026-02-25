import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIcons } from '@ng-icons/core';
import { ICONS } from '../../../core/icons/icons';
import { ContactItem } from './contact-item.component';

describe('ContactItem', () => {
  let component: ContactItem;
  let fixture: ComponentFixture<ContactItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactItem],
      providers: [provideIcons(ICONS)],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactItem);
    fixture.componentRef.setInput('text', 'test@example.com');
    fixture.componentRef.setInput('iconName', 'email');
    fixture.componentRef.setInput('iconSize', '24');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
