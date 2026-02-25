import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

@Component({
  selector: 'app-crt-overlay',
  standalone: true,
  template: `
    <div class="crt-overlay">
      <div class="crt-scanlines"></div>
      <div class="crt-flicker"></div>
      <div class="crt-rgb-split"></div>
      <div class="crt-curvature"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrtOverlayComponent implements OnInit, OnDestroy {
  private chaos = inject(ChaosService);
  private flickerInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.flickerInterval = setInterval(() => {
      if (Math.random() < 0.2) {
        document.querySelector('.crt-flicker')?.classList.add('strobe');
        setTimeout(() => {
          document.querySelector('.crt-flicker')?.classList.remove('strobe');
        }, 100);
      }
    }, 500);
  }

  ngOnDestroy() {
    if (this.flickerInterval) {
      clearInterval(this.flickerInterval);
    }
  }
}
