import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { getConceptColor } from '../../../../core/configs/concept-colors';

@Component({
  selector: 'app-concept',
  imports: [],
  templateUrl: './concept.html',
  styleUrl: './concept.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Concept {
  readonly name = input.required<string>();

  readonly color = computed(() => getConceptColor(this.name()));
}
