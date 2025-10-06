import { Component, input } from '@angular/core';

@Component({
  selector: 'app-scroll-link',
  imports: [],
  templateUrl: './scroll-link.html',
  styleUrl: './scroll-link.css',
})
export class ScrollLink {
  readonly text = input.required<string>();
  readonly sectionId = input.required<string>();
}
