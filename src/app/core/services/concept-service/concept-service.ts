import { Injectable, signal } from '@angular/core';
import { Concept } from '../../models/concept';
import { CONCEPTS } from '../../data/concepts';

/**
 * Service that provides access to technical concepts data.
 *
 * Using signals to make the data reactive. The .asReadonly() ensures
 * components can read but not modify the data directly.
 */
@Injectable({
  providedIn: 'root',
})
export class ConceptService {
  // Store concepts in a private signal, exposed as readonly
  private readonly _concepts = signal<Concept[]>(CONCEPTS);

  // Public readonly version of the signal
  readonly concepts = this._concepts.asReadonly();
}
