import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-icon',
  imports: [NgIcon],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center',
  },
})
export class Icon {
  readonly name = input.required<string>();
  readonly size = input<string>('24');
  readonly color = input<string>('');
  readonly strokeWidth = input<string | undefined>(undefined);
}
