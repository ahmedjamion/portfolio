import { Injectable, signal } from '@angular/core';
import { Framework } from '../../models/framework';

@Injectable({
  providedIn: 'root',
})
export class FrameworkService {
  private readonly _frameworks = signal<Framework[]>([
    { name: 'Flutter' },
    { name: 'Angular' },
    { name: 'Laravel' },
    { name: 'Jetpack Compose' },
    { name: 'Tailwind' },
  ]);

  readonly frameworks = this._frameworks.asReadonly();
}
