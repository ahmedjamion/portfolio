import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Interest } from './interest/interest';

@Component({
  selector: 'app-interests',
  imports: [Interest],
  templateUrl: './interests.html',
  styleUrl: './interests.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Interests {}
