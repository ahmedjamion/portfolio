import {
  ChangeDetectionStrategy,
  Component,
  signal,
  afterNextRender,
  ElementRef,
  viewChild,
  inject,
} from '@angular/core';

interface NavLink {
  label: string;
  href: string;
  id: string;
}

@Component({
  selector: 'app-header-nav',
  imports: [],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class HeaderNav {
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  isNavOpen = signal(false);
  activeSection = signal<string>('home');

  navLinks: NavLink[] = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const activeEntries = entries.filter((e) => e.isIntersecting);

          if (activeEntries.length > 0) {
            const active = activeEntries.reduce((prev, curr) =>
              curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev,
            );
            this.activeSection.set(active.target.id);
          }
        },
        {
          threshold: 0,
          rootMargin: '-30% 0px -70% 0px',
        },
      );

      this.navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) observer.observe(el);
      });
    });
  }

  onEscape() {
    this.closeNav();
  }

  toggleNav() {
    this.isNavOpen.update((isOpen) => !isOpen);
  }

  closeNav() {
    this.isNavOpen.set(false);
    console.log('');
  }
}
