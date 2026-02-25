import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-icon',
  imports: [NgIcon],
  template: `<ng-icon
    [name]="name()"
    [size]="size()"
    [color]="color()"
    [strokeWidth]="strokeWidth()"
  />`,
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
