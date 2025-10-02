import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-concept',
  imports: [],
  templateUrl: './concept.html',
  styleUrl: './concept.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Concept {
  readonly name = input.required<string>();
  readonly color = input.required<string>();
}
