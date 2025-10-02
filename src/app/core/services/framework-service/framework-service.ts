import { Injectable, signal } from '@angular/core';
import { Framework } from '../../models/framework';

@Injectable({
  providedIn: 'root',
})
export class FrameworkService {
  private readonly _frameworks = signal<Framework[]>([
    { name: 'Flutter', iconName: 'flutter', iconSize: '32' },
    { name: 'Angular', iconName: 'angular', iconSize: '32' },
    { name: 'Laravel', iconName: 'laravel', iconSize: '32' },
    { name: 'Jetpack Compose', iconName: 'compose', iconSize: '32' },
    { name: 'Tailwind', iconName: 'tailwind', iconSize: '32' },
  ]);

  readonly frameworks = this._frameworks.asReadonly();
}
