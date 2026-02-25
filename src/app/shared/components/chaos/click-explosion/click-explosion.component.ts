import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy, signal, effect } from '@angular/core';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

interface Explosion {
  id: number;
  x: number;
  y: number;
  particles: ExplosionParticle[];
}

interface ExplosionParticle {
  id: number;
  tx: number;
  ty: number;
  color: string;
}

@Component({
  selector: 'app-click-explosion',
  standalone: true,
  template: `
    <div class="click-explosion">
      @for (explosion of explosions(); track explosion.id) {
        <div 
          class="explosion-origin"
          [style.left.px]="explosion.x"
          [style.top.px]="explosion.y"
        >
          @for (particle of explosion.particles; track particle.id) {
            <div 
              class="explosion-particle"
              [style.--tx.px]="particle.tx"
              [style.--ty.px]="particle.ty"
              [style.background]="particle.color"
            ></div>
          }
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .explosion-origin {
      position: absolute;
      width: 1px;
      height: 1px;
    }
  `]
})
export class ClickExplosionComponent implements OnInit, OnDestroy {
  private chaos = inject(ChaosService);
  explosions = signal<Explosion[]>([]);
  private idCounter = 0;
  private colors = ['#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#9d00ff', '#ff0040'];

  constructor() {
    effect(() => {
      const pos = this.chaos.lastClickPosition();
      if (this.chaos.isClicking()) {
        this.createExplosion(pos.x, pos.y);
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  private createExplosion(x: number, y: number) {
    const particleCount = 20;
    const particles: ExplosionParticle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const distance = Math.random() * 100 + 50;
      
      particles.push({
        id: i,
        tx: Math.cos(angle) * distance + (Math.random() - 0.5) * 50,
        ty: Math.sin(angle) * distance + (Math.random() - 0.5) * 50,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
      });
    }
    
    const explosion: Explosion = {
      id: this.idCounter++,
      x,
      y,
      particles,
    };
    
    this.explosions.update(list => [...list, explosion]);
    
    setTimeout(() => {
      this.explosions.update(list => list.filter(e => e.id !== explosion.id));
    }, 500);
  }
}
