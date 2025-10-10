import { Component, signal } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-header-nav',
  imports: [Icon],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.css',
})
export class HeaderNav {
  isNavOpen = signal(false);

  toggleNav() {
    this.isNavOpen.update((isOpen) => !isOpen);
  }

  closeNav() {
    this.isNavOpen.set(false);
  }

  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
}
