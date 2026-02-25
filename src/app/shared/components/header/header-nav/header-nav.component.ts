import {
  ChangeDetectionStrategy,
  Component,
  signal,
  afterNextRender,
  ElementRef,
  viewChild,
  DestroyRef,
  inject,
} from '@angular/core';
import { Icon } from '@shared/components/icon/icon.component';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { TitleCasePipe } from '@angular/common';

/**
 * Represents a single navigation link in the header.
 * Each link has a display label, href for the anchor, and id for tracking.
 */
interface NavLink {
  label: string;
  href: string;
  id: string;
}

/**
 * Header navigation component that displays the main site navigation.
 *
 * Features:
 * - Desktop navigation (visible on md screens and larger)
 * - Mobile hamburger menu with dropdown overlay
 * - Active section tracking using IntersectionObserver
 * - Keyboard accessibility (Escape closes mobile menu)
 *
 * The IntersectionObserver watches for which section is currently
 * visible in the viewport and updates the active section accordingly.
 * This provides visual feedback to users about where they are on the page.
 */
@Component({
  selector: 'app-header-nav',
  imports: [Icon, CdkConnectedOverlay, TitleCasePipe],
  templateUrl: './header-nav.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class HeaderNav {
  // Reference to the hamburger menu button for the overlay positioning
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  // Used to clean up the IntersectionObserver when component is destroyed
  private readonly destroyRef = inject(DestroyRef);

  // Store the observer so we can disconnect it later
  private readonly observer: IntersectionObserver;

  // Signal to track whether the mobile menu is open or closed
  isNavOpen = signal(false);

  // Signal to track which section is currently active/visible in viewport
  activeSection = signal<string>('home');

  // All navigation links for the site
  navLinks: NavLink[] = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  constructor() {
    // Create the IntersectionObserver
    // We create it here but set it up in afterNextRender to ensure DOM is ready
    this.observer = new IntersectionObserver(
      (entries) => {
        // Filter to only entries that are currently intersecting (visible)
        const activeEntries = entries.filter((e) => e.isIntersecting);

        if (activeEntries.length > 0) {
          // Find the entry closest to the top of the viewport
          // This gives us the "most visible" section
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

    // Use takeUntilDestroyed to clean up when component is destroyed
    // (though for a header that lives forever, this is more of a best practice)
    this.destroyRef.onDestroy(() => {
      this.observer.disconnect();
    });

    // Using afterNextRender to ensure DOM is ready before setting up the observer
    // This is needed because the sections may not exist yet during initial render
    afterNextRender(() => {
      // Start observing each section by its ID
      this.navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) this.observer.observe(el);
      });
    });
  }

  /**
   * Handle escape key press to close the mobile menu
   * This provides keyboard accessibility for closing the menu
   */
  onEscape() {
    this.closeNav();
  }

  /**
   * Toggle the mobile menu open/closed
   */
  toggleNav() {
    this.isNavOpen.update((isOpen) => !isOpen);
  }

  /**
   * Close the mobile menu
   */
  closeNav() {
    this.isNavOpen.set(false);
  }
}
