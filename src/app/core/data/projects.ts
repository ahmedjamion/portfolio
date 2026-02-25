import { Project } from '../models/project';

/**
 * Static data for my portfolio projects.
 * This is separated from the service to keep data easily maintainable.
 * Add new projects here to show them on the website.
 */
export const PROJECTS: Project[] = [
  {
    name: 'To Do List Android App',
    description:
      'A simple Android To-Do List app built with Kotlin, Jetpack Compose, MVVM, Hilt, and Room.',
    imageUrl: 'images/todolist.png',
    githubUrl: 'https://github.com/ahmedjamion/todolist-android.git',
  },
];
