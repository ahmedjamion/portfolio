import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Icon } from '../../../shared/components/icon/icon';

@Component({
  selector: 'app-project',
  imports: [Icon, NgOptimizedImage],
  templateUrl: './project.html',
  styleUrl: './project.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project {
  readonly name = input<string>('');
  readonly description = input<string>('');
  readonly imageUrl = input<string | undefined>(undefined);
  readonly githubUrl = input<string | undefined>(undefined);
}
