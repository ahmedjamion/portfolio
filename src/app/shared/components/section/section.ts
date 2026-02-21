import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateIn } from '../../directives/animate-in';

@Component({
  selector: 'app-section',
  imports: [AnimateIn],
  templateUrl: './section.html',
  styleUrl: './section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section {}
