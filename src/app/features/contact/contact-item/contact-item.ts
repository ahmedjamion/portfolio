import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';

@Component({
  selector: 'app-contact-item',
  imports: [Icon],
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactItem {
  readonly text = input.required<string>();
  readonly iconName = input.required<string>();
  readonly iconSize = input.required<string>();
  readonly isEmail = input<boolean>(false);
}
