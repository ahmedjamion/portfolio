import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChaosService {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private droneOscillator: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;

  readonly chaosLevel = signal<'mild' | 'medium' | 'extreme'>('extreme');
  readonly isAudioEnabled = signal(false);
  readonly isMouseMoving = signal(false);
  readonly mousePosition = signal({ x: 0, y: 0 });
  readonly lastClickPosition = signal({ x: 0, y: 0 });
  readonly isClicking = signal(false);
  readonly scrollPosition = signal(0);

  private mouseTimeout: ReturnType<typeof setTimeout> | null = null;
  private particleInterval: ReturnType<typeof setInterval> | null = null;
  private randomEventInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    effect(() => {
      if (this.isAudioEnabled()) {
        this.startAmbientDrone();
      } else {
        this.stopAmbientDrone();
      }
    });
  }

  enableAudio(): void {
    if (this.isAudioEnabled()) return;
    
    this.audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = 0.3;
    this.masterGain.connect(this.audioContext.destination);
    
    this.isAudioEnabled.set(true);
    this.playStartupSound();
  }

  disableAudio(): void {
    this.isAudioEnabled.set(false);
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }

  private playStartupSound(): void {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    
    const osc1 = this.audioContext.createOscillator();
    const osc2 = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc1.type = 'sawtooth';
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(80, now);
    osc1.frequency.exponentialRampToValueAtTime(800, now + 0.1);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.5);
    
    osc2.frequency.setValueAtTime(160, now);
    osc2.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
    osc2.frequency.exponentialRampToValueAtTime(60, now + 0.5);
    
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);
    
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.5);
    osc2.stop(now + 0.5);
  }

  private startAmbientDrone(): void {
    if (!this.audioContext || !this.masterGain) return;

    this.droneGain = this.audioContext.createGain();
    this.droneGain.gain.value = 0.05;
    this.droneGain.connect(this.masterGain);

    this.droneOscillator = this.audioContext.createOscillator();
    this.droneOscillator.type = 'sine';
    this.droneOscillator.frequency.value = 55;
    this.droneOscillator.connect(this.droneGain);
    this.droneOscillator.start();

    const lfo = this.audioContext.createOscillator();
    const lfoGain = this.audioContext.createGain();
    lfo.frequency.value = 0.1;
    lfoGain.gain.value = 10;
    lfo.connect(lfoGain);
    lfoGain.connect(this.droneOscillator.frequency);
    lfo.start();
  }

  private stopAmbientDrone(): void {
    if (this.droneOscillator) {
      this.droneOscillator.stop();
      this.droneOscillator = null;
    }
    if (this.droneGain) {
      this.droneGain = null;
    }
  }

  playHoverSound(): void {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(800 + Math.random() * 400, now);
    osc.frequency.exponentialRampToValueAtTime(200 + Math.random() * 100, now + 0.05);
    
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    
    osc.start(now);
    osc.stop(now + 0.05);
  }

  playClickSound(): void {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    
    const osc = this.audioContext.createOscillator();
    const osc2 = this.audioContext.createOscillator();
    const noise = this.createNoise();
    const gain = this.audioContext.createGain();
    const gain2 = this.audioContext.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);
    
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(400, now);
    osc2.frequency.exponentialRampToValueAtTime(100, now + 0.15);
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    
    gain2.gain.setValueAtTime(0.2, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    
    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(this.masterGain);
    gain2.connect(this.masterGain);
    
    osc.start(now);
    osc2.start(now);
    osc.stop(now + 0.1);
    osc2.stop(now + 0.15);
  }

  playRandomAlert(): void {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    const messages = [
      'SYSTEM BREACH',
      'UNAUTHORIZED ACCESS',
      'FIREWALL COMPROMISED',
      'DATA CORRUPTION',
      'OVERRIDE IN PROGRESS'
    ];
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.setValueAtTime(800, now + 0.1);
    osc.frequency.setValueAtTime(1200, now + 0.2);
    osc.frequency.setValueAtTime(600, now + 0.3);
    
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.setValueAtTime(0.1, now + 0.1);
    gain.gain.setValueAtTime(0.15, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    
    osc.start(now);
    osc.stop(now + 0.5);

    console.log(`%c⚠️ ${message}`, 'color: red; font-size: 20px; font-weight: bold;');
  }

  private createNoise(): AudioBufferSourceNode {
    const bufferSize = this.audioContext!.sampleRate * 0.1;
    const buffer = this.audioContext!.createBuffer(1, bufferSize, this.audioContext!.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = this.audioContext!.createBufferSource();
    noise.buffer = buffer;
    return noise;
  }

  playNoiseHit(): void {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    const noise = this.createNoise();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();
    
    filter.type = 'highpass';
    filter.frequency.value = 1000;
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    
    noise.start(now);
    noise.stop(now + 0.1);
  }

  trackMouse(event: MouseEvent): void {
    this.mousePosition.set({ x: event.clientX, y: event.clientY });
    this.isMouseMoving.set(true);
    
    if (this.mouseTimeout) {
      clearTimeout(this.mouseTimeout);
    }
    
    this.mouseTimeout = setTimeout(() => {
      this.isMouseMoving.set(false);
    }, 100);
  }

  trackClick(event: MouseEvent): void {
    this.lastClickPosition.set({ x: event.clientX, y: event.clientY });
    this.isClicking.set(true);
    this.playClickSound();
    
    setTimeout(() => this.isClicking.set(false), 100);
  }

  trackScroll(position: number): void {
    this.scrollPosition.set(position);
  }

  triggerRandomEvent(): void {
    const events = [
      () => this.playRandomAlert(),
      () => this.playNoiseHit(),
      () => this.screenShake(),
      () => this.randomInvert(),
    ];
    
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    randomEvent();
  }

  private screenShake(): void {
    document.body.classList.add('screen-shake');
    setTimeout(() => document.body.classList.remove('screen-shake'), 300);
  }

  private randomInvert(): void {
    document.body.classList.add('invert-chaos');
    setTimeout(() => document.body.classList.remove('invert-chaos'), 150);
  }

  startChaos(): void {
    this.enableAudio();
    
    this.randomEventInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        this.triggerRandomEvent();
      }
    }, 3000);
  }

  stopChaos(): void {
    if (this.randomEventInterval) {
      clearInterval(this.randomEventInterval);
    }
    this.disableAudio();
  }
}
