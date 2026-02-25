import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noise-overlay',
  standalone: true,
  template: '<div class="noise-overlay"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoiseOverlayComponent implements OnInit {
  ngOnInit() {}
}
