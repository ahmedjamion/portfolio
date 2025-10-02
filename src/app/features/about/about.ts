import { Component } from '@angular/core';
import { Section } from '../../shared/components/section/section';
import { Interests } from './interests/interests';
import { Technologies } from './technologies/technologies';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  imports: [Section, Interests, Technologies, SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
