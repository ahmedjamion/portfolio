import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderSocialLinksItem } from './header-social-links-item/header-social-links-item';

@Component({
  selector: 'app-header-social-links',
  imports: [HeaderSocialLinksItem],
  templateUrl: './header-social-links.html',
  styleUrl: './header-social-links.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSocialLinks {}
