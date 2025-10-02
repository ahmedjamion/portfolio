import { Component, input } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';

@Component({
  selector: 'app-contact-social-link',
  imports: [Icon],
  templateUrl: './contact-social-link.html',
  styleUrl: './contact-social-link.css',
})
export class ContactSocialLink {
  readonly text = input.required<string>();
  readonly url = input.required<string>();
  readonly iconName = input.required<string>();
  readonly iconSize = input<string>('24');
  readonly iconColor = input<string>('');
  readonly strokeWidth = input<string>('');
}
