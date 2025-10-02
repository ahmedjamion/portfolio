import { Component } from '@angular/core';
import { HeaderNav } from './header-nav/header-nav';
import { HeaderLogo } from './header-logo/header-logo';
import { HeaderSocialLinks } from './header-social-links/header-social-links';

@Component({
  selector: 'app-header',
  imports: [HeaderNav, HeaderLogo, HeaderSocialLinks],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
