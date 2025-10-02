import { Injectable, signal } from '@angular/core';
import { Concept } from '../../models/concept';

@Injectable({
  providedIn: 'root',
})
export class ConceptService {
  private readonly _concepts = signal<Concept[]>([
    { name: 'OOP', color: '#F28F16' },
    { name: 'MVC', color: '#6F77A6' },
    { name: 'MVVM', color: '#A4C639' },
  ]);

  readonly concepts = this._concepts.asReadonly();
}
