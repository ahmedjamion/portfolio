import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSocialLinksItem } from './header-social-links-item';

describe('HeaderSocialLinksItem', () => {
  let component: HeaderSocialLinksItem;
  let fixture: ComponentFixture<HeaderSocialLinksItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSocialLinksItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSocialLinksItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
