import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy, signal, effect } from '@angular/core';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

@Component({
  selector: 'app-mouse-trail',
  standalone: true,
  template: `
    <div class="mouse-trail">
      @for (particle of particles(); track particle.id) {
        <div 
          class="trail-particle"
          [style.left.px]="particle.x"
          [style.top.px]="particle.y"
          [style.width.px]="particle.size"
          [style.height.px]="particle.size"
          [style.background]="particle.color"
          [style.box-shadow]="'0 0 10px ' + particle.color"
        ></div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MouseTrailComponent implements OnInit, OnDestroy {
  private chaos = inject(ChaosService);
  particles = signal<Particle[]>([]);
  private idCounter = 0;
  private colors = ['#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#9d00ff'];

  constructor() {
    effect(() => {
      const pos = this.chaos.mousePosition();
      if (this.chaos.isMouseMoving() && this.chaos.isAudioEnabled()) {
        this.addParticle(pos.x, pos.y);
      }
    });
  }

  ngOnInit() {
    document.addEventListener('mousemove', (e) => this.chaos.trackMouse(e));
    document.addEventListener('click', (e) => this.chaos.trackClick(e));
  }

  ngOnDestroy() {}

  private addParticle(x: number, y: number) {
    const particle: Particle = {
      id: this.idCounter++,
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      size: Math.random() * 6 + 2,
    };
    
    this.particles.update(list => [...list.slice(-50), particle]);
    
    setTimeout(() => {
      this.particles.update(list => list.filter(p => p.id !== particle.id));
    }, 500);
  }
}
