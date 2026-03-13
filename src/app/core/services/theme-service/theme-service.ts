import {
  computed,
  DOCUMENT,
  effect,
  inject,
  Injectable,
  RendererFactory2,
  signal,
} from '@angular/core';

export type ActiveTheme = 'light' | 'dark';
export type ThemePreference = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly rendererFactory = inject(RendererFactory2);
  private readonly renderer = this.rendererFactory.createRenderer(null, null);

  // The user's explicit preference
  readonly preference = signal<ThemePreference>(this.getSavedPreference());

  // A signal representing the system's current dark mode status
  private readonly systemDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  private readonly isSystemDark = signal<boolean>(this.systemDarkQuery.matches);

  // Derived state: The actual theme to apply
  readonly activeTheme = computed<ActiveTheme>(() => {
    const pref = this.preference();
    if (pref === 'system') {
      return this.isSystemDark() ? 'dark' : 'light';
    }
    return pref;
  });

  constructor() {
    // Listen for OS-level theme changes
    this.systemDarkQuery.addEventListener('change', (e) => {
      this.isSystemDark.set(e.matches);
    });

    // Reactively sync the activeTheme to the DOM
    effect(() => {
      const active = this.activeTheme();
      const pref = this.preference();

      this.syncHtmlClass(active);
      localStorage.setItem('user-theme-preference', pref);
    });
  }

  setPreference(newPref: ThemePreference): void {
    this.preference.set(newPref);
  }

  private syncHtmlClass(theme: ActiveTheme): void {
    const host = this.document.documentElement;
    if (theme === 'dark') {
      this.renderer.addClass(host, 'dark');
    } else {
      this.renderer.removeClass(host, 'dark');
    }
  }

  private getSavedPreference(): ThemePreference {
    const saved = localStorage.getItem('user-theme-preference') as ThemePreference | null;
    return saved ?? 'system';
  }
}
