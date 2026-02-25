import { Injectable, signal } from '@angular/core';
import { Framework } from '../../models/framework';
import { FRAMEWORKS } from '../../data/frameworks';

/**
 * Service that provides access to frameworks and libraries data.
 *
 * Using signals to make the data reactive. The .asReadonly() ensures
 * components can read but not modify the data directly.
 */
@Injectable({
  providedIn: 'root',
})
export class FrameworkService {
  // Store frameworks in a private signal, exposed as readonly
  private readonly _frameworks = signal<Framework[]>(FRAMEWORKS);

  // Public readonly version of the signal
  readonly frameworks = this._frameworks.asReadonly();
}
