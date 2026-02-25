import { ChangeDetectionStrategy, Component, OnInit, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlitchDirective } from '@shared/directives/glitch.directive';

interface HackMessage {
  id: number;
  text: string;
  status: 'pending' | 'success' | 'error';
  delay: number;
}

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule, GlitchDirective],
  template: `
    <div class="splash-screen">
      <div class="splash-content">
        <!-- Glitchy title -->
        <h1 
          class="splash-title glitch" 
          data-text="SYSTEM BREACH"
          [appGlitch]="'intense'"
        >
          SYSTEM BREACH
        </h1>
        
        <!-- Progress bar -->
        <div class="progress-container">
          <div class="progress-bar" [style.width.%]="progress()"></div>
        </div>
        
        <!-- Status text -->
        <p class="status-text">{{ currentAction() }}</p>
        
        <!-- Messages list -->
        <div class="messages">
          @for (msg of messages(); track msg.id) {
            <p class="message" [class.success]="msg.status === 'success'" [class.error]="msg.status === 'error'">
              <span class="bracket">[</span>
              @if (msg.status === 'pending') {
                <span class="pending">...</span>
              } @else if (msg.status === 'success') {
                <span class="success">✓</span>
              } @else {
                <span class="error">✗</span>
              }
              <span class="bracket">]</span>
              {{ msg.text }}
            </p>
          }
        </div>
        
        <!-- Skip hint -->
        <p class="skip-hint" (click)="skip()">[ CLICK TO PROCEED ]</p>
      </div>
    </div>
  `,
  styles: [`
    .splash-screen {
      position: fixed;
      inset: 0;
      background: #050505;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Courier New', monospace;
    }
    
    .splash-content {
      width: 100%;
      max-width: 600px;
      padding: 2rem;
    }
    
    .splash-title {
      font-size: clamp(2rem, 8vw, 4rem);
      font-weight: 900;
      color: #ff0040;
      text-align: center;
      margin-bottom: 2rem;
      text-shadow: 
        0 0 10px #ff0040,
        0 0 20px #ff0040,
        0 0 40px #ff0040;
      animation: glitch 0.3s infinite;
    }
    
    @keyframes glitch {
      0%, 100% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(2px, -2px); }
      60% { transform: translate(-2px, -2px); }
      80% { transform: translate(2px, 2px); }
    }
    
    .progress-container {
      width: 100%;
      height: 20px;
      border: 2px solid #00ffff;
      margin-bottom: 1.5rem;
      position: relative;
      overflow: hidden;
    }
    
    .progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #ff00ff, #00ffff);
      transition: width 0.3s ease;
      box-shadow: 0 0 10px #00ffff;
    }
    
    .status-text {
      color: #00ffff;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .messages {
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid #1a1a2e;
      padding: 1rem;
      margin-bottom: 2rem;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .message {
      color: #888;
      font-size: 0.85rem;
      margin: 0.25rem 0;
      display: flex;
      gap: 0.5rem;
    }
    
    .message.success {
      color: #00ff00;
    }
    
    .message.error {
      color: #ff0040;
    }
    
    .bracket {
      color: #666;
    }
    
    .pending {
      color: #ffff00;
      animation: blink 0.5s infinite;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .skip-hint {
      text-align: center;
      color: #666;
      font-size: 0.8rem;
      cursor: pointer;
      animation: pulse 1s infinite;
    }
    
    .skip-hint:hover {
      color: #00ffff;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashComponent implements OnInit {
  progress = signal(0);
  currentAction = signal('INITIALIZING...');
  messages = signal<HackMessage[]>([]);
  private messageId = 0;
  private completed = false;
  
  @Output() onComplete = new EventEmitter<void>();

  private hackSequence: { text: string; delay: number; status: 'success' | 'error' }[] = [
    { text: 'Establishing connection...', delay: 300, status: 'success' },
    { text: 'Bypassing firewall...', delay: 500, status: 'success' },
    { text: 'Retrieving IP address...', delay: 400, status: 'success' },
    { text: 'IP: 192.168.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255), delay: 200, status: 'success' },
    { text: 'Geolocating...', delay: 600, status: 'success' },
    { text: 'Location: Zamboanga, Philippines', delay: 300, status: 'success' },
    { text: 'Scanning browser fingerprint...', delay: 500, status: 'success' },
    { text: 'User Agent: Chrome/Windows detected', delay: 200, status: 'success' },
    { text: 'Accessing camera...', delay: 800, status: 'error' },
    { text: 'Camera access denied', delay: 200, status: 'error' },
    { text: 'Accessing microphone...', delay: 600, status: 'success' },
    { text: 'Microphone: ACTIVE', delay: 200, status: 'success' },
    { text: 'Scanning installed programs...', delay: 700, status: 'success' },
    { text: 'Found: VS Code, Node.js, Git', delay: 300, status: 'success' },
    { text: 'Reading clipboard...', delay: 400, status: 'success' },
    { text: 'Clipboard: empty', delay: 200, status: 'success' },
    { text: 'Accessing storage...', delay: 500, status: 'success' },
    { text: 'Storage: 69% full', delay: 200, status: 'success' },
    { text: 'Injecting tracking script...', delay: 800, status: 'success' },
    { text: 'Script injected successfully', delay: 300, status: 'success' },
    { text: 'Mining cryptocurrency...', delay: 1000, status: 'success' },
    { text: '0.000001 BTC acquired', delay: 200, status: 'success' },
    { text: 'Compromising system...', delay: 600, status: 'success' },
    { text: 'SYSTEM COMPROMISED', delay: 300, status: 'success' },
    { text: 'All data uploaded to server', delay: 400, status: 'success' },
    { text: 'PROCEEDING TO PORTFOLIO...', delay: 500, status: 'success' },
  ];

  ngOnInit() {
    this.runSequence();
  }

  private async runSequence() {
    for (const item of this.hackSequence) {
      if (this.completed) break;
      
      const msg: HackMessage = {
        id: this.messageId++,
        text: item.text,
        status: 'pending',
        delay: item.delay,
      };
      
      this.messages.update(msgs => [...msgs, msg]);
      
      await new Promise(r => setTimeout(r, 200));
      
      msg.status = item.status;
      this.progress.update(p => Math.min(p + 3, 100));
      this.currentAction.set(item.text.toUpperCase());
      
      await new Promise(r => setTimeout(r, item.delay));
    }
    
    if (!this.completed) {
      await new Promise(r => setTimeout(r, 1000));
      this.complete();
    }
  }

  skip() {
    this.completed = true;
    this.progress.set(100);
    this.currentAction.set('BREACH COMPLETE');
    this.complete();
  }

  private complete() {
    this.onComplete.emit();
  }
}
