import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlitchDirective } from '@shared/directives/glitch.directive';

@Component({
  selector: 'app-header-logo',
  imports: [GlitchDirective],
  templateUrl: './header-logo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'h-full' },
})
export class HeaderLogo {}
