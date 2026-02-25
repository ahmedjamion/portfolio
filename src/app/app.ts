import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Header } from './shared/components/header/header.component';
import { Footer } from './features/footer/footer.component';
import { Home } from './features/home/home.component';
import { About } from './features/about/about.component';
import { Projects } from './features/projects/projects.component';
import { Contact } from './features/contact/contact.component';
import { ChaosComponent } from './shared/components/chaos/chaos.component';
import { SplashComponent } from './shared/components/splash/splash.component';

/**
 * Root application component.
 * 
 * This is the main container for the entire portfolio website.
 * It uses a single-page scrolling layout with all sections
 * rendered on one page for smooth navigation.
 */
@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, About, Projects, Contact, ChaosComponent, SplashComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  showSplash = signal(true);
  showContent = signal(false);

  onSplashComplete() {
    this.showSplash.set(false);
    setTimeout(() => {
      this.showContent.set(true);
    }, 500);
  }
}
