import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { getConceptColor } from '@core/configs/concept-colors';
import { GlitchDirective } from '@shared/directives/glitch.directive';
import { HoverChaosDirective } from '@shared/directives/hover-chaos.directive';

@Component({
  selector: 'app-concept',
  imports: [GlitchDirective, HoverChaosDirective],
  templateUrl: './concept.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Concept {
  readonly name = input.required<string>();

  readonly color = computed(() => getConceptColor(this.name()));
}
