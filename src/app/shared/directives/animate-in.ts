import { Directive, Input, afterNextRender, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnimateIn]',
  standalone: true,
})
export class AnimateIn {
  @Input() animationDelay = 0;

  private readonly el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.classList.add('animate-hidden');

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.el.nativeElement.classList.remove('animate-out', 'animate-hidden');
              setTimeout(() => {
                this.el.nativeElement.classList.add('animate-in');
              }, this.animationDelay);
            } else {
              this.el.nativeElement.classList.remove('animate-in');
              this.el.nativeElement.classList.add('animate-out');
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(this.el.nativeElement);
    });
  }
}
