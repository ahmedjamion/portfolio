import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { GlitchDirective } from '@shared/directives/glitch.directive';

/**
 * Footer component displayed at the bottom of every page.
 * Shows chaos messages and easter eggs.
 */
@Component({
  selector: 'app-footer',
  imports: [GlitchDirective],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  // Get current year dynamically
  readonly currentYear = computed(() => new Date().getFullYear());

  getRandomGlitchCount(): string {
    const counts = [0, 1, 2, 42, 69, 404, 666, 69420];
    return String(counts[Math.floor(Math.random() * counts.length)]);
  }
}
