import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project {
  readonly name = input<string>('');
  readonly description = input<string>('');
  readonly imageUrl = input<string | undefined>(undefined);
  readonly githubUrl = input<string | undefined>(undefined);
  readonly liveUrl = input<string | undefined>(undefined);
}
