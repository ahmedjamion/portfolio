import { Component, input } from '@angular/core';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-interest',
  imports: [Icon],
  templateUrl: './interest.html',
  styleUrl: './interest.css',
})
export class Interest {
  readonly name = input<string>('');
  readonly iconName = input<string>('');
  readonly iconSize = input<string>('');
  readonly iconColor = input<string>('');
}
