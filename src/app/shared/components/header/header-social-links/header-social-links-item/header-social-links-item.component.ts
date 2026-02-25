import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-header-social-links-item',
  imports: [Icon],
  templateUrl: './header-social-links-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSocialLinksItem {
  readonly iconName = input.required<string>();
  readonly iconSize = input<string>('');
  readonly iconColor = input<string>('');
  readonly url = input.required<string>();
}
