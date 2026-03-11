import { inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  /**
   * Create a signal that tracks if the current device is a handset.
   * We use toSignal to convert the Observable into a reactive Signal.
   */
  readonly isHandset = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  // Example of a custom breakpoint
  readonly isLargeScreen = toSignal(
    this.breakpointObserver.observe(['(min-width: 1200px)']).pipe(map((result) => result.matches)),
    { initialValue: false },
  );
}
