import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Interest } from './interest/interest.component';

@Component({
  selector: 'app-interests',
  imports: [Interest],
  templateUrl: './interests.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Interests {}
