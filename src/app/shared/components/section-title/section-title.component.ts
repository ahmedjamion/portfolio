import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitle {
  readonly text = input.required<string>();
}
