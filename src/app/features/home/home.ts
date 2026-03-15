import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScrollLink } from './scroll-link/scroll-link';
import { Icon } from '../../shared/components/icon/icon';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { ThemeSelector } from '../../shared/components/theme-selector/theme-selector';

@Component({
  selector: 'app-home',
  imports: [ScrollLink, Icon, NgxTypewriterComponent, NgxFadeComponent, ThemeSelector],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly words = signal<string[]>([
    'Self Developer',
    'Flat Earther',
    'Doom Scroller',
    'Beginner Person',
    'Conspiracy Theory Enjoyer',
  ]);
}
