import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderNav } from './header-nav/header-nav.component';
import { HeaderLogo } from './header-logo/header-logo.component';
import { HeaderSocialLinks } from './header-social-links/header-social-links.component';

@Component({
  selector: 'app-header',
  imports: [HeaderNav, HeaderLogo, HeaderSocialLinks],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
