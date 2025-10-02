import { Component, input } from '@angular/core';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-technology',
  imports: [Icon],
  templateUrl: './technology.html',
  styleUrl: './technology.css',
})
export class Technology {
  readonly name = input<string>('');
  readonly iconName = input<string>('');
  readonly iconSize = input<string>('');
  readonly iconColor = input<string>('');
}
