import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '@shared/components/icon/icon.component';
import { GlitchDirective } from '@shared/directives/glitch.directive';
import { HoverChaosDirective } from '@shared/directives/hover-chaos.directive';

@Component({
  selector: 'app-interest',
  imports: [Icon, GlitchDirective, HoverChaosDirective],
  templateUrl: './interest.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Interest {
  readonly name = input<string>('');
  readonly iconName = input<string>('');
  readonly iconSize = input<string>('');
  readonly iconColor = input<string>('');
}
