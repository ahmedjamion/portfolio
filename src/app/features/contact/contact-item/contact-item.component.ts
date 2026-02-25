import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-contact-item',
  imports: [Icon],
  templateUrl: './contact-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactItem {
  readonly text = input.required<string>();
  readonly iconName = input.required<string>();
  readonly iconSize = input.required<string>();
}
