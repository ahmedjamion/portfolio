import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Section } from '@shared/components/section/section.component';
import { ProjectService } from '@core/services/project-service/project-service';
import { Project } from './project/project.component';
import { GlitchDirective } from '@shared/directives/glitch.directive';

@Component({
  selector: 'app-projects',
  imports: [Section, Project, GlitchDirective],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.projects;
}
