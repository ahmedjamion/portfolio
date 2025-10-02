import { Component, signal } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Footer } from './features/footer/footer';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, About, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
