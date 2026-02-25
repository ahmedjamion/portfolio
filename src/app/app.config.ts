import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { ICONS } from './core/icons/icons';

/**
 * Application configuration for the portfolio website.
 * 
 * This sets up all the global providers needed by Angular including:
 * - Zoneless change detection (modern, more performant approach)
 * - Routing (required even for single-page apps)
 * - Service worker for PWA capabilities
 * - Icon library
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Handle global errors at the browser level
    provideBrowserGlobalErrorListeners(),
    
    // Use zoneless change detection - no Zone.js needed
    // This is more performant for simple portfolios with limited interactivity
    provideZonelessChangeDetection(),
    
    // Set up routing (required for Angular)
    provideRouter(routes),
    
    // Enable service worker for PWA offline capabilities
    // Only in production mode to make development easier
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
    // Register all icons from our icon configuration
    provideIcons(ICONS),
  ]
};
