import { Component, input } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';

@Component({
  selector: 'app-project',
  imports: [Icon],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  readonly name = input<string>('');
  readonly description = input<string>('');
  readonly imageUrl = input<string | undefined>(undefined);
  readonly githubUrl = input<string | undefined>(undefined);
}
