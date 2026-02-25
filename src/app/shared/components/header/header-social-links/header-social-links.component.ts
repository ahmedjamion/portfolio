import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderSocialLinksItem } from './header-social-links-item/header-social-links-item.component';

@Component({
  selector: 'app-header-social-links',
  imports: [HeaderSocialLinksItem],
  templateUrl: './header-social-links.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSocialLinks {}
