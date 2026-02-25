import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Section } from '@shared/components/section/section.component';
import { GlitchDirective } from '@shared/directives/glitch.directive';
import { HoverChaosDirective } from '@shared/directives/hover-chaos.directive';

@Component({
  selector: 'app-contact',
  imports: [Section, GlitchDirective, HoverChaosDirective],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {}
