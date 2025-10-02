import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSocialLink } from './contact-social-link';

describe('ContactSocialLink', () => {
  let component: ContactSocialLink;
  let fixture: ComponentFixture<ContactSocialLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSocialLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSocialLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
