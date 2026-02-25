import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CrtOverlayComponent } from './crt-overlay/crt-overlay.component';
import { MatrixRainComponent } from './matrix-rain/matrix-rain.component';
import { FloatingDebrisComponent } from './floating-debris/floating-debris.component';
import { MouseTrailComponent } from './mouse-trail/mouse-trail.component';
import { ClickExplosionComponent } from './click-explosion/click-explosion.component';
import { ChaosEventsComponent } from './chaos-events/chaos-events.component';
import { NoiseOverlayComponent } from './noise-overlay/noise-overlay.component';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

@Component({
  selector: 'app-chaos',
  standalone: true,
  imports: [
    CrtOverlayComponent,
    MatrixRainComponent,
    FloatingDebrisComponent,
    MouseTrailComponent,
    ClickExplosionComponent,
    ChaosEventsComponent,
    NoiseOverlayComponent,
  ],
  template: `
    <app-noise-overlay />
    <app-crt-overlay />
    <app-matrix-rain />
    <app-floating-debris />
    <app-mouse-trail />
    <app-click-explosion />
    <app-chaos-events />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChaosComponent implements OnInit, OnDestroy {
  private chaos = inject(ChaosService);

  ngOnInit() {
    this.triggerStartupSequence();
    this.chaos.startChaos();
  }

  ngOnDestroy() {
    this.chaos.stopChaos();
  }

  private triggerStartupSequence() {
    let step = 0;
    
    const sequence = setInterval(() => {
      step++;
      
      switch(step) {
        case 1:
          document.body.classList.add('screen-flash');
          setTimeout(() => document.body.classList.remove('screen-flash'), 100);
          break;
        case 2:
          document.body.classList.add('invert-chaos');
          setTimeout(() => document.body.classList.remove('invert-chaos'), 150);
          break;
        case 3:
          document.body.classList.add('screen-shake');
          setTimeout(() => document.body.classList.remove('screen-shake'), 300);
          break;
        case 4:
          document.body.classList.add('invert-chaos');
          setTimeout(() => document.body.classList.remove('invert-chaos'), 100);
          break;
        case 5:
          document.body.classList.add('screen-flash');
          setTimeout(() => document.body.classList.remove('screen-flash'), 50);
          break;
        case 6:
          document.body.classList.add('screen-shake');
          setTimeout(() => document.body.classList.remove('screen-shake'), 200);
          break;
        case 7:
          clearInterval(sequence);
          break;
      }
    }, 200);
  }
}
