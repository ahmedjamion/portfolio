import { ChangeDetectionStrategy, Component, input, computed } from '@angular/core';
import { Icon } from '../../../../shared/components/icon/icon';
import { getIconName } from '../../../../core/configs/icon-map';

@Component({
  selector: 'app-technology',
  imports: [Icon],
  templateUrl: './technology.html',
  styleUrl: './technology.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Technology {
  readonly name = input.required<string>();

  readonly iconName = computed(() => getIconName(this.name()));
}
