import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateIn } from '@shared/directives/animate-in.directive';
import { GlitchDirective } from '@shared/directives/glitch.directive';
import { HoverChaosDirective } from '@shared/directives/hover-chaos.directive';

@Component({
  selector: 'app-home',
  imports: [AnimateIn, GlitchDirective, HoverChaosDirective],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
