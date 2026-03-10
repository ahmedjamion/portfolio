import { Injectable, signal } from '@angular/core';
import { Concept } from '../../models/concept';

@Injectable({
  providedIn: 'root',
})
export class ConceptService {
  private readonly _concepts = signal<Concept[]>([
    { name: 'OOP' },
    { name: 'MVC' },
    { name: 'MVVM' },
  ]);

  readonly concepts = this._concepts.asReadonly();
}
