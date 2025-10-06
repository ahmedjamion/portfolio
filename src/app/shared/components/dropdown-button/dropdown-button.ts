import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { ConnectedPosition, CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-dropdown-button',
  imports: [Icon, CdkConnectedOverlay, CdkOverlayOrigin],
  templateUrl: './dropdown-button.html',
  styleUrl: './dropdown-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownButton {
  private readonly host = inject(ElementRef);

  readonly isOpen = signal(false);

  readonly positions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
    { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
  ];

  toggle(): void {
    this.isOpen.update((v) => !v);
  }

  close(): void {
    this.isOpen.set(false);
  }

  onSelect(): void {
    this.close();
  }
}
