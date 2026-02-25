import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

interface Debris {
  id: number;
  x: number;
  size: number;
  shape: 'square' | 'triangle' | 'circle' | 'line';
  color: string;
  rotation: number;
  duration: number;
  delay: number;
}

@Component({
  selector: 'app-floating-debris',
  standalone: true,
  template: `
    <div class="floating-debris">
      @for (debris of debrisList(); track debris.id) {
        <div 
          class="debris"
          [style.left.%]="debris.x"
          [style.width.px]="debris.size"
          [style.height.px]="debris.size"
          [style.background]="debris.color"
          [style.border-radius]="debris.shape === 'circle' ? '50%' : debris.shape === 'triangle' ? '0' : '2px'"
          [style.clip-path]="debris.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'"
          [style.animation-duration.s]="debris.duration"
          [style.animation-delay.s]="debris.delay"
          [style.transform]="'rotate(' + debris.rotation + 'deg)'"
        ></div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingDebrisComponent implements OnInit, OnDestroy {
  private chaos = inject(ChaosService);
  debrisList = signal<Debris[]>([]);
  private interval: ReturnType<typeof setInterval> | null = null;
  private idCounter = 0;

  private colors = ['#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#9d00ff', '#ff0040'];

  ngOnInit() {
    this.spawnInitialDebris();
    this.interval = setInterval(() => this.spawnDebris(), 500);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private spawnInitialDebris() {
    for (let i = 0; i < 20; i++) {
      this.spawnDebris();
    }
  }

  private spawnDebris() {
    const shapes: ('square' | 'triangle' | 'circle' | 'line')[] = ['square', 'triangle', 'circle', 'line'];
    
    const debris: Debris = {
      id: this.idCounter++,
      x: Math.random() * 100,
      size: Math.random() * 20 + 5,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      rotation: Math.random() * 360,
      duration: Math.random() * 10 + 10,
      delay: 0,
    };
    
    this.debrisList.update(list => [...list.slice(-30), debris]);
  }
}
