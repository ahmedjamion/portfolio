import { Injectable, signal } from '@angular/core';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly _projects = signal<Project[]>([
    {
      name: 'To Do List',
      description: 'A simple Android To-Do List app.',
      imageUrl: 'images/todolist.png',
      githubUrl: 'https://github.com/ahmedjamion/todolist-android.git',
    },
  ]);

  readonly projects = this._projects.asReadonly();
}
