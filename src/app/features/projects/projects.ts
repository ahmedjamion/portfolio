import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ProjectService } from '../../core/services/project-service/project-service';
import { Project } from './project/project';
import { NgxFadeComponent } from '@omnedia/ngx-fade';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, Project, NgxFadeComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.projects;
}
