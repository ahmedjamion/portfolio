import { Injectable, signal } from '@angular/core';
import { Language } from '../../models/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly _languages = signal<Language[]>([
    { name: 'C++' },
    { name: 'Java' },
    { name: 'PHP' },
    { name: 'SQL' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Javascript' },
    { name: 'Dart' },
    { name: 'Typescript' },
    { name: 'Kotlin' },
  ]);

  readonly languages = this._languages.asReadonly();
}
