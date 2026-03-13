import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderNav } from './header-nav/header-nav';
import { HeaderLogo } from './header-logo/header-logo';

@Component({
  selector: 'app-header',
  imports: [HeaderNav, HeaderLogo],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
