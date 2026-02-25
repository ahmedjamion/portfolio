import { Directive, Input, afterNextRender, inject, ElementRef } from '@angular/core';

/**
 * Animation directive that reveals elements when they scroll into view.
 *
 * How it works:
 * 1. Initially adds 'animate-hidden' class to hide the element
 * 2. Uses IntersectionObserver to watch for when element enters viewport
 * 3. When visible, removes hidden classes and adds 'animate-in' with optional delay
 * 4. When element leaves viewport, reverses the animation
 *
 * This creates a smooth "fade in" effect as users scroll down the page,
 * making the content feel more dynamic and engaging.
 *
 * @example
 * ```html
 * <div appAnimateIn>Content that fades in</div>
 * <div appAnimateIn [animationDelay]="200">Delayed fade in</div>
 * ```
 */
@Directive({
  selector: '[appAnimateIn]',
  standalone: true,
})
export class AnimateIn {
  /**
   * Delay in milliseconds before the animation starts.
   * Useful for staggering animations of multiple elements.
   * Default: 0 (no delay)
   */
  @Input() animationDelay = 0;

  // Reference to the DOM element this directive is applied to
  private readonly el = inject(ElementRef);

  constructor() {
    // Start with the element hidden
    this.el.nativeElement.classList.add('animate-hidden');

    // Wait for initial render to complete before setting up the observer
    // This ensures the element exists in the DOM
    afterNextRender(() => {
      // Create an IntersectionObserver to detect when element is visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Element is now visible - start the reveal animation
              // First remove any existing animation classes
              this.el.nativeElement.classList.remove('animate-out', 'animate-hidden');

              // Then add the entrance animation after the specified delay
              setTimeout(() => {
                this.el.nativeElement.classList.add('animate-in');
              }, this.animationDelay);
            } else {
              // Element is no longer visible - reverse the animation
              // This allows the animation to replay when user scrolls back
              this.el.nativeElement.classList.remove('animate-in');
              this.el.nativeElement.classList.add('animate-out');
            }
          });
        },
        { threshold: 0.1 }, // Trigger when 10% of element is visible
      );

      // Start observing the element
      observer.observe(this.el.nativeElement);
    });
  }
}
