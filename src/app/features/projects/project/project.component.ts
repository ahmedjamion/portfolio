import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HoverChaosDirective } from '@shared/directives/hover-chaos.directive';
import { GlitchDirective } from '@shared/directives/glitch.directive';

@Component({
  selector: 'app-project',
  imports: [NgOptimizedImage, HoverChaosDirective, GlitchDirective],
  templateUrl: './project.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project {
  readonly name = input<string>('');
  readonly description = input<string>('');
  readonly imageUrl = input<string | undefined>(undefined);
  readonly githubUrl = input<string | undefined>(undefined);

  getRandomStat(): string {
    const stats = [1, 10, 50, 69, 99, 420, 69420];
    return String(stats[Math.floor(Math.random() * stats.length)]);
  }

  getRandomRarity(): string {
    const rarities = ['COMMON', 'UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY'];
    return rarities[Math.floor(Math.random() * rarities.length)];
  }
}
