import { Injectable, signal } from '@angular/core';
import { Language } from '../../models/language';
import { LANGUAGES } from '../../data/languages';

/**
 * Service that provides access to programming languages data.
 *
 * Using signals to make the data reactive. The .asReadonly() ensures
 * components can read but not modify the data directly.
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Store languages in a private signal, exposed as readonly
  private readonly _languages = signal<Language[]>(LANGUAGES);

  // Public readonly version of the signal - components can subscribe/read but not modify
  readonly languages = this._languages.asReadonly();
}
