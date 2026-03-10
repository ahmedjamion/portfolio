import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  imports: [],
  templateUrl: './header-logo.html',
  styleUrl: './header-logo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'h-full' },
})
export class HeaderLogo {}
