import { Injectable, signal } from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects';

/**
 * Service that provides access to portfolio projects data.
 *
 * Using signals to make the data reactive. The .asReadonly() ensures
 * components can read but not modify the data directly.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // Store projects in a private signal, exposed as readonly
  private readonly _projects = signal<Project[]>(PROJECTS);

  // Public readonly version of the signal
  readonly projects = this._projects.asReadonly();
}
