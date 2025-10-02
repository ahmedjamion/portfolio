import { Component, inject } from '@angular/core';
import { Section } from '../../shared/components/section/section';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ProjectService } from '../../core/services/project-service/project-service';
import { Project } from './project/project';

@Component({
  selector: 'app-projects',
  imports: [Section, SectionTitle, Project],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.projects;
}
