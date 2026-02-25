import { Directive, ElementRef, inject, OnInit } from '@angular/core';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

@Directive({
  selector: '[appHoverChaos]',
  standalone: true,
})
export class HoverChaosDirective implements OnInit {
  private chaos = inject(ChaosService);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('hover-chaos');
    
    this.el.nativeElement.addEventListener('mouseenter', () => {
      if (this.chaos.isAudioEnabled()) {
        this.chaos.playHoverSound();
      }
      this.randomTransform();
    });
    
    this.el.nativeElement.addEventListener('click', () => {
      if (this.chaos.isAudioEnabled()) {
        this.chaos.playClickSound();
      }
    });
  }

  private randomTransform() {
    const el = this.el.nativeElement;
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const rot = (Math.random() - 0.5) * 10;
    
    el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
    
    setTimeout(() => {
      el.style.transform = '';
    }, 200);
  }
}
