import { Component, input } from '@angular/core';
import { Icon } from '../../../icon/icon';

@Component({
  selector: 'app-header-social-links-item',
  imports: [Icon],
  templateUrl: './header-social-links-item.html',
  styleUrl: './header-social-links-item.css',
})
export class HeaderSocialLinksItem {
  readonly iconName = input.required<string>();
  readonly iconSize = input<string>('');
  readonly iconColor = input<string>('');
  readonly url = input.required<string>();
}
