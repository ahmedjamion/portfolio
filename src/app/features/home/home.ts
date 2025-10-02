import { Component } from '@angular/core';
import { ScrollLink } from './scroll-link/scroll-link';

@Component({
  selector: 'app-home',
  imports: [ScrollLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
