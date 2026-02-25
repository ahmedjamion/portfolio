import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { ConnectedPosition, CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Icon } from '@shared/components/icon/icon.component';

/**
 * A dropdown button component that shows a menu when clicked.
 *
 * Uses Angular CDK's overlay system for positioning the dropdown
 * relative to the button. The dropdown can appear below the button
 * aligned to either the start or end, depending on available space.
 */
@Component({
  selector: 'app-dropdown-button',
  imports: [Icon, CdkConnectedOverlay, CdkOverlayOrigin],
  templateUrl: './dropdown-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownButton {
  // Reference to the host element for potential future use
  private readonly host = inject(ElementRef);

  // Track whether the dropdown is currently open
  readonly isOpen = signal(false);

  // Position configurations for the dropdown overlay
  // These tell Angular CDK where to position the overlay relative to the button
  // First preference: below button, left-aligned
  // Second preference: below button, right-aligned (fallback if no space on left)
  readonly positions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
    { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
  ];

  /**
   * Toggle the dropdown open/closed
   */
  toggle(): void {
    this.isOpen.update((v) => !v);
  }

  /**
   * Close the dropdown
   */
  close(): void {
    this.isOpen.set(false);
  }

  /**
   * Handle item selection - closes the dropdown after selection
   */
  onSelect(): void {
    this.close();
  }
}
