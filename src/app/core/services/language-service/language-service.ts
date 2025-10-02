import { Injectable, signal } from '@angular/core';
import { Language } from '../../models/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly _languages = signal<Language[]>([
    { name: 'C++', iconName: 'cpp', iconSize: '32' },
    { name: 'Java', iconName: 'java', iconSize: '32' },
    { name: 'PHP', iconName: 'php', iconSize: '32' },
    { name: 'SQL', iconName: 'sql', iconSize: '32' },
    { name: 'HTML', iconName: 'html', iconSize: '32' },
    { name: 'CSS', iconName: 'css', iconSize: '32' },
    { name: 'Javascript', iconName: 'js', iconSize: '32' },
    { name: 'Dart', iconName: 'dart', iconSize: '32' },
    { name: 'Typescript', iconName: 'ts', iconSize: '32' },
    { name: 'Kotlin', iconName: 'kotlin', iconSize: '32' },
  ]);

  readonly languages = this._languages.asReadonly();
}
