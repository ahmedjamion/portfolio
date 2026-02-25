import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Section } from '@shared/components/section/section.component';
import { Interests } from './interests/interests.component';
import { Technologies } from './technologies/technologies.component';
import { GlitchDirective } from '@shared/directives/glitch.directive';
import { HoverChaosDirective } from '@shared/directives/hover-chaos.directive';

@Component({
  selector: 'app-about',
  imports: [Section, Interests, Technologies, GlitchDirective, HoverChaosDirective],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}
