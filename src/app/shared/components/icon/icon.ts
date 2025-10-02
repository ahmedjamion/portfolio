import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ICONS } from '../../../core/icons/icons';

@Component({
  selector: 'app-icon',
  imports: [NgIcon],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  host: {
    class: 'flex items-center',
  },
  providers: [provideIcons(ICONS)],
})
export class Icon {
  readonly name = input.required<string>();
  readonly size = input<string>('24');
  readonly color = input<string>('');
  readonly strokeWidth = input<string | undefined>(undefined);
}
