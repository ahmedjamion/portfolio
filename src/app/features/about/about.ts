import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Interests } from './interests/interests';
import { Technologies } from './technologies/technologies';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { NgxFadeComponent } from '@omnedia/ngx-fade';

@Component({
  selector: 'app-about',
  imports: [Interests, Technologies, SectionTitle, NgxFadeComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}
