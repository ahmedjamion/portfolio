import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollLink } from './scroll-link/scroll-link';
import { AnimateIn } from '../../shared/directives/animate-in';

@Component({
  selector: 'app-home',
  imports: [ScrollLink, AnimateIn],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
