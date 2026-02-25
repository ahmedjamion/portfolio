import { Directive, ElementRef, inject, OnInit, OnDestroy, Input } from '@angular/core';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

@Directive({
  selector: '[appGlitch]',
  standalone: true,
})
export class GlitchDirective implements OnInit, OnDestroy {
  @Input() appGlitch: 'mild' | 'intense' = 'mild';
  @Input() glitchDelay = 3000;
  @Input() glitchChance = 0.3;
  
  private chaos = inject(ChaosService);
  private interval: ReturnType<typeof setInterval> | null = null;
  private originalText = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.originalText = this.el.nativeElement.textContent;
    this.startGlitching();
    
    this.el.nativeElement.addEventListener('mouseenter', () => {
      if (this.chaos.isAudioEnabled()) {
        this.chaos.playHoverSound();
      }
      this.triggerGlitch();
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private startGlitching() {
    this.interval = setInterval(() => {
      if (Math.random() < this.glitchChance) {
        this.triggerGlitch();
      }
    }, this.glitchDelay);
  }

  private triggerGlitch() {
    const el = this.el.nativeElement;
    const isIntense = this.appGlitch === 'intense';
    
    el.classList.add(isIntense ? 'glitch-intense' : 'glitch');
    el.setAttribute('data-text', this.originalText);
    
    if (isIntense) {
      this.randomizeText();
    }
    
    setTimeout(() => {
      el.classList.remove('glitch', 'glitch-intense');
    }, isIntense ? 300 : 500);
  }

  private randomizeText() {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const el = this.el.nativeElement;
    const original = this.originalText;
    
    let iterations = 0;
    const maxIterations = 5;
    
    const interval = setInterval(() => {
      el.textContent = original.split('').map((char: string, i: number) => {
        if (i < iterations) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      
      iterations++;
      if (iterations > maxIterations) {
        clearInterval(interval);
        el.textContent = original;
      }
    }, 50);
  }
}
