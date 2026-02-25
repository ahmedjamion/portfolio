import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

interface FakeError {
  id: number;
  message: string;
  type: 'error' | 'warning' | 'info';
}

@Component({
  selector: 'app-chaos-events',
  standalone: true,
  template: `
    @if (showWarning()) {
      <div class="warning-overlay"></div>
    }
    
    @for (error of fakeErrors(); track error.id) {
      <div class="fake-error" [class.error-red]="error.type === 'error'" [class.error-yellow]="error.type === 'warning'">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xl">⚠️</span>
          <span class="text-[#ff0040] font-bold">SYSTEM ERROR</span>
        </div>
        <p class="text-gray-300">{{ error.message }}</p>
        <button 
          (click)="dismissError(error.id)"
          class="mt-4 px-4 py-1 bg-[#ff0040] text-white text-sm hover:bg-[#cc0033]"
        >
          ACKNOWLEDGE
        </button>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .error-red {
      border-color: #ff0040;
      box-shadow: 0 0 20px #ff0040, inset 0 0 20px rgba(255, 0, 64, 0.1);
    }
    .error-yellow {
      border-color: #ffff00;
      box-shadow: 0 0 20px #ffff00, inset 0 0 20px rgba(255, 255, 0, 0.1);
    }
    .error-yellow .text-\\[\\#ff0040\\] {
      color: #ffff00 !important;
    }
  `]
})
export class ChaosEventsComponent implements OnInit, OnDestroy {
  private chaos = inject(ChaosService);
  showWarning = signal(false);
  fakeErrors = signal<FakeError[]>([]);
  private idCounter = 0;
  private interval: ReturnType<typeof setInterval> | null = null;

  private errorMessages = [
    'MEMORY CORRUPTION DETECTED',
    'UNAUTHORIZED ACCESS ATTEMPT',
    'FIREWALL BREACH IN PROGRESS',
    'KERNEL PANIC: SYSTEM COMPROMISED',
    'DATA STREAM INTERRUPTED',
    'PROTOCOL VIOLATION DETECTED',
    'HARDWARE MALFUNCTION IMMINENT',
    'SECURITY CERTIFICATE EXPIRED',
    'BUFFER OVERFLOW DETECTED',
    'ROOT ACCESS REQUEST DENIED',
  ];

  ngOnInit() {
    this.interval = setInterval(() => {
      if (Math.random() < 0.1) {
        this.triggerRandomEvent();
      }
    }, 2000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private triggerRandomEvent() {
    const events = [
      () => this.triggerScreenFlash(),
      () => this.triggerWarning(),
      () => this.triggerFakeError(),
      () => this.triggerRandomInvert(),
    ];
    
    const event = events[Math.floor(Math.random() * events.length)];
    event();
  }

  private triggerScreenFlash() {
    document.body.classList.add('screen-flash');
    this.chaos.playNoiseHit();
    setTimeout(() => {
      document.body.classList.remove('screen-flash');
    }, 100);
  }

  private triggerWarning() {
    this.showWarning.set(true);
    this.chaos.playRandomAlert();
    setTimeout(() => {
      this.showWarning.set(false);
    }, 500);
  }

  private triggerFakeError() {
    const error: FakeError = {
      id: this.idCounter++,
      message: this.errorMessages[Math.floor(Math.random() * this.errorMessages.length)],
      type: Math.random() > 0.5 ? 'error' : 'warning',
    };
    
    this.chaos.playNoiseHit();
    this.fakeErrors.update(list => [...list, error]);
    
    if (this.fakeErrors().length > 3) {
      this.fakeErrors.update(list => list.slice(1));
    }
  }

  private triggerRandomInvert() {
    document.body.classList.add('invert-chaos');
    this.chaos.playNoiseHit();
    setTimeout(() => {
      document.body.classList.remove('invert-chaos');
    }, 150);
  }

  dismissError(id: number) {
    this.fakeErrors.update(list => list.filter(e => e.id !== id));
    this.chaos.playClickSound();
  }
}
