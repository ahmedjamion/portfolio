import { Component, inject } from '@angular/core';
import { ThemePreference, ThemeService } from '../../../core/services/theme-service/theme-service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-theme-selector',
  imports: [Icon],
  templateUrl: './theme-selector.html',
  styleUrl: './theme-selector.css',
})
export class ThemeSelector {
  protected readonly themeService = inject(ThemeService);
  protected readonly currentPref = this.themeService.preference;

  protected readonly options: { label: string; value: ThemePreference }[] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'System', value: 'system' },
  ];
}
