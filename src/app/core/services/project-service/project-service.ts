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
    {
      name: 'PDF Merger',
      description: 'Merge pdfs and images into one single pdf file.',
      githubUrl: 'https://github.com/ahmedjamion/pdf-merger.git',
      liveUrl: 'https://ahmedjamion.github.io/pdf-merger',
    },
    {
      name: 'PDF to Image',
      description: 'Convert pdf pages into images.',
      githubUrl: 'https://github.com/ahmedjamion/pdf-to-image.git',
      liveUrl: 'https://ahmedjamion.github.io/pdf-to-image',
    },
    {
      name: 'Checksum Verifier',
      description: 'Verify the integrity of downloaded files.',
      githubUrl: 'https://github.com/ahmedjamion/checksum_verifier.git',
    },
    {
      name: 'Audio Player Offline',
      description: 'Play local audio files offline.',
      githubUrl: 'https://github.com/ahmedjamion/audio_player_offline.git',
    },
  ]);

  readonly projects = this._projects.asReadonly();
}
