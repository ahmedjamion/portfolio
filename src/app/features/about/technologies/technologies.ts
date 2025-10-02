import { Component, inject } from '@angular/core';
import { Technology } from './technology/technology';
import { LanguageService } from '../../../core/services/language-service/language-service';
import { FrameworkService } from '../../../core/services/framework-service/framework-service';
import { ConceptService } from '../../../core/services/concept-service/concept-service';
import { Concept } from './concept/concept';

@Component({
  selector: 'app-technologies',
  imports: [Technology, Concept],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies {
  private readonly languageService = inject(LanguageService);
  private readonly frameworkService = inject(FrameworkService);
  private readonly conceptService = inject(ConceptService);

  languages = this.languageService.languages;
  frameworks = this.frameworkService.frameworks;
  concepts = this.conceptService.concepts;
}
