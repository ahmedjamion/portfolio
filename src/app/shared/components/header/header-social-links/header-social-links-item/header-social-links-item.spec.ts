import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIcons } from '@ng-icons/core';
import { ICONS } from '../../../../../core/icons/icons';
import { HeaderSocialLinksItem } from './header-social-links-item';

describe('HeaderSocialLinksItem', () => {
  let component: HeaderSocialLinksItem;
  let fixture: ComponentFixture<HeaderSocialLinksItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSocialLinksItem],
      providers: [provideIcons(ICONS)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSocialLinksItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('iconName', 'github');
    fixture.componentRef.setInput('url', 'https://github.com');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
