import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ChaosService } from '@core/services/chaos-service/chaos-service';

@Component({
  selector: 'app-matrix-rain',
  standalone: true,
  template: '<canvas #canvas class="matrix-rain"></canvas>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatrixRainComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private chaos = inject(ChaosService);
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  private chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF@#$%^&*()';
  private fontSize = 14;
  private columns: number[] = [];
  private drops: number[] = [];

  ngOnInit() {
    this.initMatrix();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initMatrix() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const columns = canvas.width / this.fontSize;
    this.columns = Array(Math.floor(columns)).fill(0);
    this.drops = Array(Math.floor(columns)).fill(1);
    
    window.addEventListener('resize', () => this.handleResize());
  }

  private handleResize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const columns = canvas.width / this.fontSize;
    this.columns = Array(Math.floor(columns)).fill(0);
    this.drops = Array(Math.floor(columns)).fill(1);
  }

  private animate() {
    if (!this.ctx) return;
    
    const canvas = this.canvasRef.nativeElement;
    
    this.ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    this.ctx.fillStyle = '#00ff00';
    this.ctx.font = `${this.fontSize}px monospace`;
    
    for (let i = 0; i < this.drops.length; i++) {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;
      
      const colors = ['#00ff00', '#00ffff', '#ff00ff'];
      this.ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      this.ctx.fillText(char, x, y);
      
      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      
      this.drops[i]++;
    }
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}
