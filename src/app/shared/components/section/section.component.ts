import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AnimateIn } from '@shared/directives/animate-in.directive';

/**
 * Reusable section wrapper component.
 * 
 * Provides consistent styling and animation for page sections.
 * The id input allows sections to be targeted by navigation links.
 */
@Component({
  selector: 'app-section',
  imports: [AnimateIn],
  templateUrl: './section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section {
  /**
   * The HTML id attribute for this section.
   * Used by navigation to highlight active section when scrolling.
   */
  readonly id = input<string | undefined>(undefined);
}
