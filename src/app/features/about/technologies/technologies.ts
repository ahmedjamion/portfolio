import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Technology } from './technology/technology';
import { FrameworkService } from '../../../core/services/framework-service/framework-service';

@Component({
  selector: 'app-technologies',
  imports: [Technology],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Technologies {
  private readonly frameworkService = inject(FrameworkService);

  frameworks = this.frameworkService.frameworks;
}
