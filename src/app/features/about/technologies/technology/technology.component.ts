import { ChangeDetectionStrategy, Component, input, computed } from '@angular/core';
import { Icon } from '@shared/components/icon/icon.component';
import { getIconName } from '@core/configs/icon-map';
import { GlitchDirective } from '@shared/directives/glitch.directive';
import { HoverChaosDirective } from '@shared/directives/hover-chaos.directive';

@Component({
  selector: 'app-technology',
  imports: [Icon, GlitchDirective, HoverChaosDirective],
  templateUrl: './technology.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Technology {
  readonly name = input.required<string>();

  readonly iconName = computed(() => getIconName(this.name()));
}
