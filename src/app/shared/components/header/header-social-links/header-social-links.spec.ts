import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSocialLinks } from './header-social-links';

describe('HeaderSocialLinks', () => {
  let component: HeaderSocialLinks;
  let fixture: ComponentFixture<HeaderSocialLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSocialLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSocialLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
